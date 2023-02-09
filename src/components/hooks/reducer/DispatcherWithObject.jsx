
import React, { useReducer } from 'react'


let initalState=
{
    counterOne:0,
    counterTwo:0
}

let reducer=(cstate,action)=>
{
    switch(action.type)
    {
        case 'ico':return   {...cstate,counterOne:cstate.counterOne+action.payload}
        case 'dco':return   {...cstate,counterOne:cstate.counterOne-action.payload}
        case 'ict':return   {...cstate,counterTwo:cstate.counterTwo+action.payload}
        case 'dct':return   {...cstate,counterTwo:cstate.counterTwo-action.payload}
        case 'reset':return   {counterOne:action.payload,counterTwo:action.payload}
        default: return cstate
        
    }
}


function DispatcherWithObject() {

    let [counter,dispatch]=useReducer(reducer, initalState)

    
  return (
    <div>
        <h1>Count1: {counter.counterOne} , Count2: {counter.counterTwo}</h1>
        <button onClick={()=>(dispatch({type:"ico",payload:2}))}>incremetCountOne</button> 
        <button onClick={()=>(dispatch({type:"dco",payload:1}))}>decremetCountOne</button>
        <button onClick={()=>(dispatch({type:"ict",payload:3}))}>incremetCountTwo</button>
        <button onClick={()=>(dispatch({type:"dct",payload:2}))}>decremetCountTwo</button>
        <button onClick={()=>(dispatch({type:"reset",payload:0}))}>Reset</button>
    </div>
  )
}

export default DispatcherWithObject