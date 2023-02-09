import React, { useState } from 'react'

function UseStateWithObject() {

    let [student,setStudent]=useState({sname:"dinga",age:24})

    let changeStuden=()=>
    {
        student.sname="Raju";
        console.log(student);
        setStudent(student);//! Not updating state
        setStudent({...student})//! updating state
    }

   
  return (
    <div>
        <h1>{student.sname}---  {student.age}</h1>
        <button onClick={changeStuden}>change</button>
        
    </div>
  )
}

export default UseStateWithObject