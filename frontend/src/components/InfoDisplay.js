import React from 'react'
import { useSelector } from 'react-redux'
import List from './List'
import '../styles/InfoDisplay.scss'

const InfoDisplay = () => {
  const data = useSelector(state => state.search.selected)
  const category = useSelector(state => state.search.category)
  let imgUrl
  let caption
  let list
  if (category === 'items') {
    imgUrl = `https://maplestory.io/api/SEA/198/item/${data.id}/icon?resize=1.5`
    caption = 'Mobs That Drop This Item:'
    list = data.mobs
  } else {
    imgUrl = `https://maplestory.io/api/SEA/198/mob/${data.id}/render/stand`
    caption = 'Items That This Mob Drops:'
    list = data.drops
  }

  return (
    <div id="info-display" className="card">
      <div id="selected-item">
        <div id="selected-name">
          <h2>{data.name}</h2>
        </div>
        <div id="search-image-container" className="card">
          <img src={imgUrl} alt='img' />
        </div>
      </div>
      <h4 id="caption">{caption}</h4>
      <List list={list} />
    </div>
  )
}

export default InfoDisplay