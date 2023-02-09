import React, { Component } from 'react'

export default class MyCounter2 extends Component {

    state=
    {
        count1:0,
        count2:0
    }

    updateCount1=()=>
    {
        this.setState({count1:this.state.count1+1})
    }

    updateCount2=()=>
    {
        this.setState({count2:this.state.count2+1})
    }

    componentDidMount()
    {
        document.title=`Title is ${this.state.count1}`
        console.log("componentDidMount")
    }   

    componentDidUpdate(pp,ps)
    {

        if(ps.count1!==this.state.count1)
      {
        document.title=`Title is ${this.state.count1}`
        console.log(document.title)
      }

      console.log("componentDidUpdate");

    }


  render() {

    console.log("Rendered");
    return (
      <div>
        <h1>Count1: {this.state.count1}</h1>
        <button onClick={this.updateCount1}>update1</button>
        <hr />
        <h1>Count2: {this.state.count2}</h1>
        <button onClick={this.updateCount2}>update2</button>
      </div>
    )
  }
}
