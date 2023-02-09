import React, { useEffect, useState } from 'react'
import axios from 'axios';

function JsonUsersAysncAxios() {

    let [users,setUsers]=useState([]);

    let fetchJsonusers=async()=>
        {
          let jsonUsers= await axios.get("https://jsonplaceholder.typicode.com/users");
          console.log(jsonUsers)
          console.log(jsonUsers.data);
          setUsers(jsonUsers.data)
        }

    useEffect(()=>
    {
        fetchJsonusers()
    },[])
  return (
    <div>
        <ul>
            {users.map(({name,id})=>
            {
                return <li key={id}>{name}<br/>id:{id}</li>
            })}
        </ul>
    </div>
  )
}

export default JsonUsersAysncAxios