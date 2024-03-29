import React, { Component } from 'react'

class Table extends Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      assets: []
    }
  }

  render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <h1>React Dynamic Table</h1>
      </div>
    )
  }
}

export default Table //exporting a component make it reusable and this is the beauty of react