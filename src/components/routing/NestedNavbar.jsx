import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NestedNavbar.scss"


function NestedNavbar() {
  return (
    <nav className='nested-nav'>
      <NavLink to="/products/mobiles">Mobiles</NavLink>
      <NavLink to="laptops">Laptops</NavLink>
      <NavLink to="watches">Watches</NavLink>
      <NavLink to="earphones">Earphones</NavLink>
    </nav>

  )
}

export default NestedNavbar