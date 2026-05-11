import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/about-hero'
import { AboutStory } from '@/components/about/about-story'
import { AboutMission } from '@/components/about/about-mission'
import { AboutTimeline } from '@/components/about/about-timeline'
import { AboutCTA } from '@/components/about/about-cta'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Provic Technologies - our story, mission, vision, and values. We are dedicated to providing premium tech gadgets to students, developers, and creators across Nigeria.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutTimeline />
      <AboutCTA />
    </>
  )
}
