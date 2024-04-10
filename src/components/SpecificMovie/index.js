import {Component} from 'react'

import MovieDetailsSection from '../MovieDetailsSection'
import CastDetailsSection from '../CastDetailsSection'

import './index.css'

class SpecificMovie extends Component {
  state = {moviesData: {}, castDetails: [], genresData: []}

  componentDidMount() {
    this.getSpecificMovieDetails()
    this.getMovieCastDetails()
  }

  getSpecificMovieDetails = async () => {
    const {match} = this.props
    console.log(this.props)
    const {params} = match
    const {id} = params
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=d30d2825974522dcd42d08d55d5e692e&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        title: data.title,
        posterPath: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        voteAverage: data.vote_average,
        duration: data.runtime,
        releaseDate: data.release_date,
        overview: data.overview,
        genres: data.genres.map(each => ({
          id: each.id,
          name: each.name,
        })),
      }

      this.setState({
        moviesData: updatedData,
        genresData: updatedData.genres,
      })
    }
  }

  getMovieCastDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d30d2825974522dcd42d08d55d5e692e&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.cast.map(eachCast => ({
        imageUrl: `https://image.tmdb.org/t/p/w500${eachCast.profile_path}`,
        originalName: eachCast.original_name,
        characterName: eachCast.character,
        id: eachCast.id,
      }))

      this.setState({
        castDetails: updatedData,
      })
    }
  }

  render() {
    const {moviesData, castDetails, genresData} = this.state
    return (
      <div>
        <h1 className="heading">Movie Details</h1>
        <MovieDetailsSection moviesData={moviesData} genresData={genresData} />
        <h1 className="heading">Movie Cast Details</h1>
        <ul className="cast-details">
          {castDetails.map(each => (
            <CastDetailsSection castData={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default SpecificMovie
