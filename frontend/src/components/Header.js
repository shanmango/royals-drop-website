import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Header.scss'
import logo from '../img/mr.png'
const Header = () => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/')
  }
  return (
    <div className="text-center" id="banner">
      <div id="title" onClick={handleClick}>
        <h1>An Unofficial</h1>
        <img id="royals" src={logo} alt="MapleRoyals"/>
        <h1>Drop Tracker</h1>
      </div>
      <h6> Game Version: 73.4 </h6>
    </div>
  )
}

export default Header