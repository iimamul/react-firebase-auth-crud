import { updateDoc,setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
 import { doc } from 'firebase/firestore'
import { db } from '../lib/init-firebase'

const EditMovie = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name==='' || id==='') {return}

        const docRef=doc(db,'movies',id)

        updateDoc(docRef,{name: name})
            .then(res=>{
                console.log(res)
            })
            .error(err=>{
                console.log(err.message)
            })
        // setDoc(docRef,{age: 12})
        //     .then(res=>{
        //         console.log(res)
        //     })
        //     .error(err=>{
        //         console.log(err.message)
        //     })

    }
  return (
    <div>
        <h4>Edit Movie</h4>
        <form onSubmit={handleSubmit}>
            <label>Movie Id</label>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
            <label>Movie Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button type='submit'>Edit Movie</button>
        </form>
    </div>
  )
}

export default EditMovie