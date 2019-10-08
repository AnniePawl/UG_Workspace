import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.scss'


class ItemDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>


        <div className='item_detail_page'>

          <h1> This is the Item Detail Page!</h1>

          {/* Item Detail buttons */}
          <div className='item_detail__buttons'>

            {/* Checkout button */}
            <Link to="/Checkout-Form">
              <button classname='item_detail__button item_detail__buttons_checkout'>Checkout</button>
            </Link>

            {/* Item History button */}

            <button classname='item_detail__button item_detail__buttons_history'>History</button>

            {/* Share button */}
            <button classname='item_detail__button item_detail__buttons_share'>Share</button>

            {/* Edit button */}
            <button classname='item_detail__button item_detail__buttons_edit'>Edit</button>


            {/* Delete button */}
            <button classname='item_detail__button item_detail__buttons_delete'>Delete</button>
          </div>

          {/* Item Detail Section */}
          <div className='item_detail_container'>

          </div>
        </div >
      </div>
    )
  }
}


export default ItemDetail