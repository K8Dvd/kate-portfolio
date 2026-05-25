import Navbar from '../components/navbar'
import project1 from '/projects/marketroots.png'
import project2 from '/projects/pawtify.png'
import project3 from '/projects/tasty.png'

function ProjectsPage() {

  const projects = [

    {
      title: 'MarketRoots',
      description:
        'MarketRoots is a web-based digital marketplace that connects Filipino farmers with MSMEs in Angeles City, Pampanga through direct product listings, real-time messaging, OTP authentication, and role-based marketplace management.',

      role: 'Fullstack Developer & UI/UX Designer',

      tech: [
        'Laravel 11',
        'React.js',
        'Tailwind CSS',
        'MySQL',
        'REST API',
        'OTP Authentication',
      ],

      image: project1,

      status: 'Capstone Project',

      live: true,

      link: 'https://marketroots.site/'
    },

    {
      title: 'Pawtify',
      description:
        'Pawtify is a blockchain-based pet registry and vaccination tracking system that securely stores pet ownership and vaccination records on the Ethereum blockchain, providing transparent and tamper-proof record management for LGUs, veterinarians, and pet owners.Pawtify is a decentralized pet registry and vaccination tracking platform that stores pet records securely on the Ethereum blockchain.',

      role: 'Frontend Developer & UI/UX Designer',

      tech: [
        'React.js',
        'Tailwind CSS',
        'Framer Motion',
        'Solidity',
        'Ethers.js',
        'Hardhat',
        'Ganache',
        'Ethereum',
        'MetaMask',
      ],

      image: project2,

      status: 'Live Project',

      live: true,

      link: 'https://pawtify.netlify.app/',
    },

    {
      title: 'Tasty Bites',

      description:
        'Tasty Bites is a food and recipe blog website built using WordPress.com, featuring responsive layouts, recipe-focused content presentation, and a clean user-friendly interface designed for browsing food articles and recipes.',

      role: 'Web Designer & Content Creator',

      tech: [
        'WordPress',
        'WordPress.com',
        'CSS',
        'Responsive Design',
      ],

      image: project3,

      status: 'Personal Project',

      live: true,

      link: 'https://tastybites06.wordpress.com/',
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