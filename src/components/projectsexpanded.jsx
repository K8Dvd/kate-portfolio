import Navbar from '../components/Navbar'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'

function ProjectsPage() {

  const projects = [

    {
      title: 'MarketRoots',
      description:
        'A digital marketplace connecting Filipino farmers with small and medium enterprises in Angeles City, Pampanga. Built with a focus on accessibility, usability, and modern marketplace interaction.',

      role: 'Fullstack Developer & UI/UX Designer',

      tech: [
        'Laravel 11',
        'React.js',
        'TailwindCSS',
        'MySQL',
      ],

      image: project1,

      status: 'Capstone Project',

      live: true,

      link: 'https://marketroots.site/'
    },

    {
      title: 'Creative Portfolio',
      description:
        'A modern editorial-style portfolio focused on storytelling, interaction, and clean frontend experiences showcasing projects, achievements, and creative development work.',

      role: 'Frontend Developer & UI/UX Designer',

      tech: [
        'React.js',
        'TailwindCSS',
        'Framer Motion',
      ],

      image: project2,

      status: 'Live Project',

      live: true,

      link: '/',
    },

    {
      title: 'Future Project',
      description:
        'A placeholder for upcoming creative and technology-driven experiences, experiments, and frontend explorations currently in development.',

      role: 'Creative Developer',

      tech: [
        'OpenAI',
        'Node.js',
        'React.js',
      ],

      image: project3,

      status: 'In Development',

      live: false,
    },

  ]

  return (

    <section className="bg-white px-6 py-28 md:px-12">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="max-w-4xl">

          <p className="text-sm font-semibold tracking-[0.3em] text-[#3A0519]">

            SELECTED WORKS

          </p>

          <h1 className="mt-6 font-heading text-5xl leading-[1.05] text-black md:text-7xl">

            Projects built through creativity,
            strategy, and development.

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-black/70">

            A curated collection of digital experiences,
            frontend projects, UI/UX explorations, and
            creative development work.

          </p>

        </div>

        {/* PROJECTS */}
        <div className="mt-28 space-y-32">

          {projects.map((project, index) => (

            <div
              key={project.title}
              className={`grid items-center gap-14 md:grid-cols-2 ${
                index % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >

              {/* IMAGE */}
              <div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[500px] w-full rounded-[35px] object-cover shadow-lg"
                />

              </div>

              {/* CONTENT */}
              <div>

                {/* STATUS */}
                <span className="rounded-full bg-[#faf7f4] px-5 py-2 text-sm font-medium text-[#3A0519]">

                  {project.status}

                </span>

                {/* TITLE */}
                <h2 className="mt-8 font-heading text-4xl leading-tight text-black md:text-5xl">

                  {project.title}

                </h2>

                {/* DESCRIPTION */}
                <p className="mt-8 text-lg leading-9 text-black/70">

                  {project.description}

                </p>

                {/* ROLE */}
                <div className="mt-10">

                  <p className="text-sm font-semibold tracking-[0.2em] text-[#3A0519]">

                    ROLE

                  </p>

                  <p className="mt-3 text-lg text-black/80">

                    {project.role}

                  </p>

                </div>

                {/* TECH STACK */}
                <div className="mt-10 flex flex-wrap gap-3">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-black/10 px-5 py-2 text-sm text-black/70"
                    >

                      {item}

                    </span>

                  ))}

                </div>

                {/* CTA */}
                <div className="mt-12 flex flex-wrap gap-5">

                  {project.live ? (

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#3A0519] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#A53860]"
                    >

                      Live Preview

                    </a>

                  ) : (

                    <button
                      className="rounded-full bg-[#3A0519] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#A53860]"
                    >

                      View Case Study

                    </button>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default ProjectsPage