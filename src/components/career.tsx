'use client'

import { CareerItem } from './career-item'
import { FileTextIcon } from 'lucide-react'
import { data } from '@/constants'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export function Career() {
  const { career } = data

  return (
    <section className='space-y-8'>
      {/* Header animation with typing effect */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex gap-x-4 items-center'
      >
        <FileTextIcon className='size-6 animate-pulse stroke-[1.5] text-neutral-800 dark:text-neutral-100' />
        <TypeAnimation
          sequence={['Career & Works', 5000, '']}
          speed={50}
          repeat={Infinity}
          cursor={true}
          wrapper='h2'
          className='text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100'
        />
      </motion.div>

      <ol className='ml-[11.5px] flex flex-col gap-y-8'>
        {career.map((item, index) => (
          <motion.li
            key={index}
            className='ms-[30px]'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <CareerItem {...item} />
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
