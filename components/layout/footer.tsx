'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Send
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const footerLinks = {
  products: [
    { label: 'Laptops', href: '/products?category=laptops' },
    { label: 'Earbuds', href: '/products?category=earbuds' },
    { label: 'Keyboards', href: '/products?category=keyboards' },
    { label: 'Power Banks', href: '/products?category=power-banks' },
    { label: 'Smartwatches', href: '/products?category=smartwatches' },
    { label: 'Accessories', href: '/products?category=accessories' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
}

const socialLinks = [
  { icon: Twitter,   href: 'https://twitter.com/provictech',          label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/provictech',        label: 'Instagram' },
  { icon: Facebook,  href: 'https://facebook.com/provictech',         label: 'Facebook' },
  { icon: Linkedin,  href: 'https://linkedin.com/company/provictech', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-block mb-5">
              <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
                <Image
                  src="/provic.png"
                  alt="Provic Technologies"
                  width={220}
                  height={66}
                  className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm"
                  priority
                />
              </motion.div>
            </Link>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Your trusted partner for premium tech gadgets. We deliver quality, reliability,
              and exceptional service to students, developers, and creators across Nigeria.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Subscribe to our newsletter
              </h4>
              <form
                className="flex gap-2 w-full max-w-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 rounded-lg bg-background text-sm"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-gold hover:bg-gold-dark text-navy-dark rounded-lg shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-muted hover:bg-gold/10 hover:text-gold transition-colors"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="sm:col-span-2 lg:col-span-1 min-w-0">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm text-foreground font-medium">Sales</p>
                  <a
                    href="tel:09035986632"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    0903 598 6632
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm text-foreground font-medium">Support</p>
                  <a
                    href="tel:+2348068786708"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    +234 806 878 6708
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:hello@provictech.com"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors break-all"
                >
                  hello@provictech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Provic Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/faq"
                className="text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <Link
                href="/faq"
                className="text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors whitespace-nowrap"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}