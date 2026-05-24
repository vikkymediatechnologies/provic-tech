'use client'

import {
  createContext, useContext, useState,
  useCallback, useEffect, type ReactNode,
} from 'react'
import { useRouter } from 'next/navigation'
import type {
  User, AuthContextValue,
  LoginPayload, SignupPayload,
  ForgotPasswordPayload, VerifyOTPPayload,
  ResendOTPPayload, UpdateProfilePayload,
} from '@/components/types/auth'

// ─────────────────────────────────────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | null>(null)

// ─────────────────────────────────────────────────────────────────────────────
// Mock user — replace with real API calls when backend is ready
// ─────────────────────────────────────────────────────────────────────────────

const MOCK_USER: User = {
  id:          'usr_001',
  email:       'demo@provictech.com',
  firstName:   'Demo',
  lastName:    'User',
  phone:       '+234 903 598 6632',
  role:        'customer',
  createdAt:   '2024-01-01T00:00:00.000Z',
  updatedAt:   '2024-01-01T00:00:00.000Z',
  isVerified:  true,
}

// ─────────────────────────────────────────────────────────────────────────────
// Provider
// ─────────────────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const router  = useRouter()
  const [user,      setUser     ] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Restore session on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('provic_user')
      if (stored) setUser(JSON.parse(stored))
    } catch {
      // ignore parse errors
    } finally {
      setIsLoading(false)
    }
  }, [])

  // ── login ──────────────────────────────────────────────────────────────────
  // TODO: replace with → POST /api/auth/login
  const login = useCallback(async (_payload: LoginPayload) => {
    setIsLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 1000)) // simulate network
      // const res = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify(payload) })
      // const data: AuthResponse = await res.json()
      // if (!res.ok) throw new Error(data.message)
      // setUser(data.user)
      // localStorage.setItem('provic_user', JSON.stringify(data.user))
      // localStorage.setItem('provic_token', data.accessToken)
      setUser(MOCK_USER)
      localStorage.setItem('provic_user', JSON.stringify(MOCK_USER))
      router.push('/dashboard')
    } finally {
      setIsLoading(false)
    }
  }, [router])

  // ── signup ─────────────────────────────────────────────────────────────────
  // TODO: replace with → POST /api/auth/signup
  const signup = useCallback(async (payload: SignupPayload) => {
    setIsLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 1000))
      // const res = await fetch('/api/auth/signup', { method: 'POST', body: JSON.stringify(payload) })
      // const data: ApiResponse = await res.json()
      // if (!res.ok) throw new Error(data.message)
      const newUser: User = {
        ...MOCK_USER,
        email:     payload.email,
        firstName: payload.firstName,
        lastName:  payload.lastName,
        phone:     payload.phone,
        isVerified: false,
      }
      setUser(newUser)
      localStorage.setItem('provic_user', JSON.stringify(newUser))
      // After signup → redirect to OTP verification
      router.push(`/verify-otp?email=${encodeURIComponent(payload.email)}&type=email-verification`)
    } finally {
      setIsLoading(false)
    }
  }, [router])

  // ── logout ─────────────────────────────────────────────────────────────────
  // TODO: replace with → POST /api/auth/logout
  const logout = useCallback(async () => {
    setUser(null)
    localStorage.removeItem('provic_user')
    localStorage.removeItem('provic_token')
    router.push('/login')
  }, [router])

  // ── forgotPassword ─────────────────────────────────────────────────────────
  // TODO: replace with → POST /api/auth/forgot-password
  const forgotPassword = useCallback(async (payload: ForgotPasswordPayload) => {
    setIsLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 1000))
      // const res = await fetch('/api/auth/forgot-password', { method: 'POST', body: JSON.stringify(payload) })
      router.push(`/verify-otp?email=${encodeURIComponent(payload.email)}&type=password-reset`)
    } finally {
      setIsLoading(false)
    }
  }, [router])

  // ── verifyOTP ──────────────────────────────────────────────────────────────
  // TODO: replace with → POST /api/auth/verify-otp
  const verifyOTP = useCallback(async (payload: VerifyOTPPayload) => {
    setIsLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 1000))
      // const res = await fetch('/api/auth/verify-otp', { method: 'POST', body: JSON.stringify(payload) })
      if (payload.type === 'email-verification') {
        if (user) setUser({ ...user, isVerified: true })
        router.push('/dashboard')
      } else {
        router.push('/login?verified=1')
      }
    } finally {
      setIsLoading(false)
    }
  }, [router, user])

  // ── resendOTP ──────────────────────────────────────────────────────────────
  // TODO: replace with → POST /api/auth/resend-otp
  const resendOTP = useCallback(async (_payload: ResendOTPPayload) => {
    await new Promise((r) => setTimeout(r, 800))
    // await fetch('/api/auth/resend-otp', { method: 'POST', body: JSON.stringify(payload) })
  }, [])

  // ── updateProfile ──────────────────────────────────────────────────────────
  // TODO: replace with → PATCH /api/user/profile
  const updateProfile = useCallback(async (payload: UpdateProfilePayload) => {
    if (!user) return
    const updated = { ...user, ...payload, updatedAt: new Date().toISOString() }
    setUser(updated)
    localStorage.setItem('provic_user', JSON.stringify(updated))
  }, [user])

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated: !!user,
      login, signup, logout,
      forgotPassword, verifyOTP, resendOTP,
      updateProfile,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────────────────────────────────────

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}