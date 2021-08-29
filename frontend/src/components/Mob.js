import React from 'react'
import { useSelector } from 'react-redux'
import List from './List'
const Mob = () => {
  const data = useSelector(state => state.search.selected)
  const category = useSelector(state => state.search.category)
  let imgUrl = category === 'mobs'
    ? `https://maplestory.io/api/GMS/210.1.1/item/${data.id}/icon?resize=1.5`
    : `https://maplestory.io/api/GMS/210.1.1/mob/${data.id}/render/stand`

  return (
    <div >
      <div style={{ display: 'flex' }}>
        <div style={{flex:1}}>
          <h4>{data.name}</h4>
          <h5>Drops:</h5>
        </div>
        <div>
          <img style={{"max-height":"200px"}} src={imgUrl} alt='img' />

        </div>

      </div>
      <List list={data.drops} />
    </div>
  )
}

export default Mob