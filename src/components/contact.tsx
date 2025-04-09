'use client'

import { useEffect, useRef } from 'react'
import { ContactForm } from '@/components/contact-form'
import { MailIcon } from 'lucide-react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Typed from 'typed.js'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const typedRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [isInView, controls])

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Contact me', 'Let\'s collaborate 💼', 'Reach out anytime!'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-6"
    >
      <motion.h2
        className="flex gap-x-4 items-center text-3xl font-bold text-balance"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <MailIcon className="size-6 animate-pulse stroke-[1.5]" />
        <span ref={typedRef} />
      </motion.h2>

      <motion.p
        className="font-mono mx-auto max-w-3xl dark:text-neutral-200 text-neutral-800 text-pretty text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Feel free to reach out to me for questions, inquiries, or
        collaborations. Open to new opportunities and challenges.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <ContactForm />
      </motion.div>
    </motion.div>
  )
}
