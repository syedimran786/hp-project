import React, { useEffect, useState } from 'react';


function UsersFetch() {
    let [users,setUsers]=useState([]);

    useEffect(()=>
    {
       fetch("https://api.github.com/users").then((res)=>
       {
        return res.json();
        
       }).then((gitUsers)=>
       {    
            setUsers(gitUsers)
       })
    },[])

    console.log(users)
    
  return (
    <div>
        {users.map((user)=>
        {
            return <h1 key={user.id}>Login:{user.login}<br/>Type:{user.type}</h1>
        })}
    </div>
  )
}

export default UsersFetch