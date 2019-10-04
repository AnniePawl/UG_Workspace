import React, { Component } from 'react'
import './CheckoutForm.scss'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      id: '',
      email: ''
    }
  }

  render() {
    return (
      <div className='CheckoutForm'>
        <h1>Checkout Form</h1>
        <form>
          {/* Name Field */}
          <label>
            Name:
          <input
              type='text',
            value='' />
          </label>
          {/* Company ID Field */}
          {/* Email Address Field */}
          {/* Phone Number Field  */}
          {/* Duration of Checkout Field */}
          {/* Date Field */}
          {/* TODO - make dropdown calendar */}
          {/* Reason for Checkout Field */}


        </form>
      </div>
    )
  }
}


export default CheckoutForm