import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Title from './Title.jsx'
import POPOSList from './POPOSList.jsx'

function HomePage() {
  return <POPOSList />
}

function AboutPage() {
  return (
    <section className="AboutPage" aria-labelledby="about-title">
      <article className="AboutMain">
        <h1 id="about-title">About SFPOPOS</h1>
        <p>
          SFPOPOS highlights the public open spaces that San Francisco creates for
          residents and visitors to enjoy.
        </p>
        <p>
          These spaces offer places to rest, gather, eat, and experience the city
          outdoors.
        </p>
      </article>
      <aside className="AboutSidebar">
        <h2>Public open spaces</h2>
        <p>
          Browse plazas, gardens, terraces, and other places to pause in the
          middle of the city.
        </p>
      </aside>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="SkipLink">
        Skip to main content
      </a>

      <div className="AppShell">
        <Title />

        <main id="main-content" className="AppContent" tabIndex="-1">
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
