import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header/header'

const App=()=> {

  const PI=4.1416;
  return(
    <>
      <Header/>
      <h1>hola mundo {PI}</h1>
      <p>app v0.01</p>
    </>
  )
}

export default App
