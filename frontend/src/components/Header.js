import React from 'react'
import '../styles/Header.scss'
import logo from '../img/mr.png'
const Header = () => {

  return (
    <div className="text-center banner">
      <div className="title">
        <h1>The Unofficial</h1>
        <img id="royals" src={logo} alt="MapleRoyals"/>
        <h1>Drop Tracker</h1>
      </div>
      <h6> Game Version: 73.4 </h6>
    </div>
  )
}

export default Header