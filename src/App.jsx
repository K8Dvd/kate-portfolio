import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import AboutPage from './pages/about'
import ProjectsPage from './pages/projects'
import AchievementsPage from './pages/achievements'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>

      {/* FOOTER */}
      <footer className="text-center py-6 text-xs text-gray-800">
        © 2026 Kate Anne David
      </footer>

    </BrowserRouter>
  )
}

export default App