import React, { useState } from 'react'
import PureFunctional from './PureFunctional';

function MainFuncPure() {

    let [sname,setSname]=useState("Dinga");

    let updateSname1=()=>
    {
        setSname("Sheela")
    }

    let updateSname2=()=>
    {
        setSname("Leela")
    }


    
  return (
    <div>
        {console.log("MainFuncPure Rendered")}
        <PureFunctional/>
        <hr />
        <h1>NAme: {sname}</h1>
        <button onClick={updateSname1}>sheela</button>
        <button onClick={updateSname2}>leela</button>
    </div>
  )
}

export default MainFuncPure