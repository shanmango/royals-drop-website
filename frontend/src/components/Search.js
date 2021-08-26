import React from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'



const Search = () => {
  const style = {
    'background-color': '#234234'
  }
  const type = useSelector(state => state)
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'strawberry', label: 'Strawberry' },
  ]
  const change = (event) => {
    console.log(event)
  }
  return (
    <div>
      {type}
      <Select style={style} options={options} onChange={change}/>
    </div>
  )
}

export default Search