import React from 'react'
import banner from '../img/maplestorybanner.jpg'
const Header = () => {
  const style = {
    'color': 'white',
    'text-shadow': '0 0 1rem #000000',
    'padding': '2rem 0',
    'backgroundImage': `url(${banner})`,
    'backgroundRepeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
  }

  return (
    <div className="text-center" style={style}>
      <h1>The Unofficial MapleRoyals Drop Tracker</h1>
      <h6> Game Version: 73.4 </h6>
    </div>
  )
}

export default Header