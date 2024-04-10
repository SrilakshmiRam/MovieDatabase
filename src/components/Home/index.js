import {Component} from 'react'

import Navbar from '../Navbar'
import Popular from '../Popular'
import './index.css'

class Home extends Component {
  state = {popularMovies: []}

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=d30d2825974522dcd42d08d55d5e692e&language=en-US&page=1'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        totalPages: data.total_pages,
        totalResults: data.total_results,
        results: data.results.map(each => ({
          id: each.id,
          title: each.title,
          releaseDate: each.release_date,
          posterPath: `https://image.tmdb.org/t/p/w500${each.poster_path}`,
          voteAverage: each.vote_average,
          voteCount: each.vote_count,
        })),
      }

      this.setState({
        popularMovies: updatedData.results,
      })
    }
  }

  render() {
    const {popularMovies} = this.state
    return (
      <div>
        <Navbar />
        <ul className="popularmovies-list">
          {popularMovies.map(eachMovie => (
            <Popular movieDetails={eachMovie} key={eachMovie.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
