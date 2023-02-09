import React, { useEffect, useState } from 'react'

function SimpleUseeffect() {
let [count1,setCount1]=useState(0)
let [count2,setCount2]=useState(0)
let [count3,setCount3]=useState(0)


//!-----------------------------
// useEffect(()=>
// {
//     console.log("1st UseEffect Called");
//     setCount1(count1+1)
// },[count2])


// useEffect(()=>
// {
//     console.log("2nd UseEffect Called");
//     setCount2(count2+2)
// },[])

//!-----------------------------------------
useEffect(()=>
{
    console.log("1st UseEffect Called");
    setCount1(count1+1)
},[count2])


useEffect(()=>
{
    console.log("2nd UseEffect Called");
    setCount2(count2+2)
},[count1])





  return (
    <div>
        <h1>Count1: {count1} Count2: {count2} Count3: {count3}</h1>
        <button onClick={()=>(setCount1(count1+1))}>count1</button>
        <button onClick={()=>(setCount2(count2+2))}>count2</button>
        <button onClick={()=>(setCount3(count3+3))}>count3</button>

    </div>
  )
}

export default SimpleUseeffect