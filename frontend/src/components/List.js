import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
const ListItem = ({listItem}) => {
  // Set right image source url
  const category = useSelector(state => state.search.category)
  console.log(listItem)
  let imgUrl
  if (category === 'mobs') {
    imgUrl = `https://maplestory.io/api/EMS/92/item/${listItem.itemid}/icon?resize=1.5`
  } else {
    imgUrl = `https://maplestory.io/api/EMS/92/mob/${listItem.mobid}/render/stand`
  }
  return (
    <tr>
      <td>
        <div>{listItem.name}</div>
        <div>{listItem.desc}</div>
      </td>
      <td>
        <img src={imgUrl} alt='image' />
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
                <ListItem listItem={listItem} />
              )
            })
          }
        </tbody>
      </Table>

    </div>
  )
}

export default List