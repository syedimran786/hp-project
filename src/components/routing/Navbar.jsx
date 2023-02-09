import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


import { useAuth } from './auth'

function Navbar() {


  // console.log(useAuth())

  let { user, logout } = useAuth();
  let navigate = useNavigate()


  let logoutUser = () => {
    logout();
    navigate("/login1")
  }
  return (
    <nav className='nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="profile">Profile</NavLink>

      {!user &&  <NavLink to="login1">Login1</NavLink>}
      {user &&  <button  onClick={logoutUser}>Logout</button>}

    

      {/* <NavLink to="limage">Lazy Images</NavLink> */}
      {/* <NavLink to="login">Login</NavLink> */}
      <NavLink to="signup">SignUp</NavLink>

    </nav>
  )
}

export default Navbar