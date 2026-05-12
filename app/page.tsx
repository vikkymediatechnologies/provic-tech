import { HeroSection } from '@/components/home/hero-section'
import { Analytics } from "@vercel/analytics/next"
import { TrustedBrands } from '@/components/home/trusted-brands'
import { FeaturedCategories } from '@/components/home/featured-categories'
import { FeaturedProducts } from '@/components/home/featured-products'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { Testimonials } from '@/components/home/testimonials'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Analytics />
      <HeroSection />
      <TrustedBrands />
      <FeaturedCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  )
}
