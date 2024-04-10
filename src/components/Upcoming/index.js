import {Component} from 'react'

import Navbar from '../Navbar'
import UpcomingMovie from '../UpcomingMovie'
import Pagination from '../Pagination'
import './index.css'

class Upcoming extends Component {
  state = {upcomingMoviesList: [], apiResponse: {}}

  componentDidMount() {
    this.getupcomingMovies()
  }

  getupcomingMovies = async (page = 1) => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=d30d2825974522dcd42d08d55d5e692e&language=en-US&page=${page}`

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
        upcomingMoviesList: updatedData.results,
        apiResponse: updatedData,
      })
    }
  }

  render() {
    const {upcomingMoviesList, apiResponse} = this.state
    return (
      <>
        <div>
          <Navbar />
          <ul className="upcoming-movies-list">
            {upcomingMoviesList.map(eachMovie => (
              <UpcomingMovie movieDetails={eachMovie} key={eachMovie.id} />
            ))}
          </ul>
        </div>
        <Pagination
          totalPages={apiResponse.totalPages}
          apiCallBack={this.getupcomingMovies}
        />
      </>
    )
  }
}

export default Upcoming
