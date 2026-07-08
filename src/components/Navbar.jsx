import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const { isLight, toggleTheme } = useTheme()
  const activeId = useActiveSection()

  return (
    <nav className="navbar">
      <div className="logo">Vincent Lam</div>

      <ul className="nav-links">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={activeId === href.slice(1) ? 'active' : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button id="themeBtn" onClick={toggleTheme}>
        {isLight ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}
