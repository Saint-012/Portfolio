import './Projects.css'

const projects = [
  {
    cls: 'pc1',
    type: 'Automation · Bot',
    title: 'Attendance Bot',
    status: 'live',
    statusLabel: 'Shipped',
    desc: 'An automated bot that tracks and manages attendance — cuts out manual work entirely.',
    impact: 'Eliminated 100% of manual tracking. Saves hours every week for any team.',
    tech: ['Python', 'Automation', 'Bot'],
    link: { icon: 'ti-lock', label: 'Private repo' },
  },
  {
    cls: 'pc2',
    type: 'Web · Platform',
    title: 'Social Betting Platform',
    status: 'live',
    statusLabel: 'Shipped',
    desc: 'A social-first platform where users engage, compete, and interact around predictions in real time.',
    impact: 'Full social prediction platform built end-to-end from scratch.',
    tech: ['Fullstack', 'Social', 'Web'],
    link: { icon: 'ti-lock', label: 'Private repo' },
  },
  {
    cls: 'pc3',
    type: 'App · In Development',
    title: 'Ghosttrace',
    status: 'wip',
    statusLabel: 'In progress',
    desc: 'Currently in active development. Something interesting is brewing — details dropping soon.',
    impact: 'Watch this space. Dropping soon.',
    tech: ['App', 'WIP'],
    link: { icon: 'ti-clock', label: 'Coming soon' },
  },
]

function Projects() {
  return (
    <section id="projects">
      <div className="sec-label">Projects</div>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className={`project-card ${p.cls}`} key={p.title}>
            <div className="pc-glow"></div>
            <div className="ptype">{p.type}</div>
            <h3>{p.title}</h3>
            <div className="pstatus">
              <span className={`dot ${p.status}`}></span> {p.statusLabel}
            </div>
            <p>{p.desc}</p>
            <div className="impact">{p.impact}</div>
            <div className="tech-row">
              {p.tech.map((t) => (
                <span className="tech-pill" key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <span className="plink"><i className={`ti ${p.link.icon}`} aria-hidden="true"></i> {p.link.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
