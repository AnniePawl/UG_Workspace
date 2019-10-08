import React from 'react'
import './ItemRow.css'

function ItemRow({ id, value }) {
  return (
    <div className="ItemRow">
      <div className="ItemRow-id ">{id}</div>
      <div>{value}</div>
    </div>
  )
}

export default ItemRow

