import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import "../../my styles/GitUserApi.scss"

let initialGitApi=
{
    users:[],
    loading:true,
    error:false
}

let gitApiReducer=(currentGitApi,action)=>
{
    switch(action.type)
    {
        case 'success': return {...currentGitApi,users:action.payload,loading:false}
        case 'error': return {...currentGitApi,loading:false,error:true}
        default: return currentGitApi
    }
}

function GitUserApi() {

    let [gitApi,gitApiDispatch]=useReducer(gitApiReducer, initialGitApi);

    let getGitUsers=async ()=>
    {
       try
       {
        let {data,status}=await axios.get("https://api.github.com/users");
        

        if(status>=200 && status<=299)
        {
            gitApiDispatch({type:"success",payload:data});
        }
        // else
        // {
        //     gitApiDispatch({type:"error"});
        // }
       }
       catch(err)
       {
        gitApiDispatch({type:"error"});
       }
    }


    useEffect(()=>
    {
        getGitUsers()
    },[]);


    if(gitApi.loading)
    {
        return <div className="loader">Loading...</div>
    }

    if(gitApi.error)
    {
        return <h1 style={{color:"red"}}>Oooops Error!!!!!</h1>
    }


  return (
    <div>
        {gitApi.users.map(({id,avatar_url})=>
        {
            return <img style={{width:200,margin:20}} key={id} src={avatar_url} alt="" />
        })}
    </div>
  )
}

export default GitUserApi