import React, { useState,useEffect } from 'react'
import { collection,getDocs } from 'firebase/firestore'
import { db } from '../lib/init-firebase'

const MovieLists = () => {
    const [movies, setMovies] = useState([])

    const getMovies=()=>{
        const movieCollectionRef=collection(db,'movies')
        getDocs(movieCollectionRef)
            .then(res=>{
                console.log(res.docs)
                const movs= res.docs.map(doc=>({
                    data:doc.data(),
                    id:doc.id
                }))
                setMovies(movs)
            })
            .catch(error=>console.log(error.message))
    }

    useEffect(() => {
      getMovies()
    
    }, [])
    

  return (
    <div>
        <h3>
            Movie Lists
        </h3>
        <button onClick={()=>getMovies()}>Refresh Movies</button>
        <ul>
            {
                movies.map(movie=>(
                    <li key={movie.id}>{movie.data.name}</li>
                ))
            }
        </ul>

    </div>
  )
}

export default MovieLists