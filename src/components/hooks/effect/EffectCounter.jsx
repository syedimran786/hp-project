import React, { useEffect, useState } from 'react'

function EffectCounter() {
    let [count,setCount]=useState(0);


    let updateCounter=()=>
    {
        setCount(count+1);
        console.log("Counter Executed");
    }

    useEffect(()=>
    {
        console.log("Countwer Started");
        let interval=setInterval(updateCounter,1000);
        
        return ()=>
        {
            clearInterval(interval);
            console.log("Counter Stopped")
        }
    })


  return (
    <div>
        <h1>Count: {count}</h1>
    </div>
  )
}

export default EffectCounter