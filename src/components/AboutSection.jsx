import React from 'react'

function AboutSection() {
    return (
        <div className='bg-gray-50 dark:bg-gray-800 py-24 px-6'>
            <div className='max-w-5xl mx-auto'>
                <p className='text-sm font-semibold tracking-widest uppercase text-blue-500 mb-3'>about me</p>
                <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-16'>Who Am I?</h2>

                {/* Layout  */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    {/* Avatar */}
                    <div className='w-64 h-64 rounded-2xl mx-auto bg-gradient-to-br from-blue-400 to-purple-500'></div>

                    <div className='flex flex-col gap-4'>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                            I'm a frontend developer who loves creating clean and
                            modern web experiences.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400  leading-relaxed">
                            I focus on writing clean code and building great UI.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection