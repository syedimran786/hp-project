import React, { useContext, useState } from 'react'

let AuthContext=React.createContext(null);


function AuthProvider({children}) {
    let [user,setUser]=useState("");

    let login=(data)=>
    {
        setUser(data)
    }

    let logout=()=>
    {
        setUser(null)
    }


  return (
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;


export let useAuth=()=>
{
    return useContext(AuthContext)
}