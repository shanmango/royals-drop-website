import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { clearSelected, searchBy, setSelected } from '../reducers/searchReducer'
import '../styles/ListItem.scss'

const ListItem = ({ listItem }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  // Set right image source url
  const category = useSelector(state => state.search.category)
  let imgUrl = category === 'mobs'
    ? `https://maplestory.io/api/SEA/198/item/${listItem.id}/icon?resize=1.5`
    : `https://maplestory.io/api/SEA/198/mob/${listItem.id}/render/stand`

  const searchClickedItem = async (listItem, category) => {
    category = category === 'mobs' ? 'items' : 'mobs'
    await dispatch(clearSelected())
    await dispatch(searchBy(category))
    await dispatch(setSelected({ value: listItem.id }, category))
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