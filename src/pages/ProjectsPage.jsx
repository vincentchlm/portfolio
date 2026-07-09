import { useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function usePageFavicon(href) {
  useEffect(() => {
    const link = document.querySelector('link[rel="icon"]');
    const previous = link?.getAttribute("href");

    link?.setAttribute("href", href);

    return () => {
      if (previous) link?.setAttribute("href", previous);
    };
  }, [href]);
}

export function ProjectsPage() {
  useScrollReveal();
  usePageFavicon("/start-up.png");

  return (
    <>
      <nav>...</nav>

      <section className="page-header">
        <h1>Enterprise Projects</h1>

        <p>
          A selection of Atlassian implementations, migrations, upgrades, and
          enterprise consulting engagements.
        </p>
      </section>

      <section id="projects">
        <div className="container">
          <h1 className="section-title">Enterprise Projects</h1>

          <p className="section-description">
            Enterprise Atlassian implementations, cloud migrations, upgrades,
            managed services, and training engagements delivered across banking,
            insurance, telecommunications, retail, healthcare, and government
            sectors.
          </p>

          {/* Statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <h2>17</h2>
              <p>Projects Delivered</p>
            </div>

            <div className="stat-card">
              <h2>8</h2>
              <p>Industries</p>
            </div>

            <div className="stat-card">
              <h2>4</h2>
              <p>Cloud Migrations</p>
            </div>

            <div className="stat-card">
              <h2>4+</h2>
              <p>Years Experience</p>
            </div>
          </div>

          {/* =============================== PROJECT 2026 ================================ */}
          <section className="project-year">
            <h1>2026</h1>

            <div className="project-grid">
              <div className="project-summary">
                <h3>Confluence Data Center Upgrade</h3>
                <span>
                  Project for Bank of Indonesia. Upgrade of Confluence Data
                  Center to the Latest Versions. The Confluence is Clustering
                  and has 2 Nodes.
                </span>
              </div>
              <div className="project-summary">
                <h3>Confluence Cloud Implementation</h3>
                <span>
                  Project for Indonesian Stock Exchange. Confluence Cloud usage
                  for internal documentation and tracking.
                </span>
              </div>
            </div>
          </section>

          {/* =============================== PROJECT 2025 ================================ */}
          <section className="project-year">
            <h1>2025</h1>

            <div className="project-grid">
              <div className="project-summary">
                <h3>Rovo Training</h3>
                <span>
                  Project for An Indonesian technology consulting company. Rovo
                  Training for Jira Service Management and Confluence.
                </span>
              </div>
              <div className="project-summary">
                <h3>Training Capacity Planner Add-ons</h3>
                <span>
                  Project for one of leading banks in Indonesia. Training of
                  Capacity Planner Add-ons.
                </span>
              </div>
              <div className="project-summary">
                <h3>Enhancement Jira Software Data Center</h3>
                <span>
                  One of Indonesia's major private commercial banks. Enhancement
                  of Jira Software Data Center usage to improve workflow and
                  reporting. This includes the implementation of Confluence and
                  Comala Document Management Add-ons for better documentation
                  and approval processes.
                </span>
              </div>
              <div className="project-summary">
                <h3>Enhancement Jira Service Management Cloud</h3>
                <span>
                  Project for one of Indonesian Ministry. Enhancement of JIra
                  Service Management by implementing Virtual Service Agents and
                  knowledge base by using Rovo AI.
                </span>
              </div>
              <div className="project-summary">
                <h3>Jira Cloud to Cloud Migration</h3>
                <span>
                  Project for A leading multi-finance company in Indonesia.
                  Merging two Jira Cloud site to one Jira Cloud site. This
                  includes the migration of all projects, users, and
                  configurations from the source site to the target site,
                  ensuring a seamless transition and minimal disruption to
                  ongoing work.
                </span>
              </div>
            </div>
          </section>

          {/* =============================== PROJECT 2024 ================================ */}
          <section className="project-year">
            <h1>2024</h1>

            <div className="project-grid">
              <div className="project-summary">
                <h3>Migration DC to Cloud Life Insurance Company</h3>
                <span>
                  Project for a leading life insurance company in Indonesia.
                  This project consist of migrating Jira Software & Confluence
                  from DC to Cloud. Also this project includes the
                  implementation of Atlassian Access (Atlassian Guard) for SSO
                  and User Provisioning.
                </span>
              </div>

              <div className="project-summary">
                <h3>User Training Insurance Company</h3>
                <span>
                  Project for a leading insurance company in Indonesia. This
                  project involves providing comprehensive training to users and
                  administrators on the new Jira & Confluence Cloud platform.
                </span>
              </div>

              <div className="project-summary">
                <h3>Jira & Confluence DC Upgrade</h3>
                <span>
                  Project for one of Indonesia's largest private commercial
                  banks. Upgrading Jira & Confluence DC and also moving the apps
                  & database to a new server with updated os version to improve
                  performance and scalability.
                </span>
              </div>

              <div className="project-summary">
                <h3>Managed Services Jira Software Cloud w/ Add-ons</h3>
                <span>
                  A managed services to improve and maintain Jira Software Cloud
                  and Zephyr Squad for a leading pension-focused bank in
                  Indonesia.
                </span>
              </div>

              <div className="project-summary">
                <h3>Jira Service Management Internal Apps Integration</h3>
                <span>
                  Integration of Jira Service Management with internal
                  applications for a leading Islamic bank in Indonesia.
                </span>
              </div>

              <div className="project-summary">
                <h3>JSM Cloud Implementation for Government</h3>
                <span>
                  Implementation of Jira Service Management Cloud for a one of
                  Indonesian Ministry in Indonesia. This project includes the
                  configuration of service desk, workflows, and automation to
                  streamline IT service management processes.
                </span>
              </div>

              <div className="project-summary">
                <h3>JSM Cloud Implementation for Insurance Company</h3>
                <span>
                  Jira implementation to replace existing service desk system
                  for a leading insurance company in Indonesia.
                </span>
              </div>

              <div className="project-summary">
                <h3>User & Admin Jira Training</h3>
                <span>
                  Jira Software usage & administration training for a leading
                  pension-focused bank in Indonesia.
                </span>
              </div>

              <div className="project-summary">
                <h3>Jira Migration DC to Cloud Retail Company</h3>
                <span>
                  Project for one of leading retail company in Indonesia.
                  Migrating Jira Software from DC to Cloud using Jira Cloud
                  Migration Assistant.
                </span>
              </div>

              <div className="project-summary">
                <h3>Jira DC Upgrade & DB Separation</h3>
                <span>
                  Project for a leading telecommunications provider in
                  Indonesia. This project involves upgrading Jira Data Center
                  and separating the database to improve performance and
                  scalability for both development and production environments.
                </span>
              </div>
            </div>
          </section>

          {/* =============================== PROJECT 2023 ================================ */}
          <section className="project-year">
            <h1>2023</h1>

            <div className="project-grid">
              <div className="project-summary">
                <h3>Jira Software Cloud User & Admin Training</h3>
                <span>
                  A leading Islamic bank in Indonesia. This project involves
                  providing comprehensive training to users and administrators
                  on the new Jira Software Cloud platform, covering topics such
                  as project management, issue tracking, and workflow
                  customization.
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
