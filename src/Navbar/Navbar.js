import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import './Navbar.scss'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
        <div className='navbar'>
          {/* Home Logo (back to Dashboard) */}
          <Link className='navbar__home_logo' to='/Dashboard'>
            <img src='home.svg'></img>
          </Link>
          {/* Name of Page */}
          <h2 className='navbar__heading'>Page Name Here</h2>
        </div>
      </div>
    )
  }
}

export default Navbar