import React, { useState } from 'react'

export const useLocalStorage = () => {
    const [state,setState]=useState("")

const handleChange=(event)=>{
  const { value } = event.target

  if (value) {
    setState(value)
  }
  else{
    setState("")
    localStorage.removeItem("item")
  }

}

    const setItem=()=>{
      if(state && state!=='no value'){

        localStorage.setItem("item", JSON.stringify(state))
      }
    
    else{
      localStorage.removeItem("item")
    }
      
    }
    const getItem=()=>{

      if (localStorage.getItem("item")){
        const item=localStorage.getItem("item")
        JSON.parse(item)
        setState(item)
      }
      else{
        setState("no value")
      }
      
      
    }

  return {
    state,
    setItem,
    getItem,
    handleChange
  }

}