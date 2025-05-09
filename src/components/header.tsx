'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import clsx from 'clsx'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { motion } from 'framer-motion'

export function Header() {
  const pathname = usePathname()

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-6 md:px-8"
    >
      <div className="mx-auto w-full max-w-7xl rounded-2xl bg-white/80 dark:bg-black/40 backdrop-blur-xl shadow-lg border border-border/50 px-6 py-4 transition-all duration-300 hover:shadow-xl hover:bg-white/90 dark:hover:bg-black/50">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-8 flex-wrap">
            <Link
              href="/"
              aria-label="Logo"
              className="group flex items-center gap-3 transition-all duration-300 ease-in-out hover:scale-105"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={36}
                  height={36}
                  className="rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"
                />
              </motion.div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">HARSHHAA</span>
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Button asChild variant="ghost" size={null} key={link.label}>
                  {link.external ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-primary/10 hover:text-primary active:bg-primary/20 focus-visible:bg-primary/10"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link
                      href={link.url}
                      aria-label={link.label}
                      className={clsx(
                        'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out',
                        {
                          'bg-primary/10 text-primary': pathname === link.url,
                          'hover:bg-primary/10 hover:text-primary': pathname !== link.url,
                          'active:bg-primary/20': pathname !== link.url,
                          'focus-visible:bg-primary/10': pathname !== link.url
                        }
                      )}
                    >
                      {link.title}
                    </Link>
                  )}
                </Button>
              ))}
            </nav>
          </div>

          {/* Right: Theme Toggle */}
          <div className="ml-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ModeToggle />
            </motion.div>
          </div>
        </div>

        {/* Mobile nav */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex md:hidden justify-center flex-wrap gap-2"
        >
          {navLinks.map((link) => (
            <Button asChild variant="ghost" size={null} key={link.label}>
              {link.external ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-primary/10 hover:text-primary active:bg-primary/20 focus-visible:bg-primary/10"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  href={link.url}
                  aria-label={link.label}
                  className={clsx(
                    'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out',
                    {
                      'bg-primary/10 text-primary': pathname === link.url,
                      'hover:bg-primary/10 hover:text-primary': pathname !== link.url,
                      'active:bg-primary/20': pathname !== link.url,
                      'focus-visible:bg-primary/10': pathname !== link.url
                    }
                  )}
                >
                  {link.title}
                </Link>
              )}
            </Button>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  )
}
