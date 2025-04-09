'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setShowErrors(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { firstName, email, message } = form

    if (!firstName || !email || !message) {
      setShowErrors(true)
      toast.error('Please fill in all required fields.')
      return
    }

    try {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast.success('Message sent successfully!')
      setForm({ firstName: '', lastName: '', email: '', message: '' })
    } catch (error) {
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyles = `w-full p-2 border border-neutral-300 dark:border-neutral-700 
    rounded-md bg-white dark:bg-neutral-900 text-black dark:text-white 
    placeholder:text-neutral-400 dark:placeholder:text-neutral-500 
    transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 
    hover:border-blue-400 focus:outline-none`

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-lg p-6 space-y-4 max-w-3xl mx-auto'
    >
      <p className='text-sm text-neutral-600 dark:text-neutral-400'>
        Please, fill out the form below and I'll get back to you as soon as possible.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm font-semibold mb-1 text-neutral-700 dark:text-neutral-300'>
            First Name<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='firstName'
            value={form.firstName}
            onChange={handleChange}
            placeholder='Your first name'
            className={inputStyles}
          />
          {showErrors && !form.firstName && (
            <motion.p
              className='text-sm text-red-500 mt-1'
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              First name is required.
            </motion.p>
          )}
        </div>
        <div>
          <label className='block text-sm font-semibold mb-1 text-neutral-700 dark:text-neutral-300'>
            Last Name
          </label>
          <input
            type='text'
            name='lastName'
            value={form.lastName}
            onChange={handleChange}
            placeholder='Your last name'
            className={inputStyles}
          />
        </div>
      </div>

      <div>
        <label className='block text-sm font-semibold mb-1 text-neutral-700 dark:text-neutral-300'>
          Email<span className='text-red-500'>*</span>
        </label>
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder='you@example.com'
          className={inputStyles}
        />
        {showErrors && !form.email && (
          <motion.p
            className='text-sm text-red-500 mt-1'
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Email is required.
          </motion.p>
        )}
      </div>

      <div>
        <label className='block text-sm font-semibold mb-1 text-neutral-700 dark:text-neutral-300'>
          Message<span className='text-red-500'>*</span>
        </label>
        <textarea
          name='message'
          value={form.message}
          onChange={handleChange}
          placeholder='Enter your message here…'
          rows={4}
          className={inputStyles}
        />
        {showErrors && !form.message && (
          <motion.p
            className='text-sm text-red-500 mt-1'
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Message is required.
          </motion.p>
        )}
      </div>

      <motion.button
        type='submit'
        disabled={isSubmitting}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-2 rounded-md font-semibold transition-colors ${
          isSubmitting
            ? 'bg-neutral-500 dark:bg-neutral-700 cursor-not-allowed text-white'
            : 'bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </motion.button>
    </motion.form>
  )
}
