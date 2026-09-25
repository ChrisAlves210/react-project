import POPOSSpace from './POPOSSpace.jsx'
import data from './sfpopos-data.json'

function POPOSList() {
  const spaces = data.map(({ title, address, desc, images, hours }) => {
    return (
      <li key={title}>
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
      <ul className="grid list-none grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6 p-0">{spaces}</ul>
    </section>
  )
}

export default POPOSList

