import React, { useEffect, useState } from 'react'

function JsonUsersAysnc() {

    let [users,setUsers]=useState([]);

    useEffect(()=>
    {
        let fetchJsonusers=async()=>
        {
            try
            {
                let jsonUsers=await fetch("https://jsonplaceholder.typicode.com/users")
                
                jsonUsers=await jsonUsers.json()

               setUsers(jsonUsers)
            }
            catch(err)
            {
                console.log(err);
            }
        }
        fetchJsonusers()
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

export default JsonUsersAysnc