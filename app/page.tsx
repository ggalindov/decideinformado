"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import CandidateGallery from "@/components/candidate-gallery"
import OtherCandidates from "@/components/other-candidates"
import Footer from "@/components/footer"
import ComparisonGrid from "@/components/comparision-grid"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CandidateGallery />
      <ComparisonGrid />
      <OtherCandidates />
      <Footer />
    </main>
  )
}