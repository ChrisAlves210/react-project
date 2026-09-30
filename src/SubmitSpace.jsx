import { useState } from 'react'

const featureOptions = [
  { value: 'seating', label: 'Seating' },
  { value: 'shade', label: 'Shade or shelter' },
  { value: 'food', label: 'Food or drink' },
  { value: 'wifi', label: 'Public Wi-Fi' },
  { value: 'restrooms', label: 'Restrooms' },
]

function SubmitSpace() {
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [featureError, setFeatureError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleFeatureChange = (event) => {
    const { checked, value } = event.target
    setSelectedFeatures((features) =>
      checked ? [...features, value] : features.filter((feature) => feature !== value),
    )
    setFeatureError('')
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (selectedFeatures.length === 0) {
      setFeatureError('Select at least one feature.')
      return
    }

    setFeatureError('')
    setSubmitted(true)
    setSelectedFeatures([])
    event.currentTarget.reset()
  }

  return (
    <section className="mx-auto max-w-3xl p-4 text-left md:p-8" aria-labelledby="submit-title">
      <header className="mb-8 max-w-2xl">
        <h1 id="submit-title" className="mb-4">Submit a public space you know</h1>
        <p>
          Help us document a privately owned public open space in San Francisco.
          Required fields help us review your submission accurately.
        </p>
      </header>

      {submitted && (
        <p className="mb-6 rounded border border-green-700 bg-green-50 p-4 text-green-900" role="status">
          Thanks. Your public space submission is ready for review.
        </p>
      )}

      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-1 text-xl font-bold">Space details</legend>
          <div className="flex flex-col gap-1">
            <label htmlFor="space-name" className="font-medium text-gray-700">Space name</label>
            <input
              id="space-name"
              name="spaceName"
              type="text"
              required
              className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="address" className="font-medium text-gray-700">Street address</label>
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="street-address"
              required
              className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="area" className="font-medium text-gray-700">Approximate area (sq ft)</label>
              <input
                id="area"
                name="area"
                type="number"
                min="1"
                max="100000"
                step="1"
                required
                className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <span className="text-sm text-gray-600">Enter a number from 1 to 100,000.</span>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="capacity" className="font-medium text-gray-700">Seating capacity</label>
              <input
                id="capacity"
                name="capacity"
                type="number"
                min="0"
                max="10000"
                step="1"
                required
                className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <span className="text-sm text-gray-600">Enter a number from 0 to 10,000.</span>
            </div>
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-1 text-xl font-bold">Space type</legend>
          <p className="m-0 text-sm text-gray-600">Choose one option.</p>
          {['Plaza', 'Garden', 'Terrace', 'Other'].map((type) => (
            <label key={type} className="flex items-center gap-3">
              <input
                type="radio"
                name="spaceType"
                value={type.toLowerCase()}
                required
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{type}</span>
            </label>
          ))}
        </fieldset>

        <fieldset
          className="flex flex-col gap-3"
          aria-invalid={Boolean(featureError)}
          aria-describedby={featureError ? 'feature-error' : undefined}
        >
          <legend className="mb-1 text-xl font-bold">Available features</legend>
          <p className="m-0 text-sm text-gray-600">Select every feature visitors can use.</p>
          {featureOptions.map(({ value, label }) => (
            <label key={value} className="flex items-center gap-3">
              <input
                type="checkbox"
                name="features"
                value={value}
                checked={selectedFeatures.includes(value)}
                onChange={handleFeatureChange}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{label}</span>
            </label>
          ))}
          {featureError && <p id="feature-error" className="m-0 text-sm font-medium text-red-700">{featureError}</p>}
        </fieldset>

        <fieldset className="flex flex-col gap-4">
          <legend className="mb-1 text-xl font-bold">Your contact details</legend>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="first-name" className="font-medium text-gray-700">First name</label>
              <input
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="last-name" className="font-medium text-gray-700">Last name</label>
              <input
                id="last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="font-medium text-gray-700">Describe this space</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              required
              className="w-full rounded border border-gray-300 px-3 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 md:w-auto md:self-start"
        >
          Submit public space
        </button>
      </form>
    </section>
  )
}

export default SubmitSpace
