import React from 'react'
import { Table } from 'react-bootstrap'
import ListItem from './ListItem'


const List = ({ list }) => {
  if (list.length === 0) {
    return (
      <div>Either this data isn't available, or this item isn't dropped by any mob :(</div>
    )
  }
  return (
    <div>
      <Table striped style={{"margin-bottom":"0"}}>
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