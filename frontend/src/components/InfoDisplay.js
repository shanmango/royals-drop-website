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
    caption = 'Drops:'
    list = data.drops
  }

  return (
    <div id="info-display">
      <div id="selected-item">
        <div className="title-caption-pair">
          <h4>{data.name}</h4>
          <h5>{caption}</h5>
        </div>
        <div id="search-image">
          <img src={imgUrl} alt='img' />
        </div>
      </div>
      <List list={list} />
    </div>
  )
}

export default InfoDisplay