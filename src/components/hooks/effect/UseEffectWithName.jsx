import React, { useEffect, useState } from 'react'

function UseEffectWithName() {
let [count,setCount]=useState(0);
let [name,setName]=useState("Dinga");


useEffect(() => 
{
    console.log("First useEffect")
    setCount(count+1)
}, [name])

useEffect(() => 
{
    console.log("Second useEffect")
    setName("sheela")
}, [count])

  return (
    <div>
        <h1>Count: {count}</h1>
        <h1>Name: {name}</h1>
    </div>
  )
}

export default UseEffectWithName