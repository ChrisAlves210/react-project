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
        <form
          className="mt-8 flex max-w-lg flex-col gap-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <h2 className="mb-0 text-2xl">Share a space</h2>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="first-name" className="font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                autoComplete="given-name"
                className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="last-name" className="font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                autoComplete="family-name"
                className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 md:w-auto md:self-end"
          >
            Send message
          </button>
        </form>
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
