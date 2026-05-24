'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from './auth-context'

interface AuthGuardProps {
  children:     React.ReactNode
  redirectTo?:  string
  requireRole?: 'customer' | 'admin'
}

export function AuthGuard({
  children,
  redirectTo  = '/login',
  requireRole,
}: AuthGuardProps) {
  const { isAuthenticated, isLoading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return

    if (!isAuthenticated) {
      router.replace(redirectTo)
      return
    }

    if (requireRole && user?.role !== requireRole) {
      // Wrong role — send customer to dashboard, admin to admin panel
      router.replace(user?.role === 'admin' ? '/admin/dashboard' : '/dashboard')
    }
  }, [isAuthenticated, isLoading, user, router, redirectTo, requireRole])

  // Show nothing while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#080808]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin" />
          <span className="text-xs tracking-[0.2em] uppercase text-black/30 dark:text-white/30">
            Loading…
          </span>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) return null
  if (requireRole && user?.role !== requireRole) return null

  return <>{children}</>
}