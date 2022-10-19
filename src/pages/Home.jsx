import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../lib/init-firebase'
import { useNavigate } from 'react-router-dom'
import MovieLists from '../compnents/MovieLists'
import AddMovie from '../compnents/AddMovie'
import EditMovie from '../compnents/EditMovie'
import RealtimeMovies from '../compnents/RealtimeMovies'

const Home = () => {
    const navigate=useNavigate()
    const [user,loading,error]=useAuthState(auth)
    console.log(user)
  return (
    <div>
        <button onClick={()=>{auth.signOut(); navigate('/')}}>
            SignOut
        </button>
        <h1>
            Welcome {user?.email}
        </h1> 
        <AddMovie/>
        <EditMovie/>
        <RealtimeMovies/>
        <MovieLists/>

    </div>
  )
}

export default Home