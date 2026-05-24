'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, AlertCircle, Check } from 'lucide-react'
import { useAuth } from '@/components/auth/auth-context'

// ─── Reusable field ───────────────────────────────────────────────────────────
function Field({
  label, id, type = 'text', placeholder, value, onChange, error, icon: Icon, rightSlot,
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
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40 font-bold">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30 dark:text-white/30 pointer-events-none" />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full h-11 pl-10 pr-${rightSlot ? '11' : '4'} rounded-xl text-sm
            bg-black/[0.02] dark:bg-white/[0.04]
            border transition-all duration-200
            text-black dark:text-white
            placeholder:text-black/25 dark:placeholder:text-white/25
            focus:outline-none focus:border-gold/60 focus:bg-gold/[0.02]
            ${error ? 'border-red-500/60' : 'border-black/10 dark:border-white/10'}`}
        />
        {rightSlot && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
        )}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
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

// ─── Password strength ────────────────────────────────────────────────────────
function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: 'At least 8 characters', pass: password.length >= 8 },
    { label: 'One uppercase letter',  pass: /[A-Z]/.test(password) },
    { label: 'One number',            pass: /\d/.test(password)    },
  ]
  if (!password) return null
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="flex flex-col gap-1.5 mt-1"
    >
      {checks.map((c) => (
        <div key={c.label} className="flex items-center gap-2">
          <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-colors duration-300
            ${c.pass ? 'bg-emerald-500' : 'bg-black/10 dark:bg-white/10'}`}>
            {c.pass && <Check className="w-2 h-2 text-white" />}
          </div>
          <span className={`text-[11px] transition-colors duration-300
            ${c.pass ? 'text-emerald-600 dark:text-emerald-400' : 'text-black/35 dark:text-white/35'}`}>
            {c.label}
          </span>
        </div>
      ))}
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SignupPage() {
  const { signup, isLoading } = useAuth()

  const [firstName, setFirstName] = useState('')
  const [lastName,  setLastName ] = useState('')
  const [email,     setEmail    ] = useState('')
  const [phone,     setPhone    ] = useState('')
  const [password,  setPassword ] = useState('')
  const [showPass,  setShowPass ] = useState(false)
  const [agreed,    setAgreed   ] = useState(false)
  const [errors,    setErrors   ] = useState<Record<string, string>>({})
  const [apiError,  setApiError ] = useState('')

  const validate = () => {
    const e: Record<string, string> = {}
    if (!firstName.trim())                 e.firstName = 'First name is required'
    if (!lastName.trim())                  e.lastName  = 'Last name is required'
    if (!email)                            e.email     = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email)) e.email     = 'Enter a valid email'
    if (!password)                         e.password  = 'Password is required'
    else if (password.length < 8)          e.password  = 'Password must be at least 8 characters'
    if (!agreed)                           e.agreed    = 'You must accept the terms'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiError('')
    if (!validate()) return
    try {
      await signup({ firstName, lastName, email, phone, password })
    } catch (err: any) {
      setApiError(err.message ?? 'Signup failed. Please try again.')
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

        <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, hsl(43 96% 56% / 0.10) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        {/* Header */}
        <div className="relative mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Create Account</span>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-5xl leading-[0.9] tracking-tight text-black dark:text-white"
            >
              SIGN UP
            </motion.h1>
          </div>
          <p className="mt-2 text-sm text-black/45 dark:text-white/45">
            Already have an account?{' '}
            <Link href="/login" className="text-gold hover:text-gold/80 font-semibold transition-colors">
              Sign in
            </Link>
          </p>
        </div>

        <AnimatePresence>
          {apiError && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-5 flex items-center gap-2.5 p-3.5 rounded-xl
                bg-red-500/8 border border-red-500/20 text-red-500 text-sm"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              {apiError}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name row */}
          <div className="grid grid-cols-2 gap-3">
            <Field label="First Name" id="firstName" placeholder="John"
              value={firstName} onChange={setFirstName} error={errors.firstName} icon={User} />
            <Field label="Last Name" id="lastName" placeholder="Doe"
              value={lastName} onChange={setLastName} error={errors.lastName} icon={User} />
          </div>

          <Field label="Email Address" id="email" type="email" placeholder="you@example.com"
            value={email} onChange={setEmail} error={errors.email} icon={Mail} />

          <Field label="Phone Number (optional)" id="phone" type="tel"
            placeholder="+234 800 000 0000"
            value={phone} onChange={setPhone} icon={Phone} />

          <div>
            <Field
              label="Password" id="password"
              type={showPass ? 'text' : 'password'}
              placeholder="Create a strong password"
              value={password} onChange={setPassword}
              error={errors.password} icon={Lock}
              rightSlot={
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="text-black/30 dark:text-white/30 hover:text-gold transition-colors">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
            />
            <AnimatePresence>
              {password && <PasswordStrength password={password} />}
            </AnimatePresence>
          </div>

          {/* Terms */}
          <div className="flex flex-col gap-1">
            <label className="flex items-start gap-3 cursor-pointer">
              <div
                onClick={() => setAgreed(!agreed)}
                className={`mt-0.5 w-4 h-4 rounded-md border-2 shrink-0 flex items-center justify-center
                  transition-all duration-200 cursor-pointer
                  ${agreed
                    ? 'bg-gold border-gold'
                    : 'border-black/20 dark:border-white/20 hover:border-gold/60'
                  }`}
              >
                {agreed && <Check className="w-2.5 h-2.5 text-black" />}
              </div>
              <span className="text-xs text-black/50 dark:text-white/50 leading-relaxed">
                I agree to the{' '}
                <Link href="/terms" className="text-gold hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>
              </span>
            </label>
            <AnimatePresence>
              {errors.agreed && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-1.5 text-[11px] text-red-500 ml-7"
                >
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.agreed}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            className="mt-1 group w-full flex items-center justify-center gap-2.5 h-12 rounded-xl
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
                Creating account…
              </>
            ) : (
              <>
                Create Account
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}