import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: {
    template: '%s | Provic Technologies',
    default: 'Account | Provic Technologies',
  },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#080808] flex flex-col overflow-hidden">

      {/* ── Architectural grid lines ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[20, 40, 60, 80].map((pct) => (
          <div
            key={pct}
            className="absolute top-0 bottom-0 w-px bg-black/[0.04] dark:bg-white/[0.04]"
            style={{ left: `${pct}%` }}
          />
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      </div>

      {/* ── Gold orb top-right ── */}
      <div
        className="fixed top-[-15%] right-[-5%] w-[50vw] max-w-2xl aspect-square rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 60% 40%, hsl(43 96% 56% / 0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ── Blue orb bottom-left ── */}
      <div
        className="fixed bottom-[-10%] left-[-5%] w-[35vw] max-w-lg aspect-square rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, hsl(217 91% 60% / 0.06) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }}
      />

      {/* ── Diagonal accent line ── */}
      <svg className="fixed inset-0 w-full h-full opacity-[0.025] pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="hsl(43 96% 56%)" strokeWidth="1" />
      </svg>

      {/* ── Top bar ── */}
      <div className="relative z-10 flex items-center justify-between
        px-5 sm:px-10 lg:px-14 pt-6 pb-4
        border-b border-black/[0.05] dark:border-white/[0.05]">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/provic.png"
            alt="Provic Technologies"
            width={800}
            height={267}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href="/products"
            className="text-[10px] tracking-[0.2em] uppercase
              text-black/30 dark:text-white/30
              hover:text-gold transition-colors duration-200 hidden sm:block"
          >
            Shop
          </Link>
          <div className="w-px h-4 bg-black/10 dark:bg-white/10 hidden sm:block" />
          <span className="text-[9px] tracking-[0.3em] uppercase text-black/20 dark:text-white/20 font-medium">
            Secure Auth
          </span>
        </div>
      </div>

      {/* ── Main content — centred ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-10 sm:py-14">
        {children}
      </div>

      {/* ── Footer strip ── */}
      <div className="relative z-10 flex items-center justify-between
        px-5 sm:px-10 lg:px-14 py-4
        border-t border-black/[0.05] dark:border-white/[0.05]">

        <p className="text-[9px] tracking-[0.25em] uppercase text-black/20 dark:text-white/20">
          © {new Date().getFullYear()} Provic Technologies
        </p>

        <div className="flex items-center gap-5">
          <Link href="/faq"
            className="text-[9px] tracking-[0.2em] uppercase
              text-black/20 dark:text-white/20 hover:text-gold transition-colors">
            Help
          </Link>
          <Link href="/contact"
            className="text-[9px] tracking-[0.2em] uppercase
              text-black/20 dark:text-white/20 hover:text-gold transition-colors">
            Contact
          </Link>
          <Link href="/privacy"
            className="text-[9px] tracking-[0.2em] uppercase
              text-black/20 dark:text-white/20 hover:text-gold transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  )
}