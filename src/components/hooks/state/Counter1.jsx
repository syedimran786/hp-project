import React,{useState} from 'react'

function Conter1() {

    let [count, setcount] = useState(0);

  

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=>(setcount(count+1))}>+</button>
        <button onClick={()=>(setcount(count-1))}>-</button>
        <button onClick={()=>(setcount(0))}>Reset</button>

        

    </div>
  )
}

export default Conter1