import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Projects from '../components/projects'
import Achievements from '../components/achievements'
import Recommendations from '../components/recommendations'
import Contact from '../components/contact'

function Home() {

  return (

    <>

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Achievements />

      <div id="recommendations">
        <Recommendations />
      </div> 

      <div id="contact">
        <Contact />
      </div> 

    </>

  )
}

export default Home