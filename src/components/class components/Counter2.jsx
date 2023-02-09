import React, { Component } from 'react'

class Counter2 extends Component 
{

  
   state = 
   {
      count:0
   }

   interval;

  updateCount=()=>
  {
    this.setState({count:this.state.count+1});
    console.log("count Updated");
  }

  componentDidMount()
  {
    this.interval=setInterval(this.updateCount, 2000);
  }

  componentWillUnmount()
  {
    clearInterval(this.interval);
    console.log("Compenet removed from DOM")
  }

  render() 
  {
    return (
      <div>
        {this.state.count}
        <button onClick={this.updateCount}>update</button>
      </div>
    )
  }
}


export default Counter2