import React from 'react'
import './CheckoutItemRow.scss'

function ItemRow({ name, checkout, checkin, notes }) {
  return (
    <div className="item_row">
      <div className="item_row_name ">{name}</div>
      <div className='item_row_checkin'>{checkin}</div>
      <div className='item_row_checkout'>{checkout}</div>
      <div className='item_row_notes'>{notes}</div>
    </div>
  )
}

export default ItemRow

