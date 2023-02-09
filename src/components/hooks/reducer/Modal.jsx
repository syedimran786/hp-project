import React, { useEffect } from 'react'

function Modal({myclass,closeModal,modalText}) {

    useEffect(()=>
    {
        setTimeout(closeModal,3000)
    },[])

    console.log(modalText.split(" ")[1])

  return (
    
    // <div className={myclass} style={{backgroundColor:modalText.split(" ")[1]==="Added"?"green":"red"}}>
    //     {modalText}
    // </div>

    // <div className={myclass} style={{backgroundColor:modalText.endsWith("Added")?"green":"red"}}>
    //     {modalText}
    // </div>

    <div className={myclass} style={{backgroundColor:modalText.includes("Added")?"green":"red"}}>
        {modalText}
    </div>
  )
}

export default Modal