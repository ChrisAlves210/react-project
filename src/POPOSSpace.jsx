import './POPOSSpace.css'

function POPOSSpace(props) {
  const { name, image, address, hours } = props
  const imageSource = image ? `/images/${image}` : '/images/placeholder.svg'

  return (
    <div className="POPOSSpace">
      <img
        src={imageSource}
        width="300"
        height="300"
        alt={name}
        onError={(event) => {
          event.currentTarget.onerror = null
          event.currentTarget.src = '/images/placeholder.svg'
        }}
      />
      <h1>{name}</h1>
      <div>{address}</div>
      {hours && <div className="POPOSSpace-hours">Hours: {hours}</div>}
    </div>
  )
}

export default POPOSSpace
