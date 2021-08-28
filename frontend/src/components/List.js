import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
const ListItem = ({listItem}) => {
  const dispatch = useDispatch()

  // Set right image source url
  const category = useSelector(state => state.search.category)
  let imgUrl = category === 'mobs'
  ? `https://maplestory.io/api/GMS/210.1.1/item/${listItem.id}/icon?resize=1.5`
  : `https://maplestory.io/api/GMS/210.1.1/mob/${listItem.id}/render/stand`
  /*
  if (category === 'mobs') {
    imgUrl = `https://maplestory.io/api/GMS/210.1.1/item/${listItem.id}/icon?resize=1.5`
  } else {
    imgUrl = `https://maplestory.io/api/GMS/210.1.1/mob/${listItem.id}/render/stand`
  }
*/
  const handleClick = (listItem) => {
    console.log(listItem)
  }

  return (
    <tr onClick={() => handleClick(listItem)}>
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


const List = ({ list }) => {
  if (list.length === 0) {
    return (
      <div>Either this data isn't available, or this item isn't dropped by any mob :(</div>
    )
  }
  return (
    <div>
      <Table striped>
        <tbody>
          {
            list.map((listItem) => {
              return (
                <ListItem listItem={listItem} key={listItem.id} />
              )
            })
          }
        </tbody>
      </Table>

    </div>
  )
}

export default List