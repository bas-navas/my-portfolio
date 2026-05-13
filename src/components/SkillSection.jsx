import React from 'react'

function SkillSection() {
    return (
        <div className='bg-white dark:bg-gray-900 py-24 px-6'>
            <div className='max-w-6xl mx-auto'>

                <p className='text-sm font-semibold tracking-widest uppercase text-blue-500 mb-3'>my skill</p>
                <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-16'>What I Work With</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        { emoji: '⚛️', skill: 'React' },
                        { emoji: '🎨', skill: 'Tailwind' },
                        { emoji: '🟢', skill: 'Node.js' },
                        { emoji: '🟡', skill: 'JavaScript' },
                        { emoji: '🐬', skill: 'MySQL' },
                        { emoji: '🚂', skill: 'Express' },
                    ].map((skill) => (
                        <div key={skill.skill} className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-md transition duration-200 cursor-pointer'>
                            <p className='text-3xl mb-3'>{skill.emoji}</p>
                            <p className='text-sm font-semibold text-gray-700 dark:text-gray-300'>{skill.skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillSection