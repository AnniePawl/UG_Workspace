import React, { Component } from 'react'
import './CheckoutForm.scss'
class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      id: '',
      email: '',
      phoneNumber: '',
      checkoutDuration: '',
      date: '',
      reasonForCheckout: '',

    }
  }

  render() {
    return (
      <div className='checkout_form_container'>
        <h1>Checkout Form</h1>
        <form className='checkout_form'>

          {/* Name Field */}
          <input
            className='input_field'
            type='text'
            value=''
            placeholder='Name' />

          {/* Company ID Field */}
          <input
            className='input_field'
            type='text'
            value=''
            placeholder='Company ID'
          />

          {/* Email Address Field */}
          <input
            className='input_field'
            type='text'
            value=''
            placeholder='Email Address' />

          {/* Phone Number Field  */}
          <input
            className='input_field'
            type='text'
            value=''
            placeholder='Phone Number' />

          {/* Duration of Checkout Field */}
          <input
            className='input_field'
            type='text'
            value=''
            placeholder='Duration of Checkout' />

          {/* Date Field */} {/* TODO - make dropdown calendar */}
          <input
            className='input_field'
            type='type'
            value=''
            placeholder='Date' />

          {/* Reason for Checkout Field */}
          <input
            className='input_field'
            type='text'
            value=''
            placeholder='Reason for Checkout' />

        </form>
      </div>
    )
  }
}


export default CheckoutForm