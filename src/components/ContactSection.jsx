import React from 'react'

function ContactSection() {
    return (
        <div className='bg-white dark:bg-gray-900 py-24 px-6'>
            <div className='max-w-6xl mx-auto'>
                <p className='text-sm font-semibold tracking-widest uppercase text-blue-500 mb-3'>
                    contact
                </p>
                <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-12'>
                    Get In Touch
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                    {/* Contact Info */}
                    <div className='flex flex-col gap-8'>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">
                                📧
                            </span>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                <p className="font-medium text-gray-800 dark:text-white">
                                    john@example.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">
                                🐙
                            </span>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                                <p className="font-medium text-gray-800 dark:text-white">
                                    john@example.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">
                                💼
                            </span>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                                <p className="font-medium text-gray-800 dark:text-white">
                                    john@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Form */}
                    <div className='flex flex-col gap-6'>
                        <form className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    Name
                                </label>
                                <input
                                    className='w-full px-4 py-3 rounded-xl border border-gray-300
                                dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                                transition duration-200'
                                    type="text" placeholder='name' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    Email
                                </label>
                                <input className='w-full px-4 py-3 rounded-xl border border-gray-300
                                dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                                transition duration-200'
                                    type="text" placeholder='email' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    Message
                                </label>
                                <textarea rows={5} className='w-full py-3 px-4 rounded-xl border border-gray-300
                                dark:border-gray-600 bg-white dark:bg-gray-700 
                                text-gray-700 dark:text-white
                                focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'>
                                </textarea>
                            </div>
                            <button className='w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl
                            font-semibold transition duration-200 cursor-pointer'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection