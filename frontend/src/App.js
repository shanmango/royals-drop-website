import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import Search from './components/Search'

import { initializeMobs } from './reducers/mobReducer'
import { initializeItems } from './reducers/itemReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeMobs())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeItems())
  }, [dispatch])
  const padding = '25%'
  const style = {
    'padding-left': padding,
    'padding-right': padding,
    'border-style': 'solid'
  }
  return (
    <div className="container">
      <Header />
      <div style={style}>
        <hr></hr>
        <Search />
      </div>
    </div>

  )
}

export default App
