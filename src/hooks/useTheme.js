import { useEffect, useState } from 'react'

export function useTheme() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem('theme') === 'light',
  )

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLight)
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

  const toggleTheme = () => setIsLight((prev) => !prev)

  return { isLight, toggleTheme }
}
