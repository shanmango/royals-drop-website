import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Header from './Header'
import Search from './Search'
import Footer from './Footer'



const AppContainer = () => {
  const [visible, setVisible] = useState(false)

  const listenToScroll = (event) => {
    if (event.target.scrollTop >= 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = (event) => {
    event.target.parentElement.scrollTop = 0
    console.log(event.target.parentElement.scrollTop)
  }

  const BackToTopButton = () => {
    return (
      <Button
        id='back-to-top'
        variant="secondary"
        size='sm'
        onClick={(event) => scrollToTop(event)}
      >Back To Top</Button>
    )
  }
  return (
    <div className='container' onScroll={(event) => listenToScroll(event)}>
      <Header />
      <Search />
      <Footer />
      {visible && BackToTopButton()}
    </div>
  )
}

export default AppContainer