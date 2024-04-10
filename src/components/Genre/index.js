import './index.css'

const Genre = props => {
  const {details} = props
  const {name} = details
  return <p className="genre-name">{name}</p>
}

export default Genre
