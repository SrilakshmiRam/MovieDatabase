import {Link} from 'react-router-dom'
import './index.css'

const TopRatedMovie = props => {
  const {movieDetails} = props
  const {title, posterPath, voteAverage, id} = movieDetails
  const rating = voteAverage.toFixed(1)
  return (
    <li className="poster-movie">
      <img src={posterPath} alt={title} className="image" />
      <h1 className="movie-title">{title}</h1>
      <p className="rating">Rating: {rating}</p>
      <Link to={`/movie/${id}`} className="nav-link">
        <button type="button" className="viewDetails-btn">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default TopRatedMovie
