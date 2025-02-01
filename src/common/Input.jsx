import React from 'react'

const Input = ({inputData}) => {
    const {label, name, type, placeholder, style} = inputData
   return (
    <div className='flex flex-col'>
        <label htmlFor={label}>{label}</label>
        <input type={type} name={name} placeholder={placeholder}  className={style} />
    </div>
  )
}

export default Input