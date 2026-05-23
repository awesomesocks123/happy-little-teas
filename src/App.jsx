import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import OurStoryPage from './pages/OurStoryPage'
import FindUsPage from './pages/FindUsPage'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100svh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/story" element={<OurStoryPage />} />
          <Route path="/find-us" element={<FindUsPage />} />
        </Routes>
      </main>
    </div>
  )
}
