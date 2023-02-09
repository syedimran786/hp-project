import React from 'react'

function StudentButton({btnText,myfunc}) {

    console.log(btnText," Rendered")

  return (
    <div>
        <button onClick={myfunc}>{btnText}</button>
    </div>
  )
}

export default React.memo(StudentButton)