import React from 'react'
import { useHistory, useParams } from "react-router-dom"
import '../styles/ListItem.scss'

const ListItem = ({ listItem }) => {
  const history = useHistory()
  // Set right image source url
  const category = useParams().category
  let imgUrl = category === 'mobs'
    ? `https://maplestory.io/api/SEA/198/item/${listItem.id}/icon?resize=1.5`
    : `https://maplestory.io/api/SEA/198/mob/${listItem.id}/render/stand`

  const searchClickedItem = async (listItem, category) => {
    category = category === 'mobs' ? 'items' : 'mobs'
    history.push(`/search/${category}/${listItem.id}`)

  }

  return (
    <tr className="info-row" onClick={() => searchClickedItem(listItem, category)}>
      <td>
        <div className="info-name">{listItem.name}</div>
        {listItem.desc && <div className="info-desc">{listItem.desc}</div>}
      </td>
      <td className="image-column">
        <div className="image-column-container">
          <img src={imgUrl} alt='img' />
        </div>
      </td>
    </tr>
  )
}

export default ListItem