import type { Metadata } from 'next'
import { FAQHero } from '@/components/faq/faq-hero'
import { FAQList } from '@/components/faq/faq-list'
import { FAQCTA } from '@/components/faq/faq-cta'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Find answers to frequently asked questions about delivery, payment, warranty, returns, authenticity, and order tracking at Provic Technologies.',
}

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQList />
      <FAQCTA />
    </>
  )
}
