import React, { useCallback, useState } from 'react'
import CallbackCounter from './CallbackCounter';
import Title from './Title';
import TodoCallback from './TodoCallback';


function TodoCallBackParent() {
    let [hidden, setHidden] = useState(false);
    let [count,setCount]=useState(0);

    let updateCount=useCallback(()=>
    {
        setCount(count+1)
    }, [count])

    let changeHidden=useCallback(
        (val)=>
        {
            setHidden(val);
        },
      [hidden],
    )
    

  return (
    <div>
        {console.log("Todo Callback Parent")}
        <Title/>
        <TodoCallback changeHidden={changeHidden} hidden={hidden}/>
         <CallbackCounter count={count} updateCount={updateCount}/>
    </div>
  )
}

export default TodoCallBackParent