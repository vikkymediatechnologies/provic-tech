import type { Metadata } from 'next'
import { ServicesHero } from '@/components/services/services-hero'
import { ServicesList } from '@/components/services/services-list'
import { ServicesCTA } from '@/components/services/services-cta'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive tech services including gadget sales, device sourcing, tech consultation, workspace setup guidance, and student tech assistance.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  )
}
