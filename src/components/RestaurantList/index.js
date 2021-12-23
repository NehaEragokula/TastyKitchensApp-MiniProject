import {Link} from 'react-router-dom'

import './index.css'

const RestaurantList = props => {
  const {list} = props
  const {id, name, imageUrl, rating, cuisine, reviews} = list

  return (
    <Link to={`/restaurant/${id}`} className="link-details">
      <li className="restaurant-details" testid="restaurant-item">
        <img src={imageUrl} alt="restaurant" className="res-image" />
        <div className="rating-name-cuisine">
          <h1 className="res-name">{name}</h1>
          <p className="cuisine-name">{cuisine}</p>
          <div className="rating-cont">
            <img src="" alt="rating" className="star" />
            <p className="rating">{rating}</p>
            <h1>{reviews}</h1>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantList
