import React, { useCallback, useState } from 'react'
import Student from './Student'
import StudentButton from './StudentButton'
import Title from './Title'

function Parent() {

    let [age,setAge]=useState(23);
    let [marks,setmarks]=useState(420);

    let updateAge=useCallback(()=>
    {
        setAge(age+1)
    },[age] )

    let updateMarks=useCallback(
        ()=>
    {
        setmarks(marks+1)
    },[marks])

    console.log("Parent Rendered")
  return (
    <div>

        <Title/>

        <hr />

        <Student text="Age" count={age}/>
        <StudentButton btnText="Update Age" myfunc={updateAge} />
        
    <hr />

        <Student text="marks" count={marks}/>
        <StudentButton btnText="Update Marks" myfunc={updateMarks}/>
    </div>
  )
}

export default Parent