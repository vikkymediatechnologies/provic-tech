import type { Metadata } from 'next'
import { ContactHero } from '@/components/contact/contact-hero'
import ContactContent from '@/components/contact/contact-content'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Provic Technologies. Contact us for sales inquiries, customer support, or any questions about our tech products and services.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  )
}