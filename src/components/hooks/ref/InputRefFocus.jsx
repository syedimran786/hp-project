import React, { useRef, useState } from 'react'

function InputRefFocus() {

let inputRef=useRef(null);

    let focusInput=()=>
    {
    //    console.log(inputRef)
        // console.log(inputRef.current);
        console.log(inputRef.current.value);

        // inputRef.current.focus()
    }

    

  return (
    <div>
        {console.log("rendered")}
        <input type="text"  ref={inputRef} />
        <button onClick={focusInput}>click</button>
    </div>
  )
}

export default InputRefFocus