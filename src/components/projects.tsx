'use client'

import { usePagination } from '@/hook/use-pagination'
import { Button } from './ui/button'
import { ProjectCard } from './project-card'
import { ProjectPagination } from './project-pagination'
import { TerminalIcon } from 'lucide-react'
import { data } from '@/constants'
import { TypeAnimation } from 'react-type-animation'

export function Projects() {
  const { projects } = data
  const { currentProjects, page, totalPages, updatePage } = usePagination({
    projects
  })

  return (
    <>
      {currentProjects.length === 0 || page < 1 || page > totalPages ? (
        <Button variant='secondary' size='sm' asChild>
          <a href='/projects'>No projects found</a>
        </Button>
      ) : (
        <>
          <div className='flex items-center gap-x-4 mb-6'>
            <TerminalIcon className='size-6 animate-pulse stroke-[1.5] text-neutral-800 dark:text-neutral-100' />
            <TypeAnimation
              sequence={[
                'Projects & Crafts', // text
                5000, // wait 5 seconds
                '', // clear
              ]}
              wrapper='h2'
              cursor={true}
              repeat={Infinity}
              speed={50}
              className='text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100'
            />
          </div>

          <ProjectCard projects={currentProjects} />
          <ProjectPagination
            page={page}
            totalPages={totalPages}
            updatePage={updatePage}
          />
        </>
      )}
    </>
  )
}
