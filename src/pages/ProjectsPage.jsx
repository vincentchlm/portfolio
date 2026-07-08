import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function usePageFavicon(href) {
  useEffect(() => {
    const link = document.querySelector('link[rel="icon"]')
    const previous = link?.getAttribute('href')

    link?.setAttribute('href', href)

    return () => {
      if (previous) link?.setAttribute('href', previous)
    }
  }, [href])
}

export function ProjectsPage() {
  useScrollReveal()
  usePageFavicon('/start-up.png')

  return (
    <>
      <nav>...</nav>

      <section className="page-header">
        <h1>Enterprise Projects</h1>

        <p>
          A selection of Atlassian implementations, migrations, upgrades,
          and enterprise consulting engagements.
        </p>
      </section>

      <section id="projects">
        <div className="container">
          <h1 className="section-title">Enterprise Projects</h1>

          <p className="section-description">
            Enterprise Atlassian implementations, cloud migrations,
            upgrades, managed services, and training engagements delivered
            across banking, insurance, telecommunications, retail,
            healthcare, and government sectors.
          </p>

          {/* Statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <h2>17</h2>
              <p>Projects Delivered</p>
            </div>

            <div className="stat-card">
              <h2>6</h2>
              <p>Industries</p>
            </div>

            <div className="stat-card">
              <h2>5</h2>
              <p>Cloud Migrations</p>
            </div>

            <div className="stat-card">
              <h2>3+</h2>
              <p>Years Experience</p>
            </div>
          </div>

          {/* =============================== PROJECT 2026 ================================ */}
          <section className="project-year">
            <h2>2026</h2>

            <div className="project-grid">
              <div className="project-summary"></div>
              <div className="project-summary"></div>
            </div>
          </section>

          {/* =============================== PROJECT 2025 ================================ */}
          <section className="project-year">
            <h2>2025</h2>

            <div className="project-grid">
              <div className="project-summary"></div>
              <div className="project-summary"></div>
            </div>
          </section>

          {/* =============================== PROJECT 2024 ================================ */}
          <section className="project-year">
            <h2>2024</h2>

            <div className="project-grid">
              <h3>Enterprise Jira Cloud Migration</h3>
              <div className="project-summary">
                <h3>Enterprise Jira Cloud Migration</h3>
              </div>
              <p>test</p>
              <span>test</span>
              <div className="project-summary"></div>
            </div>
          </section>

          {/* =============================== PROJECT 2023 ================================ */}
          <section className="project-year">
            <h2>2023</h2>

            <div className="project-grid">
              <div className="project-summary"></div>
              <div className="project-summary"></div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
