'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Eye, EyeOff, Mail, Lock, Phone,
  ArrowUpRight, AlertCircle, CheckCircle,
} from 'lucide-react'
import { useAuth } from '@/components/auth/auth-context'

// ─── Shared field component ───────────────────────────────────────────────────
function Field({
  label, id, type = 'text', placeholder,
  value, onChange, error,
  icon: Icon, rightSlot, note,
}: {
  label:       string
  id:          string
  type?:       string
  placeholder: string
  value:       string
  onChange:    (v: string) => void
  error?:      string
  icon:        React.ComponentType<{ className?: string }>
  rightSlot?:  React.ReactNode
  note?:       string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id}
        className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40 font-bold">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4
          text-black/25 dark:text-white/25 pointer-events-none" />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={id}
          className={`w-full h-11 pl-10 ${rightSlot ? 'pr-11' : 'pr-4'} rounded-xl text-sm
            bg-black/[0.02] dark:bg-white/[0.04]
            border transition-all duration-200
            text-black dark:text-white
            placeholder:text-black/25 dark:placeholder:text-white/25
            focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 focus:bg-gold/[0.01]
            ${error ? 'border-red-500/60' : 'border-black/10 dark:border-white/10'}`}
        />
        {rightSlot && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
        )}
      </div>
      {note && !error && (
        <p className="text-[10px] text-black/30 dark:text-white/30">{note}</p>
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex items-center gap-1.5 text-[11px] text-red-500"
          >
            <AlertCircle className="w-3 h-3 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
type Tab = 'email' | 'phone'

export default function LoginPage() {
  const { login, isLoading } = useAuth()
  const searchParams = useSearchParams()
  const justVerified = searchParams.get('verified') === '1'

  const [tab,       setTab      ] = useState<Tab>('email')
  const [email,     setEmail    ] = useState('')
  const [password,  setPassword ] = useState('')
  const [phone,     setPhone    ] = useState('')
  const [showPass,  setShowPass ] = useState(false)
  const [errors,    setErrors   ] = useState<Record<string, string>>({})
  const [apiError,  setApiError ] = useState('')
  const [gLoading,  setGLoading ] = useState(false)

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const e: Record<string, string> = {}
    if (tab === 'email') {
      if (!email)                            e.email    = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(email)) e.email    = 'Enter a valid email'
      if (!password)                         e.password = 'Password is required'
      else if (password.length < 6)          e.password = 'Minimum 6 characters'
    } else {
      if (!phone)                            e.phone    = 'Phone number is required'
      else if (phone.replace(/\D/g, '').length < 10)
                                             e.phone    = 'Enter a valid phone number'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  // ── Email / password submit ─────────────────────────────────────────────────
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiError('')
    if (!validate()) return
    try {
      await login({ email, password })
      // auth-context handles redirect to /dashboard
    } catch (err: any) {
      setApiError(err.message ?? 'Login failed. Please try again.')
    }
  }

  // ── Phone OTP submit ────────────────────────────────────────────────────────
  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiError('')
    if (!validate()) return
    // TODO: POST /api/auth/otp/send  { phone: '+234' + phone }
    // On success → redirect to verify-otp page
    window.location.href = `/verify-otp?phone=${encodeURIComponent('+234' + phone.replace(/^0/, ''))}&type=login`
  }

  // ── Google ──────────────────────────────────────────────────────────────────
  const handleGoogle = () => {
    setGLoading(true)
    // TODO: window.location.href = '/api/auth/google'
    setTimeout(() => setGLoading(false), 1500)
  }

  const switchTab = (t: Tab) => {
    setTab(t)
    setErrors({})
    setApiError('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-md"
    >
      {/* ── Verified banner ── */}
      <AnimatePresence>
        {justVerified && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mb-4 flex items-center gap-2.5 p-3.5 rounded-xl
              bg-emerald-500/8 border border-emerald-500/20 text-emerald-600 text-sm"
          >
            <CheckCircle className="w-4 h-4 shrink-0" />
            Password reset successful. Sign in below.
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Card ── */}
      <div className="relative overflow-hidden rounded-2xl
        bg-white dark:bg-[#111]
        border border-black/8 dark:border-white/8
        shadow-[0_8px_60px_-12px] shadow-black/10 dark:shadow-black/50
        p-8 sm:p-10">

        {/* Inner glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 85% 10%, hsl(43 96% 56% / 0.07) 0%, transparent 55%)' }} />

        {/* Corner bracket */}
        <div className="absolute top-5 right-5 opacity-25 pointer-events-none">
          <div className="w-4 h-px bg-gold mb-1" />
          <div className="w-px h-4 bg-gold ml-auto" />
        </div>

        <div className="relative z-10">

          {/* ── Eyebrow ── */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
              Welcome Back
            </span>
          </div>

          {/* ── Headline ── */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '110%' }} animate={{ y: '0%' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-5xl sm:text-6xl leading-[0.9] tracking-tight
                text-black dark:text-white"
            >
              SIGN IN
            </motion.h1>
          </div>

          <p className="text-sm text-black/45 dark:text-white/45 mb-7">
            Don&apos;t have an account?{' '}
            <Link href="/signup"
              className="text-gold hover:text-yellow-500 font-semibold transition-colors">
              Create one
            </Link>
          </p>

          {/* ── Tab toggle ── */}
          <div className="flex items-center gap-1 p-1 rounded-xl
            bg-black/[0.03] dark:bg-white/[0.04]
            border border-black/6 dark:border-white/6
            mb-6">
            {(['email', 'phone'] as Tab[]).map((t) => (
              <button key={t} type="button"
                onClick={() => switchTab(t)}
                className={`flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg
                  text-xs font-semibold tracking-wide transition-all duration-300
                  ${tab === t
                    ? 'bg-white dark:bg-[#1c1c1c] text-black dark:text-white shadow-sm border border-black/6 dark:border-white/8'
                    : 'text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white'
                  }`}
              >
                {t === 'email'
                  ? <><Mail className="w-3.5 h-3.5" /> Email</>
                  : <><Phone className="w-3.5 h-3.5" /> Phone / OTP</>
                }
              </button>
            ))}
          </div>

          {/* ── API Error ── */}
          <AnimatePresence>
            {apiError && (
              <motion.div
                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-5 flex items-center gap-2.5 p-3.5 rounded-xl
                  bg-red-500/8 border border-red-500/20 text-red-500 text-sm"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                {apiError}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Forms ── */}
          <AnimatePresence mode="wait">
            {tab === 'email' ? (
              <motion.form
                key="email-form"
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.22 }}
                onSubmit={handleEmailSubmit}
                className="flex flex-col gap-4"
              >
                <Field
                  label="Email Address" id="email" type="email"
                  placeholder="you@example.com"
                  value={email} onChange={setEmail} error={errors.email} icon={Mail}
                />

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password"
                      className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40 font-bold">
                      Password
                    </label>
                    <Link href="/forgot-password"
                      className="text-[10px] text-gold hover:text-yellow-500 font-medium transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4
                      text-black/25 dark:text-white/25 pointer-events-none" />
                    <input
                      id="password"
                      type={showPass ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      className={`w-full h-11 pl-10 pr-11 rounded-xl text-sm
                        bg-black/[0.02] dark:bg-white/[0.04]
                        border transition-all duration-200
                        text-black dark:text-white
                        placeholder:text-black/25 dark:placeholder:text-white/25
                        focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20
                        ${errors.password ? 'border-red-500/60' : 'border-black/10 dark:border-white/10'}`}
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2
                        text-black/25 dark:text-white/25 hover:text-gold transition-colors">
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.password && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-1.5 text-[11px] text-red-500">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.password}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit" disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="group mt-1 w-full flex items-center justify-center gap-2.5 h-12 rounded-xl
                    bg-gold hover:bg-yellow-400 text-black text-sm font-bold tracking-wide
                    disabled:opacity-60 disabled:cursor-not-allowed
                    transition-all duration-300
                    shadow-[0_0_28px_-6px] shadow-gold/40
                    hover:shadow-[0_0_40px_-4px] hover:shadow-gold/60"
                >
                  {isLoading ? (
                    <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg> Signing in…</>
                  ) : (
                    <>Sign In <ArrowUpRight className="w-4 h-4 transition-transform duration-300
                      group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.form
                key="phone-form"
                initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.22 }}
                onSubmit={handlePhoneSubmit}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone"
                    className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40 font-bold">
                    WhatsApp / Phone Number
                  </label>
                  <div className="relative">
                    {/* Country prefix */}
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2
                      flex items-center gap-1.5 pointer-events-none select-none">
                      <span className="text-sm leading-none">🇳🇬</span>
                      <span className="text-sm text-black/40 dark:text-white/40">+234</span>
                      <div className="w-px h-4 bg-black/10 dark:bg-white/10" />
                    </div>
                    <input
                      id="phone" type="tel"
                      value={phone} onChange={(e) => setPhone(e.target.value)}
                      placeholder="803 000 0000"
                      className={`w-full h-11 pl-[6.5rem] pr-4 rounded-xl text-sm
                        bg-black/[0.02] dark:bg-white/[0.04]
                        border transition-all duration-200
                        text-black dark:text-white
                        placeholder:text-black/25 dark:placeholder:text-white/25
                        focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20
                        ${errors.phone ? 'border-red-500/60' : 'border-black/10 dark:border-white/10'}`}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.phone && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-1.5 text-[11px] text-red-500">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.phone}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <p className="text-[10px] text-black/30 dark:text-white/30">
                    We'll send a one-time code to this number
                  </p>
                </div>

                <motion.button
                  type="submit" disabled={isLoading || !phone}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="group w-full flex items-center justify-center gap-2.5 h-12 rounded-xl
                    bg-gold hover:bg-yellow-400 text-black text-sm font-bold tracking-wide
                    disabled:opacity-40 disabled:cursor-not-allowed
                    transition-all duration-300
                    shadow-[0_0_28px_-6px] shadow-gold/40
                    hover:shadow-[0_0_40px_-4px] hover:shadow-gold/60"
                >
                  {isLoading ? (
                    <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg> Sending…</>
                  ) : (
                    <>Send OTP Code <ArrowUpRight className="w-4 h-4 transition-transform duration-300
                      group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* ── Divider ── */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-black/8 dark:bg-white/8" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-black/25 dark:text-white/25 shrink-0">
              or continue with
            </span>
            <div className="flex-1 h-px bg-black/8 dark:bg-white/8" />
          </div>

          {/* ── Google button ── */}
          <motion.button
            type="button" onClick={handleGoogle} disabled={gLoading}
            whileHover={{ scale: gLoading ? 1 : 1.02 }}
            whileTap={{ scale: gLoading ? 1 : 0.98 }}
            className="w-full h-11 rounded-xl flex items-center justify-center gap-3
              border border-black/10 dark:border-white/10
              bg-black/[0.01] dark:bg-white/[0.02]
              text-black/65 dark:text-white/65
              hover:border-black/20 dark:hover:border-white/20
              hover:text-black dark:hover:text-white
              text-sm font-semibold tracking-wide
              transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {gLoading ? (
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            )}
            Continue with Google
          </motion.button>
        </div>
      </div>

      {/* Editorial index */}
      <p className="mt-4 text-right text-[9px] tracking-[0.3em] uppercase
        text-black/15 dark:text-white/15 font-medium">
        01 / Auth
      </p>
    </motion.div>
  )
}