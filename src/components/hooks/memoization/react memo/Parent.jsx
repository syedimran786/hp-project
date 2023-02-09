import React, { useState } from 'react'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'

function Parent() {

    let [parentCounter,setParentCounter]=useState(0);
    let [parentCounterone,setParentCounterone]=useState(0);


    console.log("Parent Rendered");
  return (
    <div>
        <CounterOne count1={parentCounter} />
        <hr />
        <CounterTwo count2={parentCounterone}/>
        <hr />
        <h1>parentCounter: {parentCounter}</h1>
        <button onClick={()=>(setParentCounter(parentCounter+1))}>update Parent</button>

        <h1>parentCounterOne: {parentCounterone}</h1>
        <button onClick={()=>(setParentCounterone(parentCounterone+1))}>update Parent One</button>

        <button onClick={()=>(setParentCounterone(4))}>4</button>

    </div>
  )
}

export default Parent