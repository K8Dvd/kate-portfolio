import { useState } from 'react'

import {
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa'

function Recommendations() {

  const testimonials = [

    {
      name: 'Jane Doe',
      role: 'Frontend Developer',
      company: 'Creative Studio',
      message:
        'Kate consistently delivers visually engaging and well-structured designs. Her creativity and attention to detail make every project feel thoughtful and modern.',
    },

    {
      name: 'John Smith',
      role: 'Project Manager',
      company: 'Tech Solutions',
      message:
        'Working with Kate was an excellent experience. She combines creativity with technical skills, creating projects that are both functional and aesthetically impressive.',
    },

    {
      name: 'Alex Rivera',
      role: 'UI/UX Designer',
      company: 'Digital Agency',
      message:
        'Kate has a strong eye for design and storytelling. Her ability to transform ideas into interactive digital experiences is truly remarkable.',
    },

  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (

    <section className="bg-white px-6 py-24 md:px-12">

      <div className="mx-auto max-w-[1200px]">

        {/* TOP CONTENT */}
        <div className="text-center">

          {/* LABEL */}
          <p className="text-sm font-semibold tracking-[0.3em] text-[#3A0519]">
            RECOMMENDATIONS
          </p>

          {/* HEADING */}
          <h2 className="mt-5 font-heading text-4xl leading-tight text-black md:text-6xl">

            Words from People I’ve Worked With.

          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black/70">

            A few kind words and experiences shared by people
            I’ve collaborated and worked with throughout
            my creative and development journey.

          </p>

        </div>

        {/* TESTIMONIAL CARD */}
        <div className="mt-20 flex flex-col items-center">

          <div className="max-w-4xl text-center">

            {/* QUOTE */}
            <p className="text-2xl leading-[1.8] text-black md:text-4xl">

              “{testimonials[current].message}”

            </p>

            {/* NAME */}
            <h3 className="mt-12 text-2xl font-bold text-black">

              {testimonials[current].name}

            </h3>

            {/* ROLE */}
            <p className="mt-2 text-black/60">

              {testimonials[current].role} ·{' '}
              {testimonials[current].company}

            </p>

          </div>

          {/* NAVIGATION */}
          <div className="mt-14 flex items-center gap-8">

            {/* LEFT */}
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3A0519] text-[#3A0519] transition duration-300 hover:bg-[#3A0519] hover:text-white"
            >

              <FaArrowLeft />

            </button>

            {/* DOTS */}
            <div className="flex gap-3">

              {testimonials.map((_, index) => (

                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 w-3 rounded-full transition duration-300 ${
                    current === index
                      ? 'bg-[#3A0519]'
                      : 'bg-black/20'
                  }`}
                />

              ))}

            </div>

            {/* RIGHT */}
            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3A0519] text-[#3A0519] transition duration-300 hover:bg-[#3A0519] hover:text-white"
            >

              <FaArrowRight />

            </button>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Recommendations