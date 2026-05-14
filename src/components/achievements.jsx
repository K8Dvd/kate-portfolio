import cert1 from '../assets/cert1.jpg'
import cert2 from '../assets/cert2.jpg'
import cert3 from '../assets/cert3.jpg'
import cert4 from '../assets/cert4.jpg'
import cert5 from '../assets/cert5.jpg'

function Achievements() {

  return (

    <section className="bg-[#faf7f4] px-6 py-24 md:px-12">

      <div className="mx-auto max-w-[1500px]">

        {/* TOP CONTENT */}
        <div className="max-w-3xl">

          {/* LABEL */}
          <p className="text-sm font-semibold tracking-[0.3em] text-[#3A0519]">
            ACHIEVEMENTS
          </p>

          {/* HEADING */}
          <h2 className="mt-5 font-heading text-4xl leading-tight text-black md:text-6xl">

            Milestones, Certifications & Recognition.

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg leading-8 text-black/70">

            A collection of certifications, awards, and milestones
            reflecting continuous growth in technology,
            creativity, and development.

          </p>

        </div>

        {/* MAIN CONTENT */}
        <div className="mt-24 grid items-center gap-20 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="relative flex justify-center">

            <div className="relative h-[600px] w-full max-w-2xl">

              {/* FLOATING CERTIFICATES */}

              <img
                src={cert1}
                alt="Certificate"
                className="absolute left-0 top-0 h-[120px] w-[180px] rotate-[-6deg] object-cover shadow-lg"
              />

              <img
                src={cert2}
                alt="Certificate"
                className="absolute right-10 top-10 h-[120px] w-[180px] rotate-[5deg] object-cover shadow-lg"
              />

              <img
                src={cert3}
                alt="Certificate"
                className="absolute left-20 top-44 h-[120px] w-[180px] rotate-[-4deg] object-cover shadow-lg"
              />

              <img
                src={cert4}
                alt="Certificate"
                className="absolute right-0 top-56 h-[120px] w-[180px] rotate-[7deg] object-cover shadow-lg"
              />

              {/* FEATURED CERTIFICATE */}
              <img
                src={cert5}
                alt="Featured Certificate"
                className="absolute bottom-0 left-1/2 h-[320px] w-[480px] -translate-x-1/2 object-cover shadow-2xl"
              />

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="text-center md:text-left">

            {/* CATEGORY */}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A0519]">

              Featured Achievement

            </p>

            {/* TITLE */}
            <h3 className="mt-5 text-4xl font-bold leading-tight text-black">

              Placeholder Achievement Title

            </h3>

            {/* SUBTITLE */}
            <p className="mt-4 text-lg font-semibold text-black/70">

              Organization · Year

            </p>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-xl leading-8 text-black/70">

              This section will showcase certifications,
              achievements, awards, competitions, and
              recognitions collected throughout my journey
              in technology and creativity.

            </p>

            {/* CTA */}
            <button className="mt-10 rounded-full bg-[#3A0519] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#A53860]">

              View All Achievements

            </button>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Achievements