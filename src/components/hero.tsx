'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { data } from '../constants'
import clsx from 'clsx'

// Typing text effect
type TypingTextProps = {
  text: string
  speed?: number
  className?: string
}

const TypingText = ({ text, speed = 80, className = '' }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1))
      currentIndex++
      if (currentIndex === text.length) {
        clearInterval(interval)
        setTimeout(() => {
          setDisplayedText('')
          setCycle((prev) => prev + 1)
        }, 5000)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, cycle])

  return (
    <h1
      className={clsx(
        'text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug break-words',
        className
      )}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  )
}

export default TypingText

// Hero section
export function Hero() {
  const { avatar, about, links } = data

  const cleanParagraph = about.description
    .split('\n')
    .filter(Boolean)
    .map((line) => line.replace(/^[-•]\s*/, ''))
    .join(' ')

  return (
    <section className="relative px-4 pt-4 pb-12 sm:pt-16 sm:pb-16 md:pt-8 md:pb-20">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-8 text-center md:text-left">
        {/* Avatar */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <a
            href="https://github.com/NotHarshhaa"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full shrink-0 hover:scale-105 transition-transform duration-300"
          >
            <Avatar className="size-28 shadow border">
              <AvatarImage alt={avatar.name} src="/assets/avatar.jpg" />
              <AvatarFallback className="font-mono font-bold">
                {avatar.initials}
              </AvatarFallback>
            </Avatar>
          </a>
        </div>

        {/* Heading + Status */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <TypingText
              text="Harshhaa Vardhan Reddy"
              className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100"
            />
            <Button
              variant='default'
              size={null}
              className='font-mono font-bold text-xs px-2 py-1 rounded-full hover:scale-105 transition-all ease-in-out duration-300'
              asChild
            >
              <a
                href="https://linkedin.com/in/harshhaa-vardhan-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex"
              >
                <Button
                  variant="default"
                  className="font-mono font-bold text-xs px-2 py-1 rounded-full hover:scale-105 transition-all"
                >
                  Available
                </Button>
              </a>
            </Button>
          </div>

          {/* Description */}
          <div className="flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty">
            <p className="font-semibold">{about.title}</p>
            <h3>{cleanParagraph}</h3>
          </div>
        </div>

        {/* Social Links */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
          {links.map((link) => (
            <Tooltip key={link.title}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size={null}
                  className="p-2 shadow rounded-lg hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.title}
                    className="flex items-center gap-2"
                  >
                    <link.icon className="size-6 stroke-[1.5]" />
                    <p className="hidden md:block">{link.title}</p>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="md:hidden">
                <p>{link.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </div>
    </section>
  )
}
