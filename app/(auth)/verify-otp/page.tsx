'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, AlertCircle, CheckCircle2, RefreshCw } from 'lucide-react'
import { useAuth } from '@/components/auth/auth-context'

const OTP_LENGTH = 6
const RESEND_COOLDOWN = 60 // seconds

export default function VerifyOTPPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') ?? ''
  const type  = (searchParams.get('type') ?? 'email-verification') as
    'email-verification' | 'password-reset'

  const { verifyOTP, resendOTP, isLoading } = useAuth()

  const [otp,       setOtp      ] = useState<string[]>(Array(OTP_LENGTH).fill(''))
  const [error,     setError    ] = useState('')
  const [resending, setResending] = useState(false)
  const [cooldown,  setCooldown ] = useState(0)
  const [verified,  setVerified ] = useState(false)

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // ── Cooldown timer ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (cooldown <= 0) return
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000)
    return () => clearTimeout(t)
  }, [cooldown])

  // ── Focus first input on mount ──────────────────────────────────────────────
  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  // ── Handle single digit input ───────────────────────────────────────────────
  const handleChange = (index: number, value: string) => {
    // Allow only single digit
    const digit = value.replace(/\D/g, '').slice(-1)
    const next  = [...otp]
    next[index] = digit
    setOtp(next)
    setError('')

    // Auto-advance to next input
    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // ── Handle paste ────────────────────────────────────────────────────────────
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH)
    if (!pasted) return
    const next = [...otp]
    pasted.split('').forEach((d, i) => { next[i] = d })
    setOtp(next)
    // Focus last filled or end
    const lastIndex = Math.min(pasted.length, OTP_LENGTH - 1)
    inputRefs.current[lastIndex]?.focus()
  }

  // ── Handle backspace ────────────────────────────────────────────────────────
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        const next = [...otp]
        next[index] = ''
        setOtp(next)
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus()
        const next = [...otp]
        next[index - 1] = ''
        setOtp(next)
      }
    }
    if (e.key === 'ArrowLeft' && index > 0) inputRefs.current[index - 1]?.focus()
    if (e.key === 'ArrowRight' && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus()
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const code = otp.join('')
    if (code.length < OTP_LENGTH) {
      setError('Please enter the complete 6-digit code.')
      return
    }
    setError('')
    try {
      await verifyOTP({ email, otp: code, type })
      setVerified(true)
    } catch (err: any) {
      setError(err.message ?? 'Invalid or expired OTP. Please try again.')
      // Shake and clear on error
      setOtp(Array(OTP_LENGTH).fill(''))
      setTimeout(() => inputRefs.current[0]?.focus(), 100)
    }
  }

  // ── Resend ──────────────────────────────────────────────────────────────────
  const handleResend = useCallback(async () => {
    if (cooldown > 0 || resending) return
    setResending(true)
    try {
      await resendOTP({ email, type })
      setCooldown(RESEND_COOLDOWN)
      setOtp(Array(OTP_LENGTH).fill(''))
      setError('')
      setTimeout(() => inputRefs.current[0]?.focus(), 100)
    } catch {
      setError('Failed to resend OTP. Please try again.')
    } finally {
      setResending(false)
    }
  }, [cooldown, resending, resendOTP, email, type])

  const isComplete = otp.every((d) => d !== '')

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-md"
    >
      <div className="relative rounded-3xl overflow-hidden
        bg-black/[0.02] dark:bg-white/[0.03]
        border border-black/8 dark:border-white/8
        p-8 sm:p-10">

        {/* corner glow */}
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, hsl(43 96% 56% / 0.10) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative">

          <AnimatePresence mode="wait">
            {verified ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-5 py-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </motion.div>
                <div>
                  <p className="font-bebas text-3xl tracking-tight text-black dark:text-white mb-1">
                    {type === 'email-verification' ? 'Email Verified!' : 'Identity Confirmed!'}
                  </p>
                  <p className="text-sm text-black/50 dark:text-white/50">
                    {type === 'email-verification'
                      ? 'Your account is now active. Redirecting to dashboard…'
                      : 'You can now set a new password. Redirecting…'}
                  </p>
                </div>
              </motion.div>
            ) : (
              /* ── OTP form ── */
              <motion.div key="form">

                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-px bg-gold" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                      {type === 'email-verification' ? 'Email Verification' : 'Password Reset'}
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: '100%' }}
                      animate={{ y: '0%' }}
                      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="font-bebas text-5xl leading-[0.9] tracking-tight text-black dark:text-white"
                    >
                      ENTER CODE
                    </motion.h1>
                  </div>
                  <p className="mt-3 text-sm text-black/50 dark:text-white/50 leading-relaxed">
                    We sent a 6-digit code to{' '}
                    <span className="text-gold font-semibold break-all">{email || 'your email'}</span>.
                    <br />It expires in 10 minutes.
                  </p>
                </div>

                {/* API error */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-5 flex items-center gap-2.5 p-3.5 rounded-xl
                        bg-red-500/8 border border-red-500/20 text-red-500 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                  {/* ── OTP Inputs ── */}
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40 font-bold mb-3 block">
                      6-Digit Code
                    </label>
                    <div className="flex items-center gap-2 sm:gap-3">
                      {otp.map((digit, i) => (
                        <motion.input
                          key={i}
                          ref={(el) => { inputRefs.current[i] = el }}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleChange(i, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(i, e)}
                          onPaste={i === 0 ? handlePaste : undefined}
                          whileFocus={{ scale: 1.05 }}
                          className={`w-full aspect-square rounded-xl text-center text-lg font-bold
                            border-2 transition-all duration-200
                            text-black dark:text-white
                            focus:outline-none
                            ${digit
                              ? 'border-gold bg-gold/[0.05] text-gold'
                              : 'border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] focus:border-gold/60'
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isLoading || !isComplete}
                    whileHover={{ scale: isLoading || !isComplete ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading || !isComplete ? 1 : 0.98 }}
                    className="group w-full flex items-center justify-center gap-2.5 h-12 rounded-xl
                      bg-gold text-black text-sm font-bold tracking-wide
                      hover:bg-gold/90
                      disabled:opacity-40 disabled:cursor-not-allowed
                      transition-all duration-300 shadow-lg shadow-gold/20"
                  >
                    {isLoading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Verifying…
                      </>
                    ) : (
                      <>
                        Verify Code
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>

                  {/* Resend */}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xs text-black/40 dark:text-white/40">
                      Didn&apos;t receive the code?
                    </p>
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={cooldown > 0 || resending}
                      className="flex items-center gap-1.5 text-xs font-semibold
                        text-gold hover:text-gold/80
                        disabled:text-black/25 dark:disabled:text-white/25
                        disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      <RefreshCw className={`w-3 h-3 ${resending ? 'animate-spin' : ''}`} />
                      {resending
                        ? 'Sending…'
                        : cooldown > 0
                        ? `Resend in ${cooldown}s`
                        : 'Resend Code'}
                    </button>
                  </div>

                  {/* Back link */}
                  <div className="text-center pt-1">
                    <Link
                      href={type === 'password-reset' ? '/forgot-password' : '/signup'}
                      className="text-xs text-black/35 dark:text-white/35 hover:text-gold transition-colors"
                    >
                      ← Go back
                    </Link>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}