import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

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
  const navLinkClassName = ({ isActive }) =>
    `rounded-full px-4 py-2 font-bold no-underline ${
      isActive ? 'bg-white text-[rgb(192,45,26)]' : 'text-white/85'
    } focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3`

  return (
    <header
      className="mb-4 flex w-full flex-col items-center gap-2 bg-[rgb(192,45,26)] p-2 text-center text-white-500 md:flex-row md:justify-between md:text-left"
      ref={headerRef}
    >
      <div>
        <h1 className="m-0">SFPOPOS</h1>
        <div className="hidden text-white md:block">
          San Francisco Privately Owned Public Open Spaces
        </div>
      </div>
      <button
        ref={toggleButtonRef}
        className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1 rounded-full border-2 border-white bg-transparent px-3 py-2 text-white md:hidden"
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
        <span className="sr-only">Menu</span>
        <span className="block h-0.5 w-6 bg-white" />
        <span className="block h-0.5 w-6 bg-white" />
        <span className="block h-0.5 w-6 bg-white" />
      </button>
      {/* On mobile the closed menu is display:none, which already removes it
          from the tab order and the accessibility tree, so no aria-hidden
          or tabIndex management is needed here. On desktop it's always shown. */}
      <nav
        id="main-navigation"
        className={`${isNavOpen ? 'flex' : 'hidden'} flex-col items-center gap-2 md:flex md:flex-row md:gap-4`}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && isNavOpen) {
            closeNav()
          }
        }}
      >
        <NavLink
          ref={firstNavLinkRef}
          to="/"
          className={navLinkClassName}
          onClick={closeNav}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={navLinkClassName}
          onClick={closeNav}
        >
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default Title
