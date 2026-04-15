import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import LocalLens from './pages/LocalLens'
import Hit from './pages/Hit'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/locallens" element={<LocalLens />} />
      <Route path="/hit" element={<Hit />} />
    </Routes>

  )
}

export default App
