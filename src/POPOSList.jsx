import POPOSSpace from './POPOSSpace.jsx'
import './POPOSList.css'
import data from './sfpopos-data.json'

function POPOSList() {
  const spaces = data.map(({ title, address, desc, images, hours }) => {
    return (
      <li key={title} className="POPOSListItem">
        <POPOSSpace
          name={title}
          address={address}
          description={desc}
          image={images[0]}
          hours={hours}
        />
      </li>
    )
  })

  return (
    <section aria-label="San Francisco POPOS list">
      <ul className="POPOSList">{spaces}</ul>
    </section>
  )
}

export default POPOSList

