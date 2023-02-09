import React, { Component } from 'react'

class Counter extends Component 
{

  constructor() {
    super()
  
    this.state = {
      count:0
   }

   this.uc=this.updateCount.bind(this)
  }



  updateCount()
  {
    // this.setState({count:this.state.count+1})
    console.log(this)
  }

  render() 
  {
    console.log(this.uc)
    return (
      <div>
        {this.state.count}
        <button onClick={this.uc}>update</button>
      </div>
    )
  }
}


export default Counter