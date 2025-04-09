'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import clsx from 'clsx'
import Image from 'next/image'
import { navLinks } from '@/constants'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-6 md:px-8">
      <div className="mx-auto w-full max-w-7xl rounded-xl bg-white/70 dark:bg-black/30 backdrop-blur-md shadow-md border border-border px-4 py-3 transition-all">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="/"
              aria-label="Logo"
              className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-sm"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold text-lg">HARSHHAA</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Button asChild variant="ghost" size={null} key={link.label}>
                  {link.external ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:underline hover:font-semibold hover:text-primary active:underline active:font-semibold focus-visible:underline focus-visible:font-semibold"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link
                      href={link.url}
                      aria-label={link.label}
                      className={clsx(
                        'rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out',
                        {
                          'bg-neutral-200/60 dark:bg-neutral-800/60 text-black dark:text-white':
                            pathname === link.url,
                          'hover:underline hover:font-semibold hover:text-primary hover:bg-neutral-100/60 dark:hover:bg-neutral-700/60':
                            pathname !== link.url,
                          'active:underline active:font-semibold active:text-primary':
                            pathname !== link.url,
                          'focus-visible:underline focus-visible:font-semibold focus-visible:text-primary':
                            pathname !== link.url
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
          <div className="ml-auto relative top-[1.5px]">
            <ModeToggle />
          </div>
        </div>

        {/* 👇 Mobile nav below logo */}
        <nav className="mt-3 flex md:hidden justify-center flex-wrap gap-1">
          {navLinks.map((link) => (
            <Button asChild variant="ghost" size={null} key={link.label}>
              {link.external ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:underline hover:font-semibold hover:text-primary active:underline active:font-semibold focus-visible:underline focus-visible:font-semibold"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  href={link.url}
                  aria-label={link.label}
                  className={clsx(
                    'rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out',
                    {
                      'bg-neutral-200/60 dark:bg-neutral-800/60 text-black dark:text-white':
                        pathname === link.url,
                      'hover:underline hover:font-semibold hover:text-primary hover:bg-neutral-100/60 dark:hover:bg-neutral-700/60':
                        pathname !== link.url,
                      'active:underline active:font-semibold active:text-primary':
                        pathname !== link.url,
                      'focus-visible:underline focus-visible:font-semibold focus-visible:text-primary':
                        pathname !== link.url
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
    </header>
  )
}
