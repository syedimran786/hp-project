import React from 'react'

function Student({text,count}) {

    console.log(text," Rendered")

  return (
    <div>
        <h1>{text}: {count}</h1>
    </div>
  )
}

export default React.memo(Student)