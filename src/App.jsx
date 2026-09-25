import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Title from './Title.jsx'
import POPOSList from './POPOSList.jsx'
import { Link, useParams } from 'react-router-dom'
import data from './sfpopos-data.json'

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

function SpacePage() {
  const { spaceName } = useParams()
  const space = data.find(({ title }) => title === spaceName)

  if (!space) {
    return (
      <section className="AboutPage" aria-labelledby="space-not-found-title">
        <h1 id="space-not-found-title">Space not found</h1>
        <Link to="/">Return to all spaces</Link>
      </section>
    )
  }

  return (
    <article className="SpacePage" aria-labelledby="space-title">
      <img
        className="SpacePage-image"
        src={`/images/${space.images[0]}`}
        alt={`${space.title} at ${space.address}`}
      />
      <div className="SpacePage-content">
        <h1 id="space-title">{space.title}</h1>
        <p>{space.address}</p>
        <p>{space.desc}</p>
        <p><strong>Hours:</strong> {space.hours}</p>
        <p><strong>Features:</strong> {space.features.join(', ')}</p>
        <Link to="/">Back to all spaces</Link>
      </div>
    </article>
  )
}

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="absolute left-4 top-[-3rem] z-10 rounded-lg bg-white px-4 py-3 text-[#1a1a1a] no-underline transition-[top] duration-200 focus:top-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col box-border p-8 text-center">
        <Title />

        <main id="main-content" className="flex-1" tabIndex="-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/spaces/:spaceName" element={<SpacePage />} />
          </Routes>
        </main>

        <footer className="mt-8 shrink-0 border-t border-current pt-4 text-sm">SFPOPOS</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
