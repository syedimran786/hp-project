import React, { useState } from 'react'
import EffectCounter from './EffectCounter'
import Home from './Home'
import Products from './Products'

function Main() {
    let [toggle,setToggle]=useState(true)

  return (
    <div>
        {/* {toggle?<Home/>:<Products/>}
        <button onClick={()=>(setToggle(!toggle))}>{toggle?"Products":"Home"}</button> */}
        
          {toggle && <EffectCounter/>}
        <button onClick={()=>(setToggle(!toggle))}>{toggle?"Remove":"Add"}</button>
    </div>
  )
}

export default Main