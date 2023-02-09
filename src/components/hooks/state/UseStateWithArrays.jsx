import React, { useState } from 'react'

function UseStateWithArrays() {
    let [colors,setColors]=useState([]);
 

    let myColors=['red','pink','orange','yellow','green','purple'];
   
    let addColors=()=>
    {
       if(colors.length<myColors.length)
       {
        setColors([...colors,myColors[colors.length]])
       }
    }

  return (
    <div>
        {colors.map((color,index)=>
        {
            return <li key={index}>{color}</li>
        })}

        <button onClick={addColors}>Add Colors</button>
    </div>
  )
}

export default UseStateWithArrays