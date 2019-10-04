import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'


class InventoryOverview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1> This is the Inventory Overview Page!</h1>
      </div>
    )
  }
}



export default InventoryOverview