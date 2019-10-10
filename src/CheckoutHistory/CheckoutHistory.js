import React, { Component } from 'react'
import ItemRow from './CheckoutItemRow'
import Navbar from '../Navbar/Navbar'


class CheckoutHistory extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>

        <div className='checkout_history_container'>
          <h1> Checkout History </h1>
          <h2>*Laptop 4356*</h2>
          <div className='checkout_history'>
            <ItemRow name='Anna' checkout='10/12/18' checkin='' notes='Needs more RAM' />
            <ItemRow name='Lucia' checkout='11/19/18' checkin='' notes='Warranty running out' />
            <ItemRow name='Ali' checkout='' checkin='' notes='' />
            <ItemRow name='' checkout='' checkin='' notes='' />
            <ItemRow name='' checkout='' checkin='' notes='' />
          </div>
        </div>
      </div>
    )
  }
}



export default CheckoutHistory