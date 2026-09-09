import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Title from './Title.jsx'
import POPOSList from './POPOSList.jsx'

function HomePage() {
  return <POPOSList />
}

function AboutPage() {
  return (
    <div className="AboutPage">
      <article className="AboutMain">
        <h1>About SFPOPOS</h1>
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
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="AppShell">
        <Title />

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
