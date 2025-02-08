import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className='border-[1px] border-zinc-300 w-full p-5 '>
    <h1 className='text-[24px] font-medium'>{user.name}</h1>
    <p>{user.email}</p>
    <p className='font-light italic'>{user.phone}</p>
  </div>
)
}

export default UserCard