import React from 'react'
import CounterHoc from './CounterHoc'

function Counter2({count,updateCount}) {
  return (
    <div>
        <h1>Counter 2: {count}</h1>
        <button onClick={updateCount}>update Count 2</button>


    </div>
  )
}

export default CounterHoc(Counter2)