import React, { useState } from 'react'

function Day() {
    let [day,setDay]=useState("Friday");
    let [toggleDay,settoggleDay]=useState(false);

    let changeToggle=()=>
    {
        if(toggleDay==false)
        {
            setDay("Sunday")
            settoggleDay(true)
        }
        else
        {
            setDay("Friday")
            settoggleDay(false)

        }
    }

  return (
    <div>
        <h1>Day is:{day}</h1>
        <button onClick={changeToggle}>ChangeDay</button>
        

    </div>
  )
}

export default Day