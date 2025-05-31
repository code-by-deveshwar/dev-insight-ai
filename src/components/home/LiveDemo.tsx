'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function LiveDemo() {
    return (
        <section className="py-20 px-4 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
                See DevInsight.ai in Action
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg mb-12 font-geist-sans">
                Here's a snapshot of a real AI-generated developer portfolio. Yours could look like this in less than 2 minutes.
            </p>

            <Card className="max-w-4xl mx-auto text-left shadow-xl rounded-xl overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-xl font-bold font-montserrat text-zinc-900">
                        Rohit Mehta
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-500 font-geist-sans mb-4">
                        Full-Stack Developer · JavaScript, React, Node.js · 4.7 DevScore
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        <Badge className="bg-zinc-100 text-zinc-700 font-geist-sans">
                            Top 5% GitHub Commits
                        </Badge>
                        <Badge className="bg-zinc-100 text-zinc-700 font-geist-sans">
                            Blog Reach: 10k/mo
                        </Badge>
                        <Badge className="bg-zinc-100 text-zinc-700 font-geist-sans">
                            LeetCode 1800+
                        </Badge>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-10">
                <Button className="rounded-full px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-geist-sans text-base">
                    Build Your Own
                </Button>
            </div>
        </section>
    )
}
