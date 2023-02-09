import React, { useState } from 'react'
import Input from './Input'
function DisplayFormData() {
    let [userForm,setuserForm]=useState({firstName:"",lastName:"",password:"",confirmPassword:""})
    let [formData,setformData]=useState({})


    let changeFormData = ({target:{value,name}}) => 
    {
        setuserForm({...userForm,[name]:value})
       
    }

    let getFormData = (e) => {
      
        setformData(userForm)
        e.preventDefault()
    }

    return (
        <div>
            <h1>{formData.firstName} {formData.lastName} {formData.password} {formData.confirmPassword}</h1>
            <form onSubmit={getFormData}>
                <Input changeFormData={changeFormData} userForm={userForm} />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}





export default DisplayFormData