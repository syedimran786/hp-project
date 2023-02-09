import React, { useState } from 'react'

function Caluclator() {
    let [num, setNum] = useState({ a: "", b: "" })
    let [res, setRes] = useState(0);

    let {a,b}=num;

    let changeInput = ({ target: { value, name } }) => {
        setNum({ ...num, [name]: Number(value) })
    }

    return (
        <div>
            <h1>Result : {res}</h1>
            <input type="text" placeholder='A' name='a' value={a} onChange={changeInput} />
            <input type="text" placeholder='B' name='b' value={b} onChange={changeInput} />
            <hr />

            <button onClick={()=>(setRes(a+b))}>Add</button>
            <button onClick={()=>(setRes(a-b))}>Sub</button>
            <button onClick={()=>(setRes(a*b))}>Mul</button>
            <button onClick={()=>(setRes(a/b))}>Div</button>
            <button onClick={()=>(setRes((a/100)*b))}>Percentage</button>
            <button onClick={()=>(setRes(0))}>Reset Result</button>

        </div>
    )
}

export default Caluclator