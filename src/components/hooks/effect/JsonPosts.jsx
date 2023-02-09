import axios from 'axios';
import React, { useEffect, useState } from 'react'

function JsonPosts() {

    let [post,setpost]=useState({});
    let [newPost,setnewPost]=useState('');
    let [mypost,setmypost]=useState(1);
    let [nopost,setNopost]=useState(false)


//! Api Fetching
    let getPost=async ()=>
    {
        try
        {
            let {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts/${mypost}`);
            console.log("hi");
            console.log(data);
            setpost(data)
        }
        catch(err)
        {
           
            console.log(err);
            setNopost(true)
        }
    }

    //! Inpu field
    let changePost=({target:{value}})=>
    {
        setnewPost(value)
    }


    // ! get post on submit
    let fetchPost=(e)=>
    {
        setmypost(newPost);
        e.preventDefault()
    }

    //! Useeffect
    useEffect(()=>
    {
        getPost()
    },[mypost])

  return (
    <>
    <form onSubmit={fetchPost}>
    <input type="search" onChange={changePost}/>
    <button type='submit'>Search</button>
    </form>
       {nopost?<h1>No Post</h1> :<div style={{width:"300px",border:"2px solid purple",margin:"20px",padding:"20px"}}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h3>{post.id}</h3>
        </div>}
    </>
  )
}

export default JsonPosts