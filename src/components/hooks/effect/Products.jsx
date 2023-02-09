import React, { useEffect } from 'react'

function Products() {

    useEffect(()=>
    {
        document.title="Products Page";
        document.body.style.backgroundColor="purple";

        return ()=>
        {

            console.log("Products Page Removed")
            document.body.style.backgroundColor="transparent";
        }
    },[])

  return (
    <div>
        <h1>Products</h1>
    </div>
  )
}

export default Products