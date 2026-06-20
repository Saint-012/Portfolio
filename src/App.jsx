import './index.css'
import Background from './components/Background'
import MatrixRain from './components/MatrixRain'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import HowIBuild from './components/HowIBuild'
import Contact from './components/Contact'
import useScrollReveal from './useScrollReveal'

function App() {
  useScrollReveal()

return (
    <>
      <Background />
      <MatrixRain />
      <Nav />
      <Hero />
      <TrustBar />
      <Projects />
      <About />
      <Skills />
      <HowIBuild />
      <Contact />
      <footer>© 2026 Saint · Built with intention</footer>
    </>
  )
}

export default App
