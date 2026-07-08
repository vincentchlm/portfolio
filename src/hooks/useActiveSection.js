import { useEffect, useState } from 'react'

export function useActiveSection() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const handleScroll = () => {
      let current = ''

      sections.forEach((section) => {
        const top = section.offsetTop - 120

        if (window.scrollY >= top) {
          current = section.getAttribute('id')
        }
      })

      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeId
}
