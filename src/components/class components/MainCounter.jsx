import React, { Component } from 'react'
import Counter2 from './Counter2'

export default class MainCounter extends Component {

    state=
    {
        toggle:true
    }
  render() {
    return (
      <div>
        {this.state.toggle && <Counter2/>}
        <button onClick={()=>(this.setState({toggle:!this.state.toggle}))}>Toggle Counter</button>
      </div>
    )
  }
}
