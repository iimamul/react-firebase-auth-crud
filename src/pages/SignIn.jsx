import React, { useState } from 'react'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../lib/init-firebase'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const signIn=()=>{
        signInWithEmailAndPassword(auth,email,password)
            .then(auth => {navigate('/home')})
            .catch(error=>console.error(error))
    }
    const register=()=>{
        createUserWithEmailAndPassword(auth,email,password)
            .then(auth=> {navigate('/home')})
            .catch(error=>console.error(error))
    }
  return (
    <div>
        <h1>Sign in </h1>
        <label>Email</label>
        <input className='email' onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input className='password' onChange={e=>setPassword(e.target.value)}/>
        <button onClick={signIn}>Sign In</button>
        <button onClick={register}>Register</button>
    </div>
  )
}

export default SignIn