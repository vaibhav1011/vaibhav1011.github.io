import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
