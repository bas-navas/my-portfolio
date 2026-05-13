import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'
import SkillSection from './components/SkillSection'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  //toggle
  function toggleDark() {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  return (
    <div className='bg-white dark:bg-gray-900'>
      <Navbar toggleDark={toggleDark} isDark={isDark} />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default App