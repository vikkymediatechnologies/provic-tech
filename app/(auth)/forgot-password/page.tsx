'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useAuth } from '@/components/auth/auth-context'

export default function ForgotPasswordPage() {
  const { forgotPassword, isLoading } = useAuth()

  const [email,   setEmail  ] = useState('')
  const [error,   setError  ] = useState('')
  const [sent,    setSent   ] = useState(false)
  const [apiError, setApiError] = useState('')

  const validate = () => {
    if (!email) { setError('Email is required'); return false }
    if (!/\S+@\S+\.\S+/.test(email)) { setError('Enter a valid email address'); return false }
    setError('')
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiError('')
    if (!validate()) return
    try {
      await forgotPassword({ email })
      setSent(true)
    } catch (err: any) {
      setApiError(err.message ?? 'Something went wrong. Please try again.')
    }
  }

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

        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, hsl(43 96% 56% / 0.10) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                Password Recovery
              </span>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-5xl leading-[0.9] tracking-tight text-black dark:text-white"
              >
                FORGOT
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-5xl leading-[0.9] tracking-tight text-transparent"
                style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}
              >
                PASSWORD?
              </motion.h1>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {sent ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                </div>
                <div>
                  <p className="font-bebas text-2xl tracking-tight text-black dark:text-white mb-1">
                    Check Your Email
                  </p>
                  <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                    We sent a 6-digit OTP to<br />
                    <span className="text-gold font-semibold">{email}</span>
                  </p>
                </div>
                <Link
                  href={`/verify-otp?email=${encodeURIComponent(email)}&type=password-reset`}
                  className="group w-full flex items-center justify-center gap-2.5 h-12 rounded-xl
                    bg-gold text-black text-sm font-bold tracking-wide
                    hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20"
                >
                  Enter OTP
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-black/35 dark:text-white/35 hover:text-gold transition-colors"
                >
                  Try a different email
                </button>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.div key="form">
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-6">
                  Enter your email address and we&apos;ll send you a one-time password to reset your account.
                </p>

                <AnimatePresence>
                  {apiError && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 flex items-center gap-2.5 p-3.5 rounded-xl
                        bg-red-500/8 border border-red-500/20 text-red-500 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {apiError}
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email"
                      className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40 font-bold">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4
                        text-black/30 dark:text-white/30 pointer-events-none" />
                      <input
                        id="email" type="email" placeholder="you@example.com"
                        value={email} onChange={(e) => { setEmail(e.target.value); setError('') }}
                        className={`w-full h-11 pl-10 pr-4 rounded-xl text-sm
                          bg-black/[0.02] dark:bg-white/[0.04]
                          border transition-all duration-200
                          text-black dark:text-white
                          placeholder:text-black/25 dark:placeholder:text-white/25
                          focus:outline-none focus:border-gold/60 focus:bg-gold/[0.02]
                          ${error ? 'border-red-500/60' : 'border-black/10 dark:border-white/10'}`}
                      />
                    </div>
                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                          className="flex items-center gap-1.5 text-[11px] text-red-500"
                        >
                          <AlertCircle className="w-3 h-3 shrink-0" />{error}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    type="submit" disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className="group w-full flex items-center justify-center gap-2.5 h-12 rounded-xl
                      bg-gold text-black text-sm font-bold tracking-wide
                      hover:bg-gold/90 disabled:opacity-60 disabled:cursor-not-allowed
                      transition-all duration-300 shadow-lg shadow-gold/20"
                  >
                    {isLoading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending OTP…
                      </>
                    ) : (
                      <>
                        Send OTP
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>

                  <div className="text-center">
                    <Link href="/login"
                      className="text-xs text-black/40 dark:text-white/40 hover:text-gold transition-colors">
                      ← Back to Sign In
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