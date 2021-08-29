import React from 'react'

const Header = () => {
  const style = {
    'border-style': 'solid',
    'color': 'white',
    'text-shadow': '0px 0px 22px #000000'
  }

  return (
    <div className="text-center" style={style}>
      <h1>The Unofficial MapleRoyals Drop Tracker</h1>

      <div style={{ display: 'inline' }}>
        Game Version: 73.4
      </div>
      <div style={{ display: 'inline' }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Created By: Shanmango
      </div>
    </div>
  )
}

export default Header