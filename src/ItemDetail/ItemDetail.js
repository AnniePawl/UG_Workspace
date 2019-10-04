import React, { Component } from 'react'
import './ItemDetail.scss'
import Navbar from '../Navbar/Navbar'

class ItemDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1> This is the Item Detail Page!</h1>
      </div >
    )
  }
}


export default ItemDetail