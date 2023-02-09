import React ,{useContext}from 'react'
import {studentContext,employeeContext,teacherContext} from './Main'


function H() {

    let empdata=useContext(employeeContext)
    let stdData=useContext(studentContext)
    let tdata=useContext(teacherContext)

  return (
    <div>
       <h1>{empdata} is an Employee <br /> {stdData} is a Student <br /> {tdata.tname} is a Teacher</h1>
    </div>
  )
}

export default H