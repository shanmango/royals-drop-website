import React from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'



const Search = () => {
  const style = {
    'background-color': '#234234'
  }

  // Select dataset based on type state
  const data = useSelector((state) => {
    if (state.type === 'mobs') {
      return state.mobs
    } else {
      // TODO: add item support
      return state.items
    }
  })

  let options = []

  if (data) {
    options = data.map(x => {
      let object = {
        id: x.id,
        value: x.name,
        label: x.name
      }
      return object
    })
  }


  const change = (event) => {
    console.log(event)
  }
  return (
    <div>
      <Select style={style} options={options} onChange={change}/>
    </div>
  )
}

export default Search