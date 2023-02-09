import React, { useState } from 'react'

function PreviousState() {

    let [count,setCount]=useState(0);


    // let updateCount=()=>
    // {
    //     for (let i = 1; i <=5; i++) 
    //     {
            //! Bad Practice of updating state
            // setCount(count+1)

            //! Good Practice of updating state
    //         setCount((PreviousCount)=>
    //         {
    //              return PreviousCount+1
    //         })
    //     }
    // }

    let updateCount=()=>
    {
        
    //    setCount(count+1)
    //    setCount(count+2)
    //    setCount(count+3)

    setCount(pc=>pc+1)
    setCount(pc=>pc+2)
    setCount(pc=>pc+3)
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={updateCount}>update</button>
    </div>
  )
}

export default PreviousState