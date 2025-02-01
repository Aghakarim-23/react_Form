import React from 'react'

const Input = ({inputData}) => {
    const {label, name, type, placeholder, style, setFormData} = inputData
   return (
    <div className='flex flex-col'>
        <label htmlFor={label}>{label}</label>
        <input
        onChange={(e) => setFormData(prevState => ({...prevState, [name]: e.target.value}))}
        type={type} name={name} placeholder={placeholder}  className={style} />
    </div>
  )
}

export default Input