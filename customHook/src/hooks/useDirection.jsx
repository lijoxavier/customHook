import React, { useRef, useState } from 'react'

export const useDirection = () => {
   const dir=useRef(null)
   const [text,setText]=useState("ltr")
   const handleDirection=()=>{
    
    setText((prev)=>prev==="ltr"?"rtl":"ltr")

    // console.log(text);
    dir.current.dir=text
       console.log(dir.current.dir);
    
   }
  return {
    dir,
    handleDirection,
    text
  }
}

  