import React from 'react'
import CounterHoc from './CounterHoc'

function Counter1({count,updateCount}) {

   
  return (
    <div>
        <h1>Counter 1: {count}</h1>
        <button onClick={updateCount}>update Count 1</button>
    </div>
  )
}

export default CounterHoc(Counter1)