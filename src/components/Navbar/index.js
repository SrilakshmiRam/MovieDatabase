import {Link} from 'react-router-dom'

import {MdSearch} from 'react-icons/md'

import SearchContext from '../../context/SearchContext'

import './index.css'

const Navbar = () => (
  <SearchContext.Consumer>
    {value => {
      const {searchInput, updateSearchInput, makeAsearchApi} = value

      const onChangeSearchInput = event => {
        updateSearchInput(event.target.value)
      }

      const onClickSearch = () => {
        makeAsearchApi()
      }

      return (
        <nav className="navbar-container">
          <h1 className="navbar-title">movieDB</h1>
          <div className="searchquerirs-container">
            <input
              type="search"
              className="search-input"
              placeholder="enter a movie"
              value={searchInput}
              onChange={onChangeSearchInput}
            />
            <Link to="/search/" className="nav-link">
              <button
                type="button"
                className="search-button"
                onClick={onClickSearch}
              >
                <MdSearch className="search-icon" arial-label="close" />
              </button>
            </Link>
          </div>
          <ul className="navigation-btns">
            <li>
              <Link to="/" className="nav-link">
                Popular
              </Link>
            </li>
            <li>
              <Link to="/top-rated" className="nav-link">
                Top Rated
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className="nav-link">
                Upcoming
              </Link>
            </li>
          </ul>
        </nav>
      )
    }}
  </SearchContext.Consumer>
)

export default Navbar
