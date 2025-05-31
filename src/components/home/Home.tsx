'use client'
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabContent = {
  developer: {
    heading: 'Showcase your dev journey with AI',
    paragraph:
      'Connect your GitHub, LeetCode and blogs to build an AI-powered developer portfolio.',
    cta: 'Get Started',
  },
  recruiter: {
    heading: 'Summarize developer profiles instantly',
    paragraph:
      'Paste a candidate’s profile to get a quick AI-powered summary with a dev score.',
    cta: 'Analyze Candidate',
  },
}

export default function HomeHero() {
  const [tab, setTab] = useState<'developer' | 'recruiter'>('developer')

  const content = tabContent[tab]

  return (
    <section className="w-full px-4 md:px-10 py-20 text-center">
      <Tabs value={tab} onValueChange={(val) => setTab(val as 'developer' | 'recruiter')}>
        <div className="flex justify-center mb-8">
          <TabsList className="bg-white shadow-sm border rounded-xl">
            <TabsTrigger
              value="developer"
              className="px-6 py-2 text-sm font-geist-sans cursor-pointer"
            >
              FOR DEVELOPERS
            </TabsTrigger>
            <TabsTrigger
              value="recruiter"
              className="px-6 py-2 text-sm font-geist-sans cursor-pointer"
            >
              FOR RECRUITERS
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-montserrat">
            {content.heading}
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10 font-geist-sans">
            {content.paragraph}
          </p>
          <div className="flex justify-center">
            <Button className="rounded-full px-8 py-4 text-base bg-zinc-900 hover:bg-zinc-800 text-white font-geist-sans">
              {content.cta}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
