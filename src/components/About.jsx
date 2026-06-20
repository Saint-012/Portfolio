import './About.css'

function About() {
  return (
    <section id="about">
      <div className="sec-label">About</div>
      <div className="about-grid">
        <div className="about-left">
          <p className="about-text">
            I'm <strong>Emmanuel</strong> — a software engineer focused on building <strong>automation tools, web apps, and experimental systems</strong>. I specialise in turning ideas into working products quickly using a build-first approach.
          </p>
          <p className="about-text" style={{ marginTop: '1rem' }}>
            Whether it's a bot that saves hours of manual work, a platform for social interaction, or a tool no one's built yet — I figure it out and ship it. Based in Nigeria, building for the world.
          </p>
        </div>
        <div className="about-right">
          <div className="about-fact"><span className="af-label">Approach</span><span className="af-val">Build first, refine always</span></div>
          <div className="about-fact"><span className="af-label">Focus</span><span className="af-val">AI · Automation · Web</span></div>
          <div className="about-fact"><span className="af-label">Stack</span><span className="af-val">React · Node.js · Python</span></div>
          <div className="about-fact"><span className="af-label">Status</span><span className="af-val">Open to opportunities</span></div>
        </div>
      </div>
    </section>
  )
}

export default About