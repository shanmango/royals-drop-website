import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSelected, searchBy, setSelected } from '../reducers/searchReducer'

const ListItem = ({listItem}) => {
  const dispatch = useDispatch()

  // Set right image source url
  const category = useSelector(state => state.search.category)
  let imgUrl = category === 'mobs'
  ? `https://maplestory.io/api/GMS/210.1.1/item/${listItem.id}/icon?resize=1.5`
  : `https://maplestory.io/api/GMS/210.1.1/mob/${listItem.id}/render/stand`

  
  const handleClick = (listItem, category) => {
    category = category === 'mobs' ? 'items' : 'mobs'
    // Search by clicked item
    dispatch(clearSelected())
    dispatch(searchBy(category))
    dispatch(setSelected({value: listItem.id}, category))
    
  }

  return (
    <tr onClick={() => handleClick(listItem, category)}>
      <td>
        <div>{listItem.name}</div>
        {listItem.desc && <div>{listItem.desc}</div>}
      </td>
      <td key="1">
        <img src={imgUrl} alt='img'/>
      </td>
    </tr>
  )
}

export default ListItem