import React,{useState} from 'react'

function Conter() {

    let [count, setcount] = useState(0);

    let incrementCount=()=>
    {
       setcount(count+1);
    }

    let decrementCount=()=>
    {
       setcount(count-1);
    }

    let resetCount=()=>
    {
       setcount(0);
    }

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
        <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Conter