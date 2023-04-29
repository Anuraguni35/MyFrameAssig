import React from 'react'
import './header.css'
import StatusBar from './statusBar'
import Avtar from './Avtar'

export default function Header() {
  return (
    <div className='header'>
     <StatusBar/>
     <Avtar/>
    </div>
  )
}
