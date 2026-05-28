import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  // SCROLL TO TOP
  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

  }

  // SCROLL TO SECTION
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

  <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">

    {/* OUTER CONTAINER */}
    <div className="mx-auto max-w-7xl">

      {/* PILL NAVBAR */}
      <div className="overflow-hidden rounded-[40px] border border-black/10 bg-white/70 backdrop-blur-md">

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <Link
            onClick={scrollToTop}
            to="/"
            className="cursor-pointer font-heading text-xl text-black"
          >
            Kate David
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">

            <Link
              to="/about"
              className="text-sm font-medium hover:text-[#A53860]"
            >
              About
            </Link>

            <Link
              to="/projects"
              className="text-sm font-medium hover:text-[#A53860]"
            >
              Projects
            </Link>

            <Link
              to="/achievements"
              className="text-sm font-medium hover:text-[#A53860]"
            >
              Achievements
            </Link>

            <button onClick={() => goToSection('recommendations')}>
              Recommendations
            </button>

            <button onClick={() => goToSection('contact')}>
              Contact
            </button>

          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* RESUME */}
            <a
              href="/KATEANNEDAVIDRESUME.pdf"
              download
              className="hidden rounded-full bg-[#3A0519] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#A53860] md:block"
            >
              Resume
            </a>

            {/* HAMBURGER */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-[#3A0519] md:hidden"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (

          <div className="border-t border-black/10 bg-white px-6 py-6 md:hidden">

            <div className="flex flex-col gap-5">

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>

              <Link
                to="/achievements"
                onClick={() => setIsOpen(false)}
              >
                Achievements
              </Link>

              <button
                onClick={() => {
                  goToSection('recommendations')
                  setIsOpen(false)
                }}
                className="text-left"
              >
                Recommendations
              </button>

              <button
                onClick={() => {
                  goToSection('contact')
                  setIsOpen(false)
                }}
                className="text-left"
              >
                Contact
              </button>

              <a
                href="/KATEDAVIDRESUME.pdf"
                download
                className="mt-2 w-fit rounded-full bg-[#3A0519] px-6 py-2 text-white"
              >
                Download Resume
              </a>

            </div>

          </div>

        )}

      </div>

    </div>

  </header>

)
}

export default Navbar