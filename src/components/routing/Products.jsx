import React from 'react'
import { Outlet } from 'react-router-dom'
import NestedNavbar from './NestedNavbar'

function Products() {
  return (
    <>
    <NestedNavbar/>

       <Outlet/>
    </>
  )
}

export default Products