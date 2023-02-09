import React, { useEffect, useState } from 'react'

function JsonUsersFetch() {

    let [users,setUsers]=useState([]);

    useEffect(()=>
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(jsonUsers=>
        {
            setUsers(jsonUsers)
        })
        .catch(err=>
            {
                console.log(err)
            })
    },[])
  return (
    <div>
        <ul>
            {users.map(({name,id})=>
            {
                return <li key={id}>{name}</li>
            })}
        </ul>
    </div>
  )
}

export default JsonUsersFetch