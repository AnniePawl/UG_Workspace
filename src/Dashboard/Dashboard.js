import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'


class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>This is the Dashboard!</h1>
      </div>
    )
  }
}
export default Dashboard