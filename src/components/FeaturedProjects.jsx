import { Link } from 'react-router-dom'

const FEATURED_PROJECTS = [
  {
    title: 'Enterprise Jira Cloud Migration',
    industry: 'Insurance Industry',
    role: 'Business Analyst • System Analyst • Atlassian Consultant',
    responsibilities: [
      'Gathered migration requirements from business stakeholders.',
      'Designed the migration strategy and execution plan.',
      'Migrated Jira Data Center to Atlassian Cloud.',
      'Validated migrated projects, workflows, and user permissions.',
      'Supported production deployment and post-migration activities.',
    ],
    tech: ['Jira', 'Confluence', 'Cloud Migration Assistant', 'REST API'],
  },
  {
    title: 'Jira Service Management Implementation',
    industry: 'Government',
    role: 'System Analyst • Implementation Consultant • Trainer',
    responsibilities: [
      'Gathered business requirements and designed ITSM workflows.',
      'Implemented Jira Service Management and Atlassian Rovo (AI).',
      'Configured automation rules, customer portals, and knowledge bases.',
      'Conducted administrator and end-user training.',
    ],
    tech: ['JSM', 'Rovo', 'Automation', 'Knowledge Base'],
  },
  {
    title: 'SDLC & Jira Software Implementation',
    industry: 'Banks',
    role: 'System Analyst • Implementer • Techical Writer',
    responsibilities: [
      'Analyzed business requirements and optimized SDLC workflows.',
      'Configured Jira Software projects, workflows, and Agile boards.',
      'Implemented Confluence for documentation and approval workflows.',
      'Supported testing, production deployment, and user training.',
    ],
    tech: ['Jira', 'Confluence', 'Automation', 'Atlassian add-ons'],
  },
]

export function FeaturedProjects() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="featured-project-grid">
        {FEATURED_PROJECTS.map(
          ({ title, industry, role, responsibilities, tech }) => (
            <div className="featured-project-card" key={title}>
              <h3>{title}</h3>

              <span className="featured-project-industry">{industry}</span>

              <div className="featured-project-section">
                <h4>Role</h4>
                <p>{role}</p>
              </div>

              <div className="featured-project-section">
                <h4>Responsibilities</h4>
                <ul>
                  {responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="featured-project-section">
                <h4>Technologies</h4>

                <div className="projecttech-stack">
                  {tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      <div className="view-all-projects">
        <Link to="/projects" className="btn primary">
          View All Projects
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  )
}
