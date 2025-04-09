'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ArrowRightIcon } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { type CareerProps } from '@/types'

export function CareerItem({ link, company, jobs, badges }: CareerProps) {
  return (
    <div className="relative ps-6 border-s-2 border-border pb-10 last:pb-0">
      {/* Animated Timeline Dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="absolute size-3 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-[8.5px] -start-[7.5px] border border-white dark:border-black"
      />

      {/* Company Name & Badge */}
      <div className="flex gap-x-2 mb-4 items-center">
        <motion.h3
          className="text-xl font-bold text-neutral-900 dark:text-neutral-100"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {company}
        </motion.h3>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <Badge
            variant="secondary"
            className="rounded-md shadow bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 transition-colors"
          >
            {badges}
          </Badge>
        </motion.div>
      </div>

      {/* Job Roles */}
      {jobs.map((job, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            <TypeAnimation
              sequence={[job.title, 5000, '']}
              speed={40}
              repeat={Infinity}
              cursor={true}
              wrapper="span"
            />
          </h4>
          <time className="text-sm font-mono leading-none text-neutral-800 dark:text-neutral-200">
            {job.start} — {job.end}
          </time>
          <ul className="mt-1 text-sm font-mono text-neutral-600 dark:text-neutral-400 space-y-1">
            {job.description.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Optional External Link */}
      {link && (
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="inline-block mt-4"
        >
          <Button
            variant="default"
            size={null}
            className="group shadow px-4 py-2"
            asChild
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <p className="font-medium">View more</p>
              <motion.span
                className="ms-2"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ArrowRightIcon className="size-4" />
              </motion.span>
            </a>
          </Button>
        </motion.div>
      )}
    </div>
  )
}
