function Navbar({ toggleDark, isDark }) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50
      bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
      border-b border-gray-200 dark:border-gray-700">

            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <p className="font-bold text-gray-800 dark:text-white">
                    John Doe
                </p>

                {/* Menu — desktop */}
                <div className="hidden md:flex gap-6 items-center">
                    <a className="text-blue-500 font-medium cursor-pointer">
                        Home
                    </a>
                    <a className="text-gray-500 dark:text-gray-400
            hover:text-gray-800 dark:hover:text-white
            transition-colors duration-200 cursor-pointer">
                        About
                    </a>
                    <a className="text-gray-500 dark:text-gray-400
            hover:text-gray-800 dark:hover:text-white
            transition-colors duration-200 cursor-pointer">
                        Work
                    </a>
                    <a className="text-gray-500 dark:text-gray-400
            hover:text-gray-800 dark:hover:text-white
            transition-colors duration-200 cursor-pointer">
                        Contact
                    </a>
                </div>

                {/* Hamburger — mobile */}
                <button className="md:hidden text-2xl text-gray-800 dark:text-white">
                    ☰
                </button>
                <button onClick={toggleDark}
                    className="fixed top-3 right-4 px-4 py-2 rounded-full
          bg-gray-200  dark:bg-gray-700
          text-gray-800  dark:text-white
          text-sm font-medium transition duration-200">
                    {isDark ? "☀️ Light" : "🌙 Dark"}
                </button>
            </div>
        </nav>


    )
}

export default Navbar