import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import LocalLens from './pages/LocalLens'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/locallens" element={<LocalLens />} />
    </Routes>

  )
}

export default App
