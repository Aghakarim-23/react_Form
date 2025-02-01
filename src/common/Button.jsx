import React from 'react'

const Button = ({buttonData}) => {
    const {text, action, style} = buttonData   
  return (
    <button onClick={action} className={style}>{text}</button>

)
}

export default Button