import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Title.css'

function Title() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const wasNavOpen = useRef(isNavOpen)
  const toggleButtonRef = useRef(null)
  const firstNavLinkRef = useRef(null)
  const headerRef = useRef(null)

  // Move focus into the menu on open, and back to the toggle on close.
  useEffect(() => {
    if (isNavOpen && !wasNavOpen.current) {
      firstNavLinkRef.current?.focus()
    } else if (!isNavOpen && wasNavOpen.current) {
      toggleButtonRef.current?.focus()
    }
    wasNavOpen.current = isNavOpen
  }, [isNavOpen])

  // Close the menu when clicking anywhere outside the header.
  useEffect(() => {
    if (!isNavOpen) return undefined

    const handleOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setIsNavOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [isNavOpen])

  const closeNav = () => setIsNavOpen(false)

  return (
    <header className="Title" ref={headerRef}>
      <div className="Title-Heading">
        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle">
          San Francisco Privately Owned Public Open Spaces
        </div>
      </div>
      <button
        ref={toggleButtonRef}
        className="NavToggle"
        type="button"
        aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isNavOpen}
        aria-controls="main-navigation"
        onClick={() => setIsNavOpen((isOpen) => !isOpen)}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && isNavOpen) {
            closeNav()
          }
        }}
      >
        Menu
      </button>
      {/* On mobile the closed menu is display:none, which already removes it
          from the tab order and the accessibility tree, so no aria-hidden
          or tabIndex management is needed here. On desktop it's always shown. */}
      <nav
        id="main-navigation"
        className={`MainNav${isNavOpen ? ' is-open' : ''}`}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && isNavOpen) {
            closeNav()
          }
        }}
      >
        <NavLink
          ref={firstNavLinkRef}
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          onClick={closeNav}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          onClick={closeNav}
        >
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default Title
