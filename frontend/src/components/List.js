import React from 'react'

const List = ({list}) => {
  console.log(list)

  const description = (desc) => {
    return (
      <div style={{'display': 'inline'}}>&nbsp;&nbsp;{desc}</div>
    )
  }

  if (list.length === 0) {
    return (
      <div>Either this data isn't available, or this item isn't dropped by any mob :(</div>
    )
  }
  return (
  <div>
    {
      list.map((listItem) => {
          return (<div>
            <b>{listItem.name}</b>
            {listItem.desc && description(listItem.desc)}
            </div>)
      })
    }
  </div>
  )
}

export default List