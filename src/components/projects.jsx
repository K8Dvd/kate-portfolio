import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'

function Projects() {

  const projects = [
    {
      image: project1,
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

  return (

    <section className="bg-white px-6 py-24 md:px-12">

      <div className="mx-auto max-w-[1500px]">

        {/* TOP CONTENT */}
        <div className="max-w-3xl">

          {/* LABEL */}
          <p className="text-sm font-semibold tracking-[0.3em] text-[#3A0519]">
            SELECTED WORK
          </p>

          {/* HEADING */}
          <h2 className="mt-5 font-heading text-4xl leading-tight text-black md:text-6xl">

            Projects with Love.

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg leading-8 text-black/70">

            A collection of selected projects crafted through creativity,
            design, and development — transforming ideas into meaningful
            and interactive digital experiences.

          </p>

        </div>

        {/* PROJECT SHOWCASE */}
        <div className="mt-20 overflow-x-auto">

          <div className="flex w-max gap-10 pb-6">

            {projects.map((project, index) => (

              <div
                key={index}
                className="group w-[340px] flex-shrink-0 md:w-[650px]"
              >

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[520px]"
                  />

                </div>

                {/* DETAILS */}
                <div className="mt-6">

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A0519]">

                    {project.category}

                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-black">

                    {project.title}

                  </h3>

                  <p className="mt-4 max-w-xl leading-8 text-black/70">

                    {project.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">

          <button className="rounded-full bg-[#3A0519] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#A53860]">

            View All Projects

          </button>

        </div>

      </div>

    </section>

  )
}

export default Projects