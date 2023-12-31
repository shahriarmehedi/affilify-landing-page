'use client'
import Community from '@/components/Community'
import Companies from '@/components/Companies'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import KeyServices from '@/components/KeyServices'
import Navbar from '@/components/Navbar'
import CaseStudies from '@/components/CaseStudies'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className=''>

      <div className="
    bg-[url(/83.png)] bg-no-repeat bg-cover min-h-screen
    ">
        <Navbar />
        <Hero />
      </div>
      <Companies />
      <KeyServices />

      <CaseStudies />
      <Community />
      <Footer />
    </main>
  )
}
