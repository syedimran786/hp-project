import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth'

function ProtectedProfile({children}) 
{

    let {user}=useAuth();

    if(!user)
    {

        return <Navigate to ="/login1"/>
    }

  return (
    <>
    {children}
    </>
  )
}

export default ProtectedProfile