import React from 'react'

function Child({sname,childData}) {

    let myname="raju";
    // console.log(childData);
    childData(myname)

  return (
    <div>
        <h1>{sname}</h1>
    </div>
  )
}

export default Child