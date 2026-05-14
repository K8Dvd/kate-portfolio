import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'

function About() {
  return (

    <section className="bg-[#f8f5f2] px-6 py-24 md:px-12">

      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* IMAGE COLLAGE */}
        <div className="relative flex justify-center">

          <div className="relative h-[500px] w-full max-w-lg">

            {/* IMAGE 1 */}
            <img
              src={about1}
              alt="About Kate"
              className="absolute left-5 top-0 h-[280px] w-[220px] object-cover shadow-xl"
            />

            {/* IMAGE 2 */}
            <img
              src={about2}
              alt="About Kate"
              className="absolute bottom-0 left-17 h-[280px] w-[220px] object-cover shadow-xl"
            />

            {/* IMAGE 3 */}
            <img
              src={about3}
              alt="About Kate"
              className="absolute right-5 top-20 h-[280px] w-[220px] object-cover shadow-xl"
            />

          </div>

        </div>

        {/* TEXT SIDE */}
        <div className="text-center md:text-left">

          {/* SMALL LABEL */}
          <p className="text-sm font-semibold tracking-[0.3em] text-[#3A0519]">
            ABOUT ME
          </p>

          {/* BIG TYPOGRAPHY */}
          <h2 className="mt-5 font-heading text-4xl leading-tight text-black md:text-6xl">

            Creating digital experiences through design and development.

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-black/70">

            I’m a frontend developer and creative designer passionate
            about transforming ideas into interactive and visually
            expressive digital experiences. I enjoy blending creativity,
            development, and design to create websites that feel modern,
            purposeful, and engaging.

          </p>

          {/* CTA */}
          <button className="mt-10 rounded-full bg-[#3A0519] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#A53860]">

            Know More About Me

          </button>

        </div>

      </div>

    </section>

  )
}

export default About