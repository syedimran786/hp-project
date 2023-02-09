import React from 'react'
import { useParams } from 'react-router-dom'
import { mobiles } from './mobiles'

function MobileDetails() {

    //! Getting URL Parameter
    let {mobileId}=useParams();


    // ! Mobiles array
    let mobile=mobiles.find((m)=>
    {
        // console.log(m.mobileId)

        return m.mobileId==mobileId
    })

    console.log(mobile);
  
   
  return (
    <div>
        <h1>
           {mobile.mobileName}
        </h1>
        <img src={mobile.dimage} alt="" />
        <h3>Ram: {mobile.ram}</h3>
        <h3>Price: {mobile.price}</h3>

<hr />
        <section>
                {mobile.images.map((i,index)=>
                {
                    return <img style={{height:"100px",width:"100px",margin:"20px"}} key={index} src={i} alt="" />
                })}
        </section>
    </div>
  )
}

export default MobileDetails