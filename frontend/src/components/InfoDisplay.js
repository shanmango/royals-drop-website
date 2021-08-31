import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"
import { setSelected } from '../reducers/searchReducer'
import itemService from '../services/items'
import mobService from '../services/mobs'

import List from './List'
import '../styles/InfoDisplay.scss'

const InfoDisplay = () => {
  const id = useParams().id
  const dispatch = useDispatch()
  const category = useParams().category
  const [data, setData] = useState(null)
  const service = category === 'mobs' ? mobService : itemService
  // TODO: setSelected necessary?
  dispatch(setSelected({value: id}, category))
  
  useEffect(() => {
    service.getById(id).then(response =>
      setData(response)
    )
  }, [id, service])

  let Display = () => {
    let imgUrl
    let caption
    let list
      if (category === 'items') {
        imgUrl = `https://maplestory.io/api/SEA/198/item/${id}/icon?resize=1.5`
        caption = 'Mobs That Drop This Item:'
        list = data.mobs
      } else {
        imgUrl = `https://maplestory.io/api/SEA/198/mob/${id}/render/stand`
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
  return (
    <div>{data && data.id === id && <Display />}</div>
  )
  

}

export default InfoDisplay