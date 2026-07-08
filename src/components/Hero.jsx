export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <span className="intro">Hello, I'm</span>

        <h1>Vincent Christopher Lam</h1>

        <h2>System Analyst | Atlassian Consultant</h2>

        <p>
          IT Consultant | Bridging Business Needs with IT Solutions | DevOps |
          ITSM | Application Lifecycle Management
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a
            href="/Vincent Christopher Lam-resume.pdf"
            className="btn secondary"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/Me.JPG" alt="Vincent Christopher Lam" />
      </div>
    </section>
  )
}
