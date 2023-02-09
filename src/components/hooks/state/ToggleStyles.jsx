import React, { useState } from 'react'
import "./ToggleStyles.css"

function ToggleStyles() {

    let [style,setStyle]=useState(true)

    let changeStyles=()=>
    {
        setStyle(!style)
    }


  return (
    <div>
        <section className={style?'a':'b'}>
            <h1>{style.toString()}</h1>
        </section>

        <button onClick={changeStyles}>Change Styles</button>
        
    </div>
  )
}

export default ToggleStyles