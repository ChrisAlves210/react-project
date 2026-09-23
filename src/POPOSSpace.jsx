import './POPOSSpace.css'
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, image, address, description, hours } = props
  const imageSource = image ? `/images/${image}` : '/images/placeholder.svg'
  const altText = description
    ? `${name} at ${address}: ${description}`
    : `${name} at ${address}, a public open space in San Francisco.`

  return (
    <article className="POPOSSpace">
      <figure className="POPOSDetails">
        <img
          className="POPOSDetails-image"
          src={imageSource}
          width="300"
          height="300"
          alt={altText}
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = '/images/placeholder.svg'
          }}
        />
        <figcaption className="POPOSInfo">
          <h2 className="text-red-500">{name}</h2>
          <p className="POPOSAddress">{address}</p>
          {description && <p className="POPOSDescription">{description}</p>}
          <Link className="POPOSAboutLink" to={`/spaces/${encodeURIComponent(name)}`}>
            About this space
          </Link>
          {hours && <p className="POPOSSpace-hours">Hours: {hours}</p>}
        </figcaption>
      </figure>
    </article>
  )
}

export default POPOSSpace
