import React from 'react'
import CounterHoc from './CounterHoc'


export default CounterHoc(function Counter3({count,updateCount}) {
    return (
      <div>
          <h1>Counter 3: {count}</h1>
          <button onClick={updateCount}>update Count 3</button>
      </div>
    )
  })


