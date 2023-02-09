import React from 'react'
import Child from './Child'

function Parent() {

    let childData=(cdata)=>
    {
        console.log(cdata)
    }
  return (
    <div>
        <Child sname="Dinga" childData={childData}/>
    </div>
  )
}

export default Parent