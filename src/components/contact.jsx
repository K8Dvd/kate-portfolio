import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa'

function Contact() {

  const form = useRef()
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm(
      'service_9j40iul',
      'template_z8782cd',
      form.current,
      'NVAMWgedZhyBi0Gt0'
    )

    .then(() => {

      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
      }, 3000)

      e.target.reset()

    })

    .catch((error) => {

      console.log(error)
      alert('Something went wrong.')

    })

  }

  return (

    <section className="bg-[#faf7f4] px-6 py-24 md:px-12">

      <div className="mx-auto max-w-[1200px]">

        {/* TOP CONTENT */}
        <div className="text-center">

          {/* LABEL */}
          <p className="text-sm font-semibold tracking-[0.3em] text-[#3A0519]">
            CONTACT
          </p>

          {/* HEADING */}
          <h2 className="mt-5 font-heading text-4xl leading-tight text-black md:text-6xl">

            Let’s Build Something Creative Together.

          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black/70">

            Currently open to job opportunities,
            creative collaborations, and meaningful digital projects.

          </p>

          {/* SOCIALS */}
          <div className="mt-10 flex justify-center gap-8 text-3xl text-[#3A0519]">

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

          </div>

        </div>

        {/* CONTACT CARD */}
        <div className="mx-auto mt-20 max-w-4xl rounded-[40px] bg-[#3A0519] p-8 md:p-14">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8"
          >

            {/* TOP INPUTS */}
            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="rounded-full bg-white px-6 py-4 outline-none"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="rounded-full bg-white px-6 py-4 outline-none"
              />

            </div>

            {/* SUBJECT */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-full bg-white px-6 py-4 outline-none"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="w-full rounded-[30px] bg-white px-6 py-5 outline-none"
            />

            {/* SUCCESS MESSAGE */}

            {success && (

              <p className="text-center text-sm font-medium text-white">

                Message sent successfully.

              </p>

            )}

           

            {/* BUTTON */}
            <div className="flex justify-center md:justify-end">

              <button
                type="submit"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#3A0519] transition duration-300 hover:bg-[#A53860] hover:text-white"
              >

                Send Message

              </button>

            </div>

          </form>

        </div>

      </div>

    </section>

  )
}

export default Contact