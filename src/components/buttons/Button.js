import React from 'react'
import './Button.css'

function Button({clicked,cls,name}) {
    return (
        <button className={cls} onClick={clicked}>
            {name}
        </button>        
    )
}

export default Button
