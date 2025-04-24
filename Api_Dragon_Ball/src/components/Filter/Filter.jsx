import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import CardUser from '../CardUser/CardUser'


const Filter = () => {
  const { gender } = useParams()
  const [characters, setCharacters] = useState([])


  fetch('https://dragonball-api.com/api/characters?limit=60')
    .then((res) => res.json())
    .then((data) => {
      const filtered = data.items.filter(char => char.gender === gender)
      setCharacters(filtered)
    })

  return (
    <main>
      {characters.map((user) => (
        <Link to={`/details/${user.id}`} key={user.id}>
          <CardUser
            key={user.id}
            user={user}
            image={user.image}
            name={user.name}
            race={user.race}
            gender={user.gender}
            ki={user.ki}
            maxKi={user.maxKi}
            affiliation={user.affiliation}
          />
        </Link>

      ))}
    </main>
  )
}

export default Filter