import React, { Component } from 'react'

export default class LifecycleMethods extends Component {

    state=
    {
        count:0
    }

    updateCount=()=>
    {
        this.setState({count:this.state.count+1})
    }

    componentDidMount()
    {
        document.title=`Title is ${this.state.count}`
        console.log("componentDidMount")
    }   

    componentDidUpdate()
    {
        document.title=`Title is ${this.state.count}`
        console.log("componentDidUpdate");
    }
  render() {

    console.log("Rendered");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.updateCount}>update</button>
      </div>
    )
  }
}
