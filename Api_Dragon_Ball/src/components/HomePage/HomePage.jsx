import React, { useEffect, useState } from 'react'
 import { Link } from 'react-router-dom'
 
 import CardUser from '../CardUser/CardUser'
 
 const HomePage = () => {
     const [characters, setCharacters] = useState([])
 
   useEffect(() => {
     fetch('https://dragonball-api.com/api/characters?limit=60')
     .then((response) => response.json())
     .then((data) => setCharacters(data.items))
     },[]);
 
   return (
     <main>
         { characters.map((user) => (
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
           
         )) }
    </main>
   )
   return (
       <main>
         {characters.map((char) => (
           <Link key={char.id} to={`/details/${char.id}`}>
             <Card
               name={char.name}
               img={char.image}
               race={char.race}
               gender={char.gender}
             />
           </Link>
         ))}
       </main>
     )
 }
 
 export default HomePage