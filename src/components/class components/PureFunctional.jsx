import React, { useState } from 'react'

function PureFunctional() {
 
  return (
    <div>
        {  console.log("PureFunctional Rendered")}
    <h1>PureFunctional</h1>
    </div>
  )
}

export default React.memo(PureFunctional)