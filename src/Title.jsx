import { NavLink } from 'react-router-dom'
import './Title.css'

function Title() {
  return (
    <header className="Title">
      <div className="Title-Heading">
        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle">
          San Francisco Privately Owned Public Open Spaces
        </div>
      </div>
      <nav className="MainNav">
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
