import React, { useEffect, useState } from 'react'

function Home() {

    useEffect(()=>
    {
        document.title="Home Page";
        document.body.style.backgroundColor="green"

        return ()=>
        {
            console.log("Home Page Removed")
            document.body.style.backgroundColor="transparent"
        }
    },[])

  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}

export default Home