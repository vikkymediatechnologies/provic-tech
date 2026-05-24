import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CartProvider } from '@/components/cart-context'
import { CartDrawer } from '@/components/cart-drawer'
import { AuthProvider } from '@/components/auth/auth-context'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Provic Technologies | Premium Tech Gadgets for Students, Developers & Creators',
    template: '%s | Provic Technologies',
  },
  description:
    'Provic Technologies delivers reliable gadgets, accessories, and modern tech essentials with professionalism, trust, and speed. Shop laptops, earbuds, keyboards, smartwatches and more.',
  keywords: [
    'tech gadgets', 'laptops', 'earbuds', 'keyboards', 'smartwatches',
    'power banks', 'accessories', 'students', 'developers', 'creators', 'Nigeria',
  ],
  authors:   [{ name: 'Provic Technologies' }],
  creator:   'Provic Technologies',
  publisher: 'Provic Technologies',
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://provictech.com',
    siteName:    'Provic Technologies',
    title:       'Provic Technologies | Premium Tech Gadgets',
    description: 'Trusted tech gadgets for students, developers & creators. Fast delivery, secure transactions, affordable pricing.',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Provic Technologies | Premium Tech Gadgets',
    description: 'Trusted tech gadgets for students, developers & creators.',
    creator:     '@Provictech',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)',  color: '#080808' },
  ],
  width:        'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased bg-background">

        {/* ── Google Analytics ── */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4LKD3MQ516"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4LKD3MQ516');
          `}
        </Script>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <AuthProvider>
             <CartProvider>
            <div className="relative min-h-screen flex flex-col">
              <Navbar />
              <CartDrawer />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
          </AuthProvider>
        </ThemeProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}