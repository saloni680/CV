import React from 'react'
import MNavBar from './Navbar/MNavBar'
import Body from './Body/Body'
import Project from './Projects/Project'
import Skill from './SKills/Skill'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div >
      <MNavBar/>
      <Body/>
      <Project/>
      <Skill/>
      <Footer/>
    </div>
  )
}

export default App

// npx json-server --watch data.json