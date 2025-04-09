'use client'

import { Link } from 'next-view-transitions'
import { navLinks } from '@/constants'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full px-4 py-8 md:py-10">
      <div className="container bg-white/70 dark:bg-white/5 backdrop-blur-md border border-neutral-200 dark:border-white/10 shadow-sm rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300">

        {/* Left Section */}
        <div className="text-center md:text-left text-sm font-medium text-neutral-700 dark:text-neutral-300">
          <p>
            © {year}
            <span className="mx-2">•</span>
            <a
              href="https://link.notharshhaa.site"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 hover:text-primary transition hover:drop-shadow-sm"
            >
              H A R S H H A A
            </a>
            <span className="mx-2">—</span>
            All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-neutral-600 dark:text-neutral-300">
          {navLinks.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <Link
          href={link.url}
          aria-label={link.label}
          className="hover:underline underline-offset-4 hover:text-primary transition-all hover:drop-shadow-sm hover:font-semibold duration-200"
              >
          {link.title}
              </Link>
              {index < navLinks.length - 1 && (
          <span className="mx-2 text-neutral-400">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Right Section: Scroll to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="hidden md:flex items-center gap-1 text-xs text-neutral-500 hover:text-primary transition hover:scale-105"
        >
          <ArrowUp className="w-4 h-4" />
          Back to top
        </button>
      </div>
    </footer>
  )
}
