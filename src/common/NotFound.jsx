import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <p className='text-2xl'>Page is not found</p>
            <button 
            onClick={() => {
                navigate("/")
            }}
            className='bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:cursor-pointer'>Go back</button>
        </div>
    )
}

export default NotFound