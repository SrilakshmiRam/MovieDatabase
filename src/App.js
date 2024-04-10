import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import SearchContext from './context/SearchContext'

import './App.css'

// write your code here
import Home from './components/Home'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import SpecificMovie from './components/SpecificMovie'
import SearchedMovie from './components/SearchedMovie'

class App extends Component {
  state = {searchInput: '', searchResponse: []}

  componentDidMount() {
    this.getSearchDetailsMovie()
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  getSearchDetailsMovie = async () => {
    const {searchInput} = this.state

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d30d2825974522dcd42d08d55d5e692e&language=en-US&query=${searchInput}&page=1`
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.results.map(eachItem => ({
        posterPath: `https://image.tmdb.org/t/p/w500${eachItem.poster_path}`,
        title: eachItem.title,
        voteAverage: eachItem.vote_average,
        id: eachItem.id,
      }))

      this.setState({
        searchResponse: updatedData,
      })
    }
  }

  makeAsearchApi = () => {
    this.getSearchDetailsMovie()
  }

  render() {
    const {searchInput, searchResponse} = this.state
    return (
      <Switch>
        <SearchContext.Provider
          value={{
            searchInput,
            searchResponse,
            updateSearchInput: this.updateSearchInput,
            makeAsearchApi: this.makeAsearchApi,
          }}
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/top-rated" component={TopRated} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/movie/:id" component={SpecificMovie} />
          <Route exact path="/search" component={SearchedMovie} />
        </SearchContext.Provider>
      </Switch>
    )
  }
}

export default App
