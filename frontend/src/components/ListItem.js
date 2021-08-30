import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSelected, searchBy, setSelected } from '../reducers/searchReducer'
import '../styles/ListItem.scss'

const ListItem = ({ listItem }) => {
  const dispatch = useDispatch()

  // Set right image source url
  const category = useSelector(state => state.search.category)
  let imgUrl = category === 'mobs'
    ? `https://maplestory.io/api/SEA/198/item/${listItem.id}/icon?resize=1.5`
    : `https://maplestory.io/api/SEA/198/mob/${listItem.id}/render/stand`

  const searchClickedItem = (listItem, category) => {
    category = category === 'mobs' ? 'items' : 'mobs'
    dispatch(clearSelected())
    dispatch(searchBy(category))
    dispatch(setSelected({ value: listItem.id }, category))

  }

  return (
    <tr className="info-row" onClick={() => searchClickedItem(listItem, category)}>
      <td>
        <div>{listItem.name}</div>
        {listItem.desc && <div>{listItem.desc}</div>}
      </td>
      <td className="image-column-container">
          <img src={imgUrl} alt='img' />
      </td>
    </tr>
  )
}

export default ListItem