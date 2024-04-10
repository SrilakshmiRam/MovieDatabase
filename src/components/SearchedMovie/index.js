import {useContext} from 'react'

import SearchContext from '../../context/SearchContext'

import Popular from '../Popular'
import Navbar from '../Navbar'

import './index.css'

const SearchedMovie = () => {
  const {searchResponse} = useContext(SearchContext)
  return (
    <div className="searched-movies-list">
      <Navbar />
      <ul className="search-movies">
        {searchResponse.map(eachItem => (
          <Popular movieDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default SearchedMovie
