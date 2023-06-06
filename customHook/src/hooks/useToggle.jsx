import React, { useState } from 'react'

export const useToggle = () => {
    const [toggle, setToggle] = useState(false)

    const handleOnClick = () => {
        setToggle((prev) => !prev)
    }
    return {
        toggle,
        handleOnClick
    }
}

