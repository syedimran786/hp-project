
//! Pure
import React, {  PureComponent } from 'react'

export default class PureImpure extends PureComponent {
    

    state=
    {
        sname:"Dinga"
    }
    updateSname1=()=>
    {
        this.setState({sname:"Sheela"})
    }

    updateSname2=()=>
    {
        this.setState({sname:"Leela"})
    }
  render() {

    console.log("Component Rendered");
    return (
      <div>
        <h1>Name: {this.state.sname}</h1>
        <button onClick={this.updateSname1} >Sheela</button>
        <button onClick={this.updateSname2}>Leela</button>

      </div>
    )
  }
}


// ! Impure

/**
 * import React, { Component } from 'react'

  export default class PureImpure extends Component {
    

    state=
    {
        sname:"Dinga"
    }
    updateSname1=()=>
    {
        this.setState({sname:"Sheela"})
    }

    updateSname2=()=>
    {
        this.setState({sname:"Leela"})
    }
  render() {

    console.log("Component Rendered");
    return (
      <div>
        <h1>Name: {this.state.sname}</h1>
        <button onClick={this.updateSname1}>Sheela</button>
        <button onClick={this.updateSname2}>Leela</button>

      </div>
    )
  }
}
 */