import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth'

function Profile() {

  let { user, logout } = useAuth();
  let navigate = useNavigate()


  let logoutUser = () => {
    logout();
    navigate("/login1")
  }
  return (
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default Profile