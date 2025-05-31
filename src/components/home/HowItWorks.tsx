'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

const steps = [
  {
    title: '1. Connect your tech footprint',
    description:
      'Submit your GitHub, LeetCode, blog, and social profiles. We fetch your public data in seconds — no manual uploads.',
  },
  {
    title: '2. Let AI break it down',
    description:
      'Our engine evaluates your code patterns, problem-solving depth, and technical writing using AI models tailored for devs.',
  },
  {
    title: '3. Get a stunning dev portfolio',
    description:
      'We auto-generate a beautifully designed landing page with charts, highlights, and dev score — hosted and shareable.',
  },
  {
    title: '4. Share. Apply. Win.',
    description:
      'Use your DevInsight link in resumes, LinkedIn, or send it to recruiters for instant context on your skills.',
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-20 px-4 md:px-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4 mt-2">
        How DevInsight.ai Works
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg mb-12 font-geist-sans">
        Whether you're a developer looking to stand out, or a recruiter screening faster — we help you extract signal from the noise.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
          >
            <Card className="h-full bg-white border border-zinc-200 hover:shadow-xl hover:border-zinc-400 transition-all rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold font-montserrat text-zinc-900">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 font-geist-sans leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
