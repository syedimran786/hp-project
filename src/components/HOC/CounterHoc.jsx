import React, { useState } from 'react'

function CounterHoc(OriginalCoponent) {

    let NewComponent = () => 
    {
        let [count, setCount] = useState(0);

        let updateCount = () => {
            setCount(count + 1)
        }

        return <OriginalCoponent count={count} updateCount={updateCount}/>
    }
   
    return NewComponent
}
export default CounterHoc