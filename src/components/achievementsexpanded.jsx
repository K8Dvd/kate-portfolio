function AchievementsExpanded() {

  const certificates = [

    {
      title: 'Google UX Design',

      issuer: 'Google',

      year: '2025',

      skills: [
        'UI/UX',
        'Wireframing',
        'Research',
      ],

      image: '/certificates/previews/project1.jpg',

      credential:
        '/certificates/project1.pdf',
    },

    {
      title: 'AWS Cloud Practitioner',

      issuer: 'Amazon Web Services',

      year: '2025',

      skills: [
        'Cloud',
        'AWS',
        'Infrastructure',
      ],

      image: '/certificates/previews/project1.jpg',

      credential:
        '/certificates/project1.pdf',
    },

    {
      title: 'Cisco Networking Basics',

      issuer: 'Cisco',

      year: '2024',

      skills: [
        'Networking',
        'Security',
        'Cisco',
      ],

      image: '/certificates/previews/project1.jpg',

      credential:
        '/certificates/project1.pdf',
    },

    {
      title: 'Frontend Development',

      issuer: 'Meta',

      year: '2025',

      skills: [
        'React.js',
        'Frontend',
        'JavaScript',
      ],

      image: '/certificates/previews/project1.jpg',

      credential:
        '/certificates/project1.pdf',
    },

  ]

  return (

    <section className="bg-[#faf7f4] px-6 py-28 md:px-12">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="max-w-4xl">

          <p className="text-sm font-semibold tracking-[0.3em] text-[#3A0519]">

            ACHIEVEMENTS

          </p>

          <h1 className="mt-6 font-heading text-5xl leading-[1.05] text-black md:text-7xl">

            Certifications, learning milestones,
            and continuous growth.

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-black/70">

            A growing collection of certifications,
            technical learning experiences, and
            professional development across
            frontend development, UI/UX,
            cloud technologies, AI, and networking.

          </p>

        </div>

        {/* GRID */}
        <div className="mt-24 grid gap-8 md:grid-cols-2">

          {certificates.map((certificate) => (

            <div
              key={certificate.title}
              className="overflow-hidden rounded-[35px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-[280px] w-full object-cover transition duration-500 hover:scale-105"
                />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                {/* TITLE */}
                <h2 className="font-heading text-3xl text-black">

                  {certificate.title}

                </h2>

                {/* ISSUER */}
                <p className="mt-3 text-lg text-black/60">

                  {certificate.issuer} · {certificate.year}

                </p>

                {/* SKILLS */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {certificate.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/70"
                    >

                      {skill}

                    </span>

                  ))}

                </div>

                {/* BUTTON */}
                <div className="mt-10">

                  <a
                    href={certificate.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-[#3A0519] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#A53860]"
                  >

                    View Credential

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default AchievementsExpanded