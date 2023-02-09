import React from 'react'
import Album from './Album.jsx'
import AlbumHeading from './AlbumHeading.jsx'
import {albums} from './myalbums.js'

import './my styles/AllAlbums.css'


function AllAlbums() {

  // console.log(albums)
  console.log("-----------------");
  console.log(albums.sort((a,b)=>(a.id<b.id)?1:(a.id>b.id)?-1:0))
  return (
    <table border="1" style={{margin:"50px"}}>
       <AlbumHeading/>
        <tbody>
            {albums.map((a)=>
            {
                
                return <Album {...a} key={a.id}/>
            })}
        </tbody>
    </table>
  )
}

export default AllAlbums