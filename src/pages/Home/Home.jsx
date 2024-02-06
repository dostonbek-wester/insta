import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../Chat/Chat'
import Info from '../../components/Info/Info'
import './style.css'
import home from "./home.png"


function Home() {
  return (
    <img src={home} alt=""  className='home-container'/>
  )
}

export default Home