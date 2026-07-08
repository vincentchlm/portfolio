const SKILLS = [
  {
    icon: 'fa-brands fa-atlassian',
    title: (
      <>
        Atlassian
        <br />
        Solutions
      </>
    ),
    stack: ['Jira Software', 'JSM', 'Confluence', 'Bitbucket', 'Bamboo', 'Rovo'],
  },
  {
    icon: 'fa-solid fa-cloud',
    title: (
      <>
        Cloud &<br />
        DevOps
      </>
    ),
    stack: ['Atlassian Cloud', 'Azure', 'AWS', 'Google Cloud', 'GitLab'],
  },
  {
    icon: 'fa-solid fa-gears',
    title: 'Automation & Integration',
    stack: [
      'REST API',
      'Jira Automation',
      'ScriptRunner',
      'Groovy',
      'JQL / SQL',
      'Zephyr Squad',
    ],
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Business Analysis & Consulting',
    stack: [
      'Requirements',
      'SDLC Design',
      'Process Improvement',
      'Documentation',
      'Solution Design',
      'Training',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {SKILLS.map(({ icon, title, stack }, index) => (
          <div className="card" key={index}>
            <i className={icon}></i>

            <h3>{title}</h3>

            <div className="tech-stack">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
