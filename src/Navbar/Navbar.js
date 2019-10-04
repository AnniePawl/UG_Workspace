import React, { Component } from 'react'
import './Navbar.scss'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
        <div className='navbar'>

          {/* Home Logo / Link to Home */}
          <div className='home_logo'>Home Logo</div>

          {/* Name of Page */}
          <p className='page_name'>Page Name Here</p>
        </div>
      </div>
    )
  }
}

export default Navbar