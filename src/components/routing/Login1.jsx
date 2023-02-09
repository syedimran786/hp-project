import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth'

function Login1() {
    let [user,setUser]=useState('')

    let {login}=useAuth();
    let navigate=useNavigate()

    let changeUser=({target:{value}})=>
    {
        setUser(value)
    }

    let submitLogin=(e)=>
    {
        if(!user)
        {
            alert("please fill the form");
            return false
        }
        login(user)
        navigate("/profile")
        e.preventDefault()
    }
    
  return (
    <div>
        <form onSubmit={submitLogin}>
            <input type="text" onChange={changeUser} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login1