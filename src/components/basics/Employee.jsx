import React from 'react'

function Employee(props) {

  console.log(props)
  return (
    <div>
      <h1>{props.ename}</h1>
      <h6>{props.children}</h6>
    </div>
  )
}

export default Employee