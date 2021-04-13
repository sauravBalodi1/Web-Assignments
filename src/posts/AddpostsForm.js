import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {nanoid} from "@reduxjs/toolkit"
import { postsAdded } from './postsSlice'
const AddpostsForm = () => {
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
     const dispatch = useDispatch();
     var c=2;
    const save=()=>{
       
        if(title&&content)
        {
            dispatch(
                postsAdded({
                    id:nanoid(),
                    title,
                    content,
                })
            )
           settitle('');
           setcontent('')
        }
    }
    return (
        <div>
            <p>Add posts form</p>
            <p>Post title:</p>
            <input type="text" value={title} onChange={(e)=>settitle(e.target.value)}/><br/>
            <p>Content:</p>
            <input type="text " value={content} onChange={(e)=>setcontent(e.target.value)}/>
            <button type="button" onClick={save}>Savee but</button>
        </div>
    )
}

export default AddpostsForm
