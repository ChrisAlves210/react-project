import './POPOSSpace.css'

function POPOSSpace(props) {
  const { name, image, address, hours } = props

  return (
    <div className="POPOSSpace">
      <img
        src={`/images/${image}`}
        width="300"
        height="300"
        alt={name}
      />
      <h1>{name}</h1>
      <div>{address}</div>
      {hours && <div className="POPOSSpace-hours">Hours: {hours}</div>}
    </div>
  )
}

export default POPOSSpace
