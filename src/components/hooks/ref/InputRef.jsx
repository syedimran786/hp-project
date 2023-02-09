import React, { useEffect, useRef, useState } from 'react'

function InputRef() {

    let [inputValue,setinputValue]=useState('');
    // let [count,setCount]=useState(0);
    let counter=useRef(0)

console.log(counter);

    let changeInput=({target})=>
    {
        setinputValue(target.value);

    }

    useEffect(()=>
    {
        // setCount(count+1)
        counter.current=counter.current+1
    })

  return (
    <div>
       <h1>Count: {counter.current}</h1>
        <input type="text" onChange={changeInput}/>
    </div>
  )
}

export default InputRef