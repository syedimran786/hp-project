import React, { useReducer } from 'react'


let initalCount=0

let reducer=(cstate,action)=>
{
   
//    if(action==="increment")
//    {
//     return cstate+1
//    }
//    else if(action==="decrement")
//    {
//     return cstate-1
//    }
//    else if(action==="reset")
//    {
//     return 0
//    }
// return cstate


switch(action)
{
    case 'increment':return cstate+1;
    case 'decrement':return cstate-1;
    case 'reset':return 0
    default: return cstate
}

   
}


function BasicReducer() {


    const [count, dispatch] = useReducer(reducer, initalCount);

    let incrementCount=()=>
    {
        dispatch("increment")
    }

    let decrementCount=()=>
    {
        dispatch("decrement")
    }

    let resetCount=()=>
    {
        dispatch("reset")
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
        <button onClick={resetCount}>reset</button>

    </div>
  )
}

export default BasicReducer