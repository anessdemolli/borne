'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import AboutSection from '@/components/AboutSection'
import MenuSection from '@/components/MenuSection'
import CocktailSection from '@/components/CocktailSection'
import BookingSection from '@/components/BookingSection'
import LocationSection from '@/components/LocationSection'
import SocialSection from '@/components/SocialSection'
import LoungeSection from '@/components/LoungeSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="noise-overlay">
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <AboutSection />
      <MenuSection />
      <CocktailSection />
      <BookingSection />
      <LocationSection />
      <SocialSection />
      <LoungeSection />
      <Footer />
    </main>
  )
}
