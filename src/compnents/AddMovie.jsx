import React, { useState } from 'react'
import { collection,addDoc } from 'firebase/firestore'
import { db } from '../lib/init-firebase'
import { movieCollectionRef } from '../lib/firestore.collections'

const AddMovie = () => {
    const [name, setName] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name=='') {return}

        // const moviesCollectionRef=collection(db,'movies')
        addDoc(movieCollectionRef,{name: name})
            .then(res=>{
                console.log(res.id)
            })
            .error(err=>{
                console.log(err.message)
            })

    }
  return (
    <div>
        <h4>Add Movie</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button type='submit'>Add Movie</button>
        </form>
    </div>
  )
}

export default AddMovie