function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full bg-[#4b0019]/90 backdrop-blur-md px-8 py-4 flex items-center justify-between text-white">

      <h1 className="font-bold text-xl">
        KATE
      </h1>

      <ul className="hidden md:flex items-center gap-8 text-sm">
        <li>About</li>
        <li>Projects</li>
        <li>Achievements</li>
        <li>Contact</li>
      </ul>

      <button className="bg-white text-[#4b0019] px-5 py-2 rounded-full text-sm font-medium">
        Resume
      </button>

    </nav>
  )
}

export default Navbar