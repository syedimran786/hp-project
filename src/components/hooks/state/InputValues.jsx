import React, { useState } from 'react'

function InputValues() {

    let [userForm,setuserForm]=useState({firstName:"",lastName:"",password:"",confirmPassword:""})

    let changeFormData = ({target:{value,name}}) => 
    {
        setuserForm({...userForm,[name]:value})
       
    }

    let getFormData = (e) => {
      
        console.log(userForm)
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={getFormData}>
                <input type="text" placeholder='First Name' onChange={changeFormData} value={userForm.firstName} name="firstName" />
                <input type="text" placeholder='Last Name' onChange={changeFormData} value={userForm.lastName} name="lastName" />
                <hr />
                <input type="password" placeholder='Password' onChange={changeFormData} value={userForm.password} name="password"/>
                <input type="password" placeholder='Confirm Password' onChange={changeFormData} value={userForm.confirmPassword} name="confirmPassword" />
                <hr />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default InputValues