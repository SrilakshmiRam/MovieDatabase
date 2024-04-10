import './index.css'

import Genre from '../Genre'

const MovieDetailsSection = props => {
  const {moviesData, genresData} = props
  const {
    title,
    duration,
    posterPath,
    overview,
    releaseDate,
    genres,
    voteAverage,
  } = moviesData
  const rating = parseInt(voteAverage)
  return (
    <div className="movie-details-item">
      <img src={posterPath} alt={title} className="poster-image" />
      <h1 className="movie-name">{title}</h1>
      <div className="text-container">
        <p className="overview">Overview: {overview}</p>
        <p className="releaseDate">Releasedate: {releaseDate}</p>
        <p className="duration">Duration: {duration}</p>
        <p className="Rating">Rating: {rating}</p>
        <p className="movie-name">Genres</p>
        <ul>
          {genresData.map(eachGenre => (
            <Genre details={eachGenre} key={eachGenre.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MovieDetailsSection
