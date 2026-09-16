import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Title.css'

function Title() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="Title">
      <div className="Title-Heading">
        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle">
          San Francisco Privately Owned Public Open Spaces
        </div>
      </div>
      <button
        className="NavToggle"
        type="button"
        aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isNavOpen}
        aria-controls="main-navigation"
        onClick={() => setIsNavOpen((isOpen) => !isOpen)}
      >
        Menu
      </button>
      <nav
        id="main-navigation"
        className={`MainNav${isNavOpen ? ' is-open' : ''}`}
        aria-hidden={!isNavOpen}
      >
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default Title
