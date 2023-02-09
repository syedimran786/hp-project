import React, { useState } from 'react'
import ToggleBackground from './ToggleBackground'

function ToggleBackgroundMain() {

    let [toggle,setToggle]=useState(true);


  return (
    <div>
        {toggle && <ToggleBackground/>}
        <button onClick={()=>(setToggle(!toggle))}>{toggle?"Remove":"Add"}</button>
    </div>
  )
}

export default ToggleBackgroundMain