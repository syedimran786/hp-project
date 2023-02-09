import React from 'react'
import { lazyimages } from './lazyimages'

function LazyLoading() {
  return (
    <div>
        {lazyimages.map((image,index)=>
        {
            return <img style={{height:"100px",width:"10em",margin:"10px"}} src={image} key={index} alt="" />
        })}
    </div>
  )
}

export default LazyLoading