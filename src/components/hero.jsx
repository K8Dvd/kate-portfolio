import gradPic from '../assets/gradpic.jpg'

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa'

import { MdEmail } from 'react-icons/md'

import { motion, useScroll, useTransform } from 'framer-motion'

function Hero() {

  const { scrollY } = useScroll()

   // Horizontal parallax for headings
  const leftMove = useTransform(scrollY, [0, 500], [0, -200])
  const rightMove = useTransform(scrollY, [0, 500], [0, 200])

  // Vertical parallax for background image
  const bgY = useTransform(scrollY, [0, 800], [0, -100]) // moves slower than scroll

  // Fade & scale in content
  const heroOpacity = useTransform(scrollY, [100, 500], [0, 1])
  const heroScale = useTransform(scrollY, [100, 500], [0.95, 1])
  const scrollToContact = () => {

  const section = document.getElementById('contact')

  if (section) {

    section.scrollIntoView({
      behavior: 'smooth',
    })

  }

}

  return (
    <section className="relative min-h-[200vh] overflow-hidden bg-white">

      {/* INTRO */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        <motion.h1
          style={{ x: leftMove }}
          className="font-heading text-6xl text-black md:text-[9rem]"
        >
          KATE
        </motion.h1>

        <motion.h1
          style={{ x: rightMove }}
          className="font-heading text-6xl text-black md:text-[9rem]"
        >
          DAVID
        </motion.h1>

      </div>

      {/* HERO CONTENT */}
      <motion.div
        style={{
          opacity: heroOpacity,
          scale: heroScale,
        }}
        className="sticky top-0 flex min-h-screen items-center px-6 pt-20 md:px-8 md:pt-28"
      >

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row md:gap-15">

          {/* IMAGE SIDE */}
          <div className="order-1 relative flex justify-center md:order-2">

            <img
              src={gradPic}
              alt="Kate David"
              className="h-[420px] w-[290px] object-cover shadow-lg md:h-[700px] md:w-[480px] md:shadow-2xl"
            />

          </div>

          {/* TEXT SIDE */}
          <div className="order-2 max-w-2xl text-center md:order-1 md:text-left">

            <h1 className="font-heading leading-[0.9] text-black text-5xl md:text-[9rem]">

              <span className="md:block">
                Kate
              </span>{' '}

              <span className="md:block">
                David
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-md text-lg font-semibold leading-8 text-black/70 md:mx-0">
              Frontend Developer & Creative Designer crafting
              visually expressive and interactive digital experiences.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">

              <a
                href="/KATEDAVIDRESUME.pdf"
                download
                className="rounded-full bg-[#3A0519] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#A53860]">
                Download Resume
              </a>

              <button
                onClick={scrollToContact}
                className="rounded-full border border-[#3A0519] px-7 py-3 text-sm font-semibold text-[#3A0519] transition duration-300 hover:bg-[#3A0519] hover:text-white">
                Hire Me
            </button>

            </div>

            {/* SOCIALS */}
            <div className="mt-8 flex justify-center gap-11 text-[27px] text-[#3A0519] md:justify-start">

              <a
                href="https://github.com/K8Dvd"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:-translate-y-1 hover:text-[#A53860]"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kate-anne-david/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:-translate-y-1 hover:text-[#A53860]"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/_k8nn_/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:-translate-y-1 hover:text-[#A53860]"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/katiee.david.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:-translate-y-1 hover:text-[#A53860]"
              >
                <FaFacebook />
              </a>

              <a
                href="mailto:kateannedavid05@gmail.com"
                className="transition duration-300 hover:-translate-y-1 hover:text-[#A53860]"
              >
                <MdEmail />
              </a>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero