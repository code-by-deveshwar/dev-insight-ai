import HomeHero from "@/components/home/Home"
import HowItWorks from "@/components/home/HowItWorks"
import LiveDemo from "@/components/home/LiveDemo"
import { AppleCardsCarouselDemo } from "@/components/home/Testimonials"

export default function ThemePreview() {
  return (
    <>
      <HomeHero />
      <HowItWorks />
      <LiveDemo/>
      {/* <AppleCardsCarouselDemo/> */}
    </>
  )
}
