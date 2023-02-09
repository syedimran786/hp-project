import React, { useEffect, useRef, useState } from 'react'

function PreviousUseRef() {

    let [inputValue,setInputValue]=useState("");
    let previousInputValue=useRef(null);

    let changeInput=({target:{value}})=>
    {
        setInputValue(value);
    }

    useEffect(()=>
    {
        previousInputValue.current=inputValue;
        console.log("UseEffcet")
    },[inputValue])

  return (
    <div>
        {console.log("Render")}
        <input type="text" onChange={changeInput}/>
        <h1>inputValue: {inputValue}</h1>
        <h1>previousInputValue: {previousInputValue.current}</h1>
    </div>
  )
}

export default PreviousUseRef