import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        
        <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
            <p className='text-2xl'>{count}</p>
            <button onClick={() => setCount((prevState) => prevState + 1)} className='bg-blue-700 text-white px-4 hover:cursor-pointer'>+</button>
        </div>   
    </>
  )
}

export default Count