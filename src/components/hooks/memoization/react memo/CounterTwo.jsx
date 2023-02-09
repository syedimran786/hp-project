import React,{memo} from 'react'

function CounterTwo({count2}) {

    console.log("CounterTwo Rendered");

  return (
    <div>CounterTwo: {count2}</div>
  )
}

export default memo(CounterTwo)