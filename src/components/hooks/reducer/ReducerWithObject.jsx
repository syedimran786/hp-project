import React, { useReducer } from 'react'


let initalState=
{
    counterOne:0,
    counterTwo:0
}

let reducer=(cstate,action)=>
{
    switch(action)
    {
        case 'ico':return   {...cstate,counterOne:cstate.counterOne+1}
        case 'dco':return   {...cstate,counterOne:cstate.counterOne-1}
        case 'ict':return   {...cstate,counterTwo:cstate.counterTwo+1}
        case 'dct':return   {...cstate,counterTwo:cstate.counterTwo-1}
        case 'reset':return   {counterOne:0,counterTwo:0}
        default: return cstate
        
    }
}


function ReducerWithObject() {

    let [counter,dispatch]=useReducer(reducer, initalState)

    
  return (
    <div>
        <h1>Count1: {counter.counterOne} , Count2: {counter.counterTwo}</h1>
        <button onClick={()=>(dispatch("ico"))}>incremetCountOne</button> 
        <button onClick={()=>(dispatch("dco"))}>decremetCountOne</button>
        <button onClick={()=>(dispatch("ict"))}>incremetCountTwo</button>
        <button onClick={()=>(dispatch("dct"))}>decremetCountTwo</button>
        <button onClick={()=>(dispatch("reset"))}>Reset</button>
    </div>
  )
}

export default ReducerWithObject