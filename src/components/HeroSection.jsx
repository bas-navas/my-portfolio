function HeroSection() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 flex flex-col justify-center min-h-screen">

        {/* Badge */}
        <span className="w-fit bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400
          text-sm px-4 py-1 rounded-full">
          ✨ Available for work
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight">
          Hi, I'm <br />John Doe 👋
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl lg:text-2xl text-gray-500 dark:text-gray-400">
          Frontend Developer & Full-Stack Enthusiast
        </p>

        {/* Description */}
        <p className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
          I build clean and modern web apps with React, TypeScript & Node.js
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white
            px-8 py-3 rounded-full font-semibold
            transition duration-200 cursor-pointer">
            View My Work
          </button>
          <button className="border-2 border-gray-300 dark:border-gray-600
            text-gray-700 dark:text-gray-300
            hover:border-gray-400 dark:hover:border-gray-400
            px-8 py-3 rounded-full font-semibold
            transition duration-200 cursor-pointer">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  )
}

export default HeroSection