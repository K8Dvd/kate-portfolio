import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import marketroots from '/projects/marketroots.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'

function Projects() {
  const projects = [
    {
      image: marketroots,
      title: 'Portfolio Website',
      category: 'Frontend Development',
      description:
        'A visually expressive portfolio focused on interactive storytelling and modern web experiences.',
    },
    {
      image: project2,
      title: 'Student Management System',
      category: 'Web Application',
      description:
        'A responsive academic management platform designed for organization, usability, and efficiency.',
    },
    {
      image: project3,
      title: 'Creative UI Exploration',
      category: 'UI/UX Design',
      description:
        'A collection of experimental interface concepts blending aesthetics, interaction, and creativity.',
    },
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <section className="bg-white px-6 py-20 md:px-12">
      <div className="mx-auto max-w-[1200px]">

        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#3A0519]">
            SELECTED WORK
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-heading leading-tight text-black">
            Projects with Love.
          </h2>

          <p className="mt-6 text-base leading-7 text-black/70">
            A collection of selected projects crafted through creativity,
            design, and development — transforming ideas into meaningful
            digital experiences.
          </p>
        </div>

        {/* SLIDER */}
        {/* PROJECT SLIDER */}
<div className="relative mt-16 overflow-hidden">

  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${current * 100}%)`,
    }}
  >

    {projects.map((project, index) => (
      <div
        key={index}
        className="min-w-full px-4 flex justify-center"
      >

        <div
          className={`w-full max-w-[700px] group transition duration-500 ${
            current === index
              ? 'scale-100 opacity-100'
              : 'scale-95 opacity-60'
          }`}
        >

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[28px]">
            <img
              src={project.image}
              alt={project.title}
              className="h-[260px] w-full object-cover md:h-[400px]"
            />
          </div>

          {/* DETAILS */}
          <div className="mt-6 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3A0519]">
              {project.category}
            </p>

            <h3 className="mt-3 text-2xl md:text-4xl font-bold">
              {project.title}
            </h3>

            <p className="mt-4 leading-7 text-black/70">
              {project.description}
            </p>
          </div>

        </div>
      </div>
    ))}
  </div>

</div>

        {/* NAVIGATION */}
        <div className="mt-10 flex items-center justify-center gap-6">

          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A0519] text-[#3A0519] hover:bg-[#3A0519] hover:text-white transition"
          >
            <FaArrowLeft />
          </button>

          {/* DOTS */}
          <div className="flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition ${
                  current === index ? 'bg-[#3A0519]' : 'bg-black/20'
                }`}
              />
            ))}
          </div>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A0519] text-[#3A0519] hover:bg-[#3A0519] hover:text-white transition"
          >
            <FaArrowRight />
          </button>

        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/projects"
            className="rounded-full bg-[#3A0519] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#A53860] transition"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Projects