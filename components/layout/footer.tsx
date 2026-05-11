'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Zap, 
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
  support: [
    { label: 'Track Order', href: '/contact' },
    { label: 'Warranty Info', href: '/faq' },
    { label: 'Returns Policy', href: '/faq' },
    { label: 'Payment Options', href: '/faq' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/provictech', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/provictech', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/provictech', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/provictech', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark"
              >
                <Zap className="w-5 h-5 text-navy-dark" />
              </motion.div>
              <span className="text-2xl font-bold text-foreground">
                Provic<span className="text-gold">Tech</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Your trusted partner for premium tech gadgets. We deliver quality, reliability, 
              and exceptional service to students, developers, and creators across Nigeria.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Subscribe to our newsletter
              </h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg bg-background"
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

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-gold/10 hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div>
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
                <div>
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
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  hello@provictech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              {new Date().getFullYear()} Provic Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="/faq" 
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/faq" 
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
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
