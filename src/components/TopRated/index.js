import {Component} from 'react'

import Navbar from '../Navbar'
import TopRatedMovie from '../TopRatedMovie'
import './index.css'

class TopRated extends Component {
  state = {topRatedMovies: []}

  componentDidMount() {
    this.getTopRatedMovies()
  }

  getTopRatedMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/top_rated?api_key=d30d2825974522dcd42d08d55d5e692e&language=en-US&page=1'

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
        topRatedMovies: updatedData.results,
      })
    }
  }

  render() {
    const {topRatedMovies} = this.state
    return (
      <div>
        <Navbar />
        <ul className="top-rated-movies-list">
          {topRatedMovies.map(eachMovie => (
            <TopRatedMovie movieDetails={eachMovie} key={eachMovie.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TopRated