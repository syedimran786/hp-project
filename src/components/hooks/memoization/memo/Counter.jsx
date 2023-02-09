import React, { useMemo, useState } from 'react'

function Counter() {
    let [countOne,setCountOne]=useState(0);
    let [countTwo,setCountTwo]=useState(0);



    let updateCountOne=()=>
    {
        setCountOne(countOne+1)
    }

    let updateCountTwo=()=>
    {
        setCountTwo(countTwo+2)
    }

    let isEven=useMemo(()=>
    {
        let i=0;
        while(i<=2000000000)
        {
            i++;
        }

        return countOne%2==0;
    }, [countOne])

    console.log(isEven);

  return (
    <div>
        <h1>CountOne: {countOne}--- {isEven?"Even":"Odd"}</h1>
        <button onClick={updateCountOne}>Count One</button>

        <hr />

        <h1>CountTwo: {countTwo}</h1>
        <button onClick={updateCountTwo}>Count Two</button>
    </div>
  )
}

export default Counter