import React from 'react'

function Title() {

    console.log("Title Rendered");
  return (
    <div>Title</div>
  )
}

export default React.memo(Title) 