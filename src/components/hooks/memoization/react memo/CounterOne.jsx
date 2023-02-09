import React from 'react'

function CounterOne({count1}) {

    console.log("CounterOne Rendered");

  return (
    <div>CounterOne: {count1}</div>
  )
}

export default React.memo(CounterOne)