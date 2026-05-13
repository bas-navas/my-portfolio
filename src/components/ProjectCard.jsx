import React from 'react'
import logoReact from '../assets/react.svg'
function ProjectCard({ title, description, tags, demoUrl, githubUrl }) {
    return (
        <>
            <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-md'>

                {/* img */}
                <div className='flex justify-center items-center p-4'>
                    <img className=''
                        src={logoReact} alt="" width={120} />
                </div>

                {/* Content */}
                <div className='p-6'>
                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {tags.map((tag) => (
                            <span key={tag} className='bg-gray-100 dark:bg-gray-700
                            text-gray-600 dark:text-gray-300
                            text-xs px-3 py-1 rounded-full'>{tag}</span>
                        ))}
                    </div>
                    {/* Title */}
                    <h3 className='text-lg font-bold text-gray-800 dark:text-white mb-2'>
                        {title}
                    </h3>
                    {/* description */}
                    <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5'>
                        {description}
                    </p>
                    {/* Buttons */}
                    <div className='flex gap-3'>
                        <a href={demoUrl} className='bg-blue-500 hover:bg-blue-600 text-white
                        text-sm px-4 py-2 rounded-full font-semibold
                        transition duration-200 cursor-pointer'>Demo</a>
                        <a href={githubUrl} className='border border-gray-300 dark:border-gray-600
            text-gray-600 dark:text-gray-300
            hover:border-gray-400 dark:hover:border-gray-400
            text-sm px-4 py-2 rounded-full font-semibold
            transition duration-200 cursor-pointer'>GitHub</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard