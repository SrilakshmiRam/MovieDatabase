import React from 'react'

const SearchContext = React.createContext({
  searchInput: '',
  updateSearchInput: () => {},
  searchResponse: [],
  makeAsearchApi: () => {},
})

export default SearchContext
