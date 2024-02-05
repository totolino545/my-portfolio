import { useState } from 'react'

import './App.css'
import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import Section from './Section.jsx'

function App() {

  return (
    <>
    <main>
      <NavBar/>
      <div>
      <Header />
      <Section/> 
      </div>   
    </main>
    </>
  )
}
export default App
