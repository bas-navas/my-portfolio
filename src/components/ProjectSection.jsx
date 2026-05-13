import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function ProjectSection() {
  return (
    <>
      <section className='bg-gray-50 dark:bg-gray-900 py-24 px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <p className='text-sm font-semibold tracking-widest uppercase text-blue-500 mb-3'>
            my work
          </p>
          <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-12'>
            Featured Projects
          </h2>

          {/* ProjectSection.jsx — เก็บข้อมูล + วนลูป */}
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectSection