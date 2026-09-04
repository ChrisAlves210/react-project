import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Title from './Title.jsx'
import POPOSList from './POPOSList.jsx'

function HomePage() {
  return (
    <>
      <Title />
      <POPOSList />
    </>
  )
}

function AboutPage() {
  return (
    <div className="AboutPage">
      <h1>About SFPOPOS</h1>
      <p>
        SFPOPOS highlights the public open spaces that San Francisco creates for
        residents and visitors to enjoy.
      </p>
      <p>
        These spaces offer places to rest, gather, eat, and experience the city
        outdoors.
      </p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="AppShell">
        <nav className="MainNav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
        </nav>

        <main className="AppContent">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <footer className="SiteFooter">SFPOPOS</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
