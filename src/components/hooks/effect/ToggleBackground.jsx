import React, { useEffect } from 'react'

function ToggleBackground() {



    useEffect(() => {
      
    document.body.style.backgroundColor="green"
      
    return ()=>
    {
        document.body.style.backgroundColor="transparent"
    }
    }, [])
    
  return (
    <div>
        <h1>Toggle Component</h1>
    </div>
  )
}

export default ToggleBackground