import React, { useState } from 'react'
import MyComponent from './MyComponent'

function SimpleEffect() {
    let [toggleComponent,settoggleComponent]=useState(false)

    
  return (
    <div>
        <h1>Simple Effect</h1>
        {toggleComponent && <MyComponent/>}
        <button onClick={()=>(settoggleComponent(!toggleComponent))}>Toggle</button>
    </div>
  )
}

export default SimpleEffect