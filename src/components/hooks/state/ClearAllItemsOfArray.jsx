import React, { useState } from 'react'

function ClearAllItemsOfArray() {

    let [fruits,setfruits]=useState([]);
    let [fruit,setfruit]=useState("");

    let changeFruit=({target:{value}})=>
    {
        setfruit(value)
    }


    let addFruit=()=>
    {
        setfruits([...fruits,fruit]);
        console.log(fruits)

        setfruit("")
    }

    let clearfruits=()=>
    {
        setfruits([])
    }

  return (
    <div>
        <input type="text" placeholder='Enter Fruit name' onChange={changeFruit} value={fruit}/>
        <button onClick={addFruit}>Add</button>
        <hr />

        <ul>
            {fruits.map((fruit,i)=>
            {
                return <li key={i}>{fruit}</li>
            })}
        </ul>

        <button onClick={clearfruits}>Clear Fruits</button>
    </div>
  )
}

export default ClearAllItemsOfArray