function AboutExpanded() {

  const skills = {

    frontend: [
      'Angular',
      'React.js',
      'Vue.js',
      'Svelte',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Web Design',
    ],

    backend: [
      'Node.js',
      'Express.js',
      'MySQL',
      'MongoDB',
      'Amazon Web Services',
    ],

    ai: [
      'OpenAI',
      'Google Gemini',
      'Claude Code',
      'Git',
      'Figma',
      'Canva',
    ],

    blockchain: [
      'Solidity',
      'Ethers.js',
    ],

    other: [
      'WordPress SEO',
      'Cisco Networking & Security',
    ],

  }

  return (

    <section
      id="about"
      className="bg-[#faf7f4] px-6 py-28 md:px-12"
    >

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="grid gap-16 md:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="text-sm font-semibold tracking-[0.3em] text-[#3A0519]">
              ABOUT ME
            </p>

            <h2 className="mt-6 font-heading text-5xl leading-[1.05] text-black md:text-7xl">

              Creating thoughtful digital experiences through development,
              design, and creativity.

            </h2>

          </div>

          {/* RIGHT */}
          <div>

            <p className="text-lg leading-9 text-black/70">

              I’m Kate David, a Frontend Developer & UI/UX Designer with
              a background in web development, branding, and creative
              technology.

              <br /><br />

              I graduated with a Bachelor of Science in Information
              Technology specialized in Web Development from Holy Angel
              University.

              <br /><br />

              For my capstone project, <span className="font-semibold text-black">
                MarketRoots
              </span>, I worked as a fullstack developer and UI/UX designer,
              helping build a digital marketplace connecting Filipino
              farmers with small and medium enterprises in Angeles City,
              Pampanga.

              <br /><br />

              I designed and developed the landing page, marketplace,
              and dashboard while also reviewing usability and user
              experience to ensure accessibility and ease of use.

              <br /><br />

              My workflow combines frontend development, design thinking,
              and AI-assisted tools to accelerate ideation, prototyping,
              debugging, and development efficiency.

            </p>

          </div>

        </div>

        {/* TIMELINE */}
        <div className="mt-32">

          <div className="flex items-center gap-4">

            <div className="h-[1px] w-14 bg-[#3A0519]" />

            <p className="text-sm font-semibold tracking-[0.3em] text-[#3A0519]">
              JOURNEY
            </p>

          </div>

          <div className="mt-16 border-l border-black/10 pl-10 space-y-16">

            {/* ITEM */}
            <div className="relative">

              <div className="absolute -left-[46px] top-2 h-4 w-4 rounded-full bg-[#3A0519]" />

              <p className="text-sm text-black/50">
                2026
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-black">
                Holy Angel University
              </h3>

              <p className="mt-3 max-w-2xl leading-8 text-black/70">

                Graduated with a Bachelor of Science in Information
                Technology specialized in Web Development.

              </p>

            </div>

            {/* ITEM */}
            <div className="relative">

              <div className="absolute -left-[46px] top-2 h-4 w-4 rounded-full bg-[#3A0519]" />

              <p className="text-sm text-black/50">
                Capstone Project
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-black">
                MarketRoots
              </h3>

              <p className="mt-3 max-w-2xl leading-8 text-black/70">

                Worked as a Fullstack Developer & UI/UX Designer using
                Laravel 11, React.js, and TailwindCSS to build a
                marketplace platform for Filipino farmers and SMEs.

              </p>

            </div>

          </div>

        </div>

        {/* SKILLS */}
        <div className="mt-32">

          <div className="flex items-center gap-4">

            <div className="h-[1px] w-14 bg-[#3A0519]" />

            <p className="text-sm font-semibold tracking-[0.3em] text-[#3A0519]">
              TECH STACK
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {/* CARD */}
            <div className="rounded-[32px] bg-white p-8 shadow-sm">

              <h3 className="text-2xl font-semibold text-black">
                Frontend
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {skills.frontend.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-black/10 px-5 py-2 text-sm text-black/70"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* CARD */}
            <div className="rounded-[32px] bg-white p-8 shadow-sm">

              <h3 className="text-2xl font-semibold text-black">
                Backend & Database
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {skills.backend.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-black/10 px-5 py-2 text-sm text-black/70"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* CARD */}
            <div className="rounded-[32px] bg-white p-8 shadow-sm">

              <h3 className="text-2xl font-semibold text-black">
                AI & Creative Tools
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {skills.ai.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-black/10 px-5 py-2 text-sm text-black/70"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* CARD */}
            <div className="rounded-[32px] bg-white p-8 shadow-sm">

              <h3 className="text-2xl font-semibold text-black">
                Blockchain & Others
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {[...skills.blockchain, ...skills.other].map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-black/10 px-5 py-2 text-sm text-black/70"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default AboutExpanded