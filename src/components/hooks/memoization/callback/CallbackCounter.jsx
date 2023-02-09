import React from 'react'

function CallbackCounter({count,updateCount}) {
    
    
  return (
    <div>
        {console.log("Callback Counter")}
        <h1>count: {count}</h1>
        <button onClick={updateCount}>updateCount</button>
    </div>
  )
}

export default React.memo(CallbackCounter)