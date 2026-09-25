import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, image, address, description, hours } = props
  const imageSource = image ? `/images/${image}` : '/images/placeholder.svg'
  const altText = description
    ? `${name} at ${address}: ${description}`
    : `${name} at ${address}, a public open space in San Francisco.`

  return (
    <article className="w-full text-center">
      <figure className="m-0 flex flex-col items-center justify-center gap-4">
        <Link
          className="order-1 block w-full rounded focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#7f1d1d] focus-visible:outline-offset-2"
          to={`/spaces/${encodeURIComponent(name)}`}
          aria-label={`View details for ${name}`}
        >
          <img
            className="h-[300px] w-full object-cover"
            src={imageSource}
            width="300"
            height="300"
            alt={altText}
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = '/images/placeholder.svg'
            }}
          />
        </Link>
        <figcaption className="POPOSInfo order-2 flex flex-col items-center text-center md:w-full md:justify-center">
          <h2 className="m-0 text-2xl leading-tight text-red-500">{name}</h2>
          <p className="hidden">{address}</p>
          {description && <p className="mt-[0.35rem] leading-[1.4]">{description}</p>}
          {hours && <p className="mt-[0.35rem] text-sm italic">Hours: {hours}</p>}
        </figcaption>
      </figure>
    </article>
  )
}

export default POPOSSpace
