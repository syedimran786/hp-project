import axios from 'axios';
import React, { useEffect, useState } from 'react'

function MoviesLoadingAndError() 
{
    let [movies,setMovies]=useState([]);
    let [error,seterror]=useState(false);
    let [loading,setloading]=useState(true);


    let getMovies=async ()=>
    {
        try
        {
            let oMovies=await axios.get("https://omdbapi.com/?s=avengers&apikey=9b9c4ad2")
            console.log(oMovies)

            if(oMovies.status>=200 && oMovies.status<=299)
            {
                setMovies(oMovies.data.Search)
                setloading(false)
            }
            else
            {
                seterror(true);
                setloading(false)
            }
        }
        catch(err)
        {
            setloading(false)
            seterror(true)
        }
    }

    useEffect(()=>
    {
        getMovies()
    },[])

    if(loading)
    {
        return <h1>Loading......</h1>
    }

    if(error)
    {
        return <h1>Error........</h1>
    }

  return (
    <div>
        {movies?.map(({Poster,imdbID})=>
        {
            return <img style={{margin:30,boxShadow:"3px 3px 40px 1px white"}} key={imdbID} src={Poster} alt="" />
        })}
    </div>
  )
}

export default MoviesLoadingAndError