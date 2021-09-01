import React from 'react'
import { Table } from 'react-bootstrap'
import ListItem from './ListItem'


const List = ({ list }) => {
  if (list.length === 0) {
    return (
      <div>This mob doesn't drop anything :(</div>
    )
  }

  list.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

  return (
    <div>
      <Table hover striped style={{"marginBottom":"0"}}>
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