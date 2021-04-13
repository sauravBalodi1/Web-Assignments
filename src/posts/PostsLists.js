import React, { useState } from 'react'
import {useSelector} from 'react-redux';
export const PostsList=()=>{
    const posts=useSelector((state)=>state.posts);
    console.log(posts)
   const rendered= posts.map((value)=>(
           <div>
               
               <p>{`My id is :${value.id}`}</p>
               <p>{`My title is:${value.title} `}</p>
               <p>{`My content is:${value.content} `}</p>
           </div>
       ))
   
    return (
        <>
        <p>The rendered posts are</p>
           <p> {rendered}  </p>  
        </>
    )
}