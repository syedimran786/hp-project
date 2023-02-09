import React, { useEffect, useState } from 'react'
import axios from 'axios'

function OmdbMovies() {

    let [movies,setMovies]=useState([]);

    let getMovies=async ()=>
    {
        let oMovies=await axios.get("https://omdbapi.com/?s=batman&apikey=9b9c4ad2");
        // console.log(oMovies.data.Search);
        setMovies(oMovies.data.Search)
    }
    useEffect(()=>
    {
        getMovies()
    },[])
  return (
    <div>
        {movies.map(({Poster,imdbID})=>
        {
            return <img style={{margin:30,boxShadow:"3px 3px 40px 1px white"}} key={imdbID} src={Poster} alt="" />
        })}
    </div>
  )
}

export default OmdbMovies