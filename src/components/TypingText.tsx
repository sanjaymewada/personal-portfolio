// components/TypingText.tsx
import { useEffect, useState } from 'react'

interface TypingTextProps {
  text: string
  speed?: number
  className?: string
}

export const TypingText = ({ text, speed = 80, className = '' }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1))
      currentIndex++
      if (currentIndex === text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return <h1 className={`whitespace-nowrap ${className}`}>{displayedText}|</h1>
}
