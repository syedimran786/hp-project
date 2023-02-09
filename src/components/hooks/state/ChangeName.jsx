import React, { useState } from 'react'

function ChangeName() {
    let [name,setname]=useState('Raju');

    let changeNameJhon=()=>
    {
        setname("Jhon")
    }

    let changeNameMiller=()=>
    {
        setname("Miller")
    }
  return (
    <div>
        <h1>My Name is {name}</h1>
        <button onClick={changeNameJhon}>Jhon</button>
        <button onClick={changeNameMiller}>Miller</button>
    </div>
  )
}

export default ChangeName