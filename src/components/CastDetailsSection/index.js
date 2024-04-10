import './index.css'

const CastDetailsSection = props => {
  const {castData} = props
  const {imageUrl, originalName, characterName} = castData
  return (
    <li className="cast-item">
      <img src={imageUrl} alt={originalName} className="cast-image" />
      <h1 className="name">name: {originalName}</h1>
      <p className="character-name">character: {characterName}</p>
    </li>
  )
}

export default CastDetailsSection
