import './index.css'

const Locations = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <li className="list-location">
      <div className="location-card-container">
        <img src={imageUrl} alt={name} className="image" />
        <div className="heading-description-container">
          <h1 className="head">{name}</h1>
          <p className="head">{description}</p>
        </div>
      </div>
    </li>
  )
}
export default Locations
