import { onSnapshot } from 'firebase/firestore'
import React, { useState,useEffect } from 'react'
import { movieCollectionRef } from '../lib/firestore.collections'

const RealtimeMovies = () => {
    const [movies,setMovies]=useState([])

    useEffect(() => {
      const unSubscribe = onSnapshot(movieCollectionRef,snapshot=>{
        setMovies(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
      })
    
      return () => {
        unSubscribe()
      }
    }, [])
    

  return (
    <div>
        <h3>Realtime Movies</h3>
        <ul>
            {
                movies.map(movie=>(
                        <li key={movie.id}>
                            {movie.data.name } : {movie.id}
                        </li>
                ))
            }
        </ul>
    </div>
  )
}

export default RealtimeMovies