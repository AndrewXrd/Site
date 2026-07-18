import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import LocalLens from './pages/LocalLens'
import Hit from './pages/Hit'
import AiHeroSection from './pages/AiHeroSection'
import AiProjectsPage from './pages/AiProjectsPage'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/locallens" element={<LocalLens />} />
      <Route path="/hit" element={<Hit />} />
      <Route path="/AiHeroSection" element={<AiHeroSection />} />
      <Route path="/AiProjectsPage" element={<AiProjectsPage />} />
    </Routes>

  )
}

export default App
