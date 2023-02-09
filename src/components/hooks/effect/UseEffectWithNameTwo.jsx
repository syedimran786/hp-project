import React, { useEffect, useState } from 'react'

function UseEffectWithNameTwo() {
    let [fname,setFname]=useState("Dinga");

    useEffect(()=>
    {
        console.log("UseEffect Called");
    })

  return (
    <div>
        <h1>Fname: {fname}</h1>
        <button onClick={()=>(setFname("Raju"))}>Raju</button>
        <button onClick={()=>(setFname("Rani"))}>Rani</button>
    </div>
  )
}

export default UseEffectWithNameTwo