import React, { useEffect, useState } from 'react'
import axios from 'axios'

function SearchMovie() {
    let [searchMovie,setsearchMovie]=useState('')
    let [movieName,setmovieName]=useState('')
    let [found,setfound]=useState(false)

    let [movies,setmovies]=useState([]);

    let getMovies=async ()=>
    {
        let {data:{Search}}=await axios.get(`https://omdbapi.com/?s=${movieName}&apikey=9b9c4ad2`);
        setmovies(Search);  
    }

    // if(movies===undefined)
    // {
    //     return <h1>No Movie Found</h1>
    // }

    let changeMovie=({target:{value}})=>
    {
        if(!searchMovie)
        {
            setmovies([])
        }
        setsearchMovie(value)
    }

    let getMovie=()=>
    {
        setmovieName(searchMovie)  
        
    }
  
    useEffect(()=>
    {
        getMovies()
    },[movieName])


  return (
    <div>
        <input type="search" onChange={changeMovie} value={searchMovie} />

        <button onClick={getMovie}>Search</button>
        <hr />

        {(movies===undefined && searchMovie!=="") && <h1>No Movie Found</h1>}
        {/* {(!movies && searchMovie) && <h1>No Movie Found</h1>} */}

        {movies?.map(({Poster,imdbID})=>
        {
            return <img style={{margin:30,boxShadow:"3px 3px 40px 1px white"}} key={imdbID} src={Poster} alt="" />
        })}
    </div>
  )
}

export default SearchMovie