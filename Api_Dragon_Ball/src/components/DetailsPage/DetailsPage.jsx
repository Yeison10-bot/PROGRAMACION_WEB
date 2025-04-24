import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CharacterDetails from '../CharacterDetails/CharacterDetails'
 
const DetailsPage = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
  }, [id])

  if (!character) return <p style={{ color: 'white', textAlign: 'center' }}>Cargando personaje...</p>

  return (
    <CharacterDetails character={character} />
  )
}

export default DetailsPage