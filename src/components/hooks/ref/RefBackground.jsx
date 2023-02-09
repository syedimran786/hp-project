import React, { useRef } from 'react'

function RefBackground() 
{

    let bgRef=useRef(null);
  

    let chagebgGreen=()=>
    {
        bgRef.current.style.backgroundColor="white"
    }

    let chagebgYellow=()=>
    {
        bgRef.current.style.backgroundColor="yellow"
    }
  return (
    <div>
        <section style={{width:200,height:200,border:"2px solid red"}} ref={bgRef}>
            <button onClick={chagebgGreen}>white</button>
            <button onClick={chagebgYellow}>Yellow</button>
        </section>
        
    </div>
  )
}

export default RefBackground