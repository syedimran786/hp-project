import React from 'react'
import { Link } from 'react-router-dom'
import { mobiles } from './mobiles'
import './Mobiles.scss'

function Mobiles() {

  return (
    <div className='mobiles'>
        {mobiles.map(({mobileId,mobileName,ram,price,dimage})=>
        {
            return (
                <Link to={`${mobileId}`} key={mobileId} className="mobile">
                    <img src={dimage} alt="NO Image" />
                    <h2>{mobileName}</h2>
                    <div className='mobile-details'>
                            <h6>Ram {ram}</h6>
                            <h6>Price{price}</h6>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default Mobiles