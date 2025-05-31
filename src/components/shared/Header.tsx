'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="w-full px-20 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
        <Image
          src="/assets/logo.svg"
          alt="DevInsight.ai logo"
          width={60}
          height={60}
          priority
          className="object-contain"
        />
        <div className="text-xl text-black font-extrabold font-montserrat">
          DevInsight.ai
        </div>
      </Link>

      {/* Updated nav links */}
      <nav className="hidden md:flex space-x-6 text-sm font-semibold font-inter">
        <Link href="#how-it-works" className="text-black transition-colors">
          How it works
        </Link>
        <Link href="#use-cases" className="text-black transition-colors">
          Use cases
        </Link>
        <Link href="https://github.com/code-by-deveshwar/dev-insight-ai" target="_blank" className="text-black transition-colors">
          Open source
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <Button variant="primary" className="px-10 py-5 font-inter">
          Sign up
        </Button>
        <Link href="#" className="text-black text-sm font-semibold font-inter">
          Log in
        </Link>
      </div>
    </header>
  )
}
