import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Recommendations from '../components/Recommendations'
import Contact from '../components/Contact'

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