import '../styles/app.css'

import Cursor from '../components/layout/Cursor'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import HeroSection from '../components/home/HeroSection'
import Ticker from '../components/home/Ticker'
import AboutSection from '../components/home/AboutSection'
import ProgramsSection from '../components/home/ProgramsSection'
import AdultsSection from '../components/home/AdultsSection'
import EventsSection from '../components/home/EventsSection'
import WhyChooseSection from '../components/home/WhyChooseSection'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
<Cursor />
<Navbar />
<HeroSection />
<Ticker />
<AboutSection />
<ProgramsSection />
<AdultsSection />
<EventsSection />
<WhyChooseSection />
<CTASection />
<Footer />
    </>
  )
}