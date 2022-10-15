import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../lib/init-firebase'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
    const [user,loading,error]=useAuthState(auth)
    console.log(user)
  return (
    <div>
        <h1>
            welcome {user?.email}
        </h1> 
        <button onClick={()=>{auth.signOut(); navigate('/')}}>
            SignOut
        </button>
    </div>
  )
}

export default Home