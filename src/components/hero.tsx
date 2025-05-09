'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { data } from '../constants'
import clsx from 'clsx'
import { motion } from 'framer-motion'

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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative px-4 pt-8 pb-16 sm:pt-20 sm:pb-24 md:pt-16 md:pb-32 overflow-hidden"
    >

      <div className="w-full max-w-3xl mx-auto flex flex-col gap-10 text-center md:text-left">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center md:justify-start"
        >
          <a
            href="https://github.com/NotHarshhaa"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full shrink-0 hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative">
              <span className="absolute inset-0 rounded-full from-primary/60 to-primary/30 blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-300" />
              <Avatar className="size-32 shadow-xl border-4 border-white dark:border-neutral-900 relative z-10">
                <AvatarImage alt={avatar.name} src="/assets/avatar.jpg" />
                <AvatarFallback className="font-mono font-bold">
                  {avatar.initials}
                </AvatarFallback>
              </Avatar>
            </div>
          </a>
        </motion.div>

        {/* Heading + Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <TypingText
              text="Harshhaa Vardhan Reddy"
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent drop-shadow"
            />
            <Button
              variant='default'
              size={null}
              className='font-mono font-bold text-xs px-3 py-1.5 rounded-full hover:scale-105 transition-all ease-in-out duration-300 shadow-md bg-primary/90 text-white dark:text-black border border-primary/30'
              asChild
            >
              <a
                href="https://linkedin.com/in/harshhaa-vardhan-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex"
              >
                Available
              </a>
            </Button>
          </div>

          {/* Description */}
          <div className="flex flex-col font-mono gap-3 dark:text-neutral-200 text-neutral-800 text-pretty max-w-2xl">
            <p className="font-semibold text-lg md:text-xl text-primary/80">{about.title}</p>
            <h3 className="text-base md:text-lg leading-relaxed opacity-90">{cleanParagraph}</h3>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-wrap justify-center md:justify-start gap-4 pt-6"
        >
          {links.map((link) => (
            <Tooltip key={link.title}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size={null}
                  className="p-2 shadow rounded-xl hover:scale-110 transition-transform duration-300 border border-primary/20 bg-white/70 dark:bg-neutral-900/60"
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.title}
                    className="flex items-center gap-2"
                  >
                    <link.icon className="size-6 stroke-[1.5] text-primary" />
                    <p className="hidden md:block font-semibold text-primary/80">{link.title}</p>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="md:hidden">
                <p>{link.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.nav>
      </div>
    </motion.section>
  )
}
