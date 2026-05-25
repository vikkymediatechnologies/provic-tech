import { Suspense } from 'react'
import { LoginContent } from './LoginContent'

// ─── Skeleton shown while LoginContent loads ──────────────────────────────────
function LoginSkeleton() {
  return (
    <div className="relative w-full max-w-md animate-pulse">
      <div className="rounded-2xl bg-white dark:bg-[#111]
        border border-black/8 dark:border-white/8
        shadow-[0_8px_60px_-12px] shadow-black/10 dark:shadow-black/50
        p-8 sm:p-10 space-y-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="w-5 h-px bg-gold/40" />
          <div className="h-2.5 w-24 rounded bg-black/10 dark:bg-white/10" />
        </div>
        {/* Headline */}
        <div className="h-14 w-40 rounded-lg bg-black/10 dark:bg-white/10" />
        {/* Subtext */}
        <div className="h-3 w-56 rounded bg-black/6 dark:bg-white/6" />
        {/* Tab toggle */}
        <div className="h-11 w-full rounded-xl bg-black/5 dark:bg-white/5" />
        {/* Fields */}
        <div className="space-y-4">
          <div className="h-11 w-full rounded-xl bg-black/5 dark:bg-white/5" />
          <div className="h-11 w-full rounded-xl bg-black/5 dark:bg-white/5" />
        </div>
        {/* Button */}
        <div className="h-12 w-full rounded-xl bg-gold/30" />
        {/* Divider */}
        <div className="h-px w-full bg-black/8 dark:bg-white/8" />
        {/* Google button */}
        <div className="h-11 w-full rounded-xl bg-black/5 dark:bg-white/5" />
      </div>
    </div>
  )
}

// ─── Page export — Suspense lives here ───────────────────────────────────────
export default function LoginPage() {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <LoginContent />
    </Suspense>
  )
}