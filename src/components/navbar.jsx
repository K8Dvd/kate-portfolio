import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  const goToSection = (id) => {

    navigate('/')

    const scrollToSection = () => {

      const section = document.getElementById(id)

      if (section) {

        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })

      } else {

        requestAnimationFrame(scrollToSection)

      }

    }

    requestAnimationFrame(scrollToSection)

  }

  return (

    <header className="fixed left-0 top-0 z-50 w-full px-6 py-5">

      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/70 px-6 py-4 backdrop-blur-md">

        {/* LOGO */}
        <Link
          to="/"
          className="font-heading text-xl text-black"
        >
          Kate David
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-8 md:flex">

          <Link
            to="/about"
            className="text-sm font-medium text-black transition hover:text-[#A53860]"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="text-sm font-medium text-black transition hover:text-[#A53860]"
          >
            Projects
          </Link>

          <Link
            to="/achievements"
            className="text-sm font-medium text-black transition hover:text-[#A53860]"
          >
            Achievements
          </Link>

          <button
            type="button"
            onClick={() => goToSection('recommendations')}
            className="text-sm font-medium text-black transition hover:text-[#A53860]"
          >
            Recommendations
          </button>

          <button
            type="button"
            onClick={() => goToSection('contact')}
            className="text-sm font-medium text-black transition hover:text-[#A53860]"
          >
            Contact
          </button>

        </nav>

        {/* RESUME BUTTON */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#3A0519] px-5 py-2 text-sm font-medium text-white transition duration-300 hover:bg-[#A53860] md:block"
        >
          Resume
        </a>

      </div>

    </header>

  )
}

export default Navbar