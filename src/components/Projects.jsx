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
    cls: 'pc4',
    type: 'AI · Tool',
    title: 'AI Caption Generator',
    status: 'live',
    statusLabel: 'Live',
    desc: 'An AI-powered tool that generates ready-to-post captions for social media — built for creators and small businesses who need quick, on-brand content.',
    impact: 'Turns a topic and platform into multiple caption options in seconds, powered by AI.',
    tech: ['AI', 'React', 'API'],
    link: { icon: 'ti-external-link', label: 'View live', url: 'https://ai-caption-rho.vercel.app/' },
  },
  {
    cls: 'pc2',
    type: 'Web · Platform',
    title: 'Social Betting Platform',
    status: 'wip',
    statusLabel: 'Built, not yet deployed',
    desc: 'A social-first platform where users engage, compete, and interact around predictions in real time. Built solo using AI-assisted development.',
    impact: 'Full prediction platform built end-to-end — frontend, backend, and social features. Deployment pending.',
    tech: ['Fullstack', 'Social', 'Web'],
    link: { icon: 'ti-lock', label: 'Private repo' },
  },
  {
    cls: 'pc3',
    type: 'Tool · Concept',
    title: 'Ghosttrace',
    status: 'wip',
    statusLabel: 'In progress',
    desc: 'A utility tool currently in early development — the core build is underway while the exact use case is being refined.',
    impact: 'Early-stage build. Direction and final use case still being shaped.',
    tech: ['Tool', 'WIP'],
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
              {p.link.url ? (
                <a className="plink" href={p.link.url} target="_blank" rel="noopener noreferrer">
                  <i className={`ti ${p.link.icon}`} aria-hidden="true"></i> {p.link.label}
                </a>
              ) : (
                <span className="plink"><i className={`ti ${p.link.icon}`} aria-hidden="true"></i> {p.link.label}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects