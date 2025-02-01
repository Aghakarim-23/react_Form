import React from 'react'
import Form from '../../common/Form'

const Register = () => {

  const formInputs = [
    {
      name: "firstname",
      label: "Firstname",
      placeholder: "Enter your firstname",
      type: "text",
      style: "border-[1px] border-zinc-300 pl-2 py-3 mt-1 rounded-md"
    },
    {
      name: "lastname",
      label: "Lastname",
      placeholder: "Enter your lastname",
      type: "text",
      style: "border-[1px] border-zinc-300 pl-2 py-3 mt-1 rounded-md"
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
      style: "border-[1px] border-zinc-300 pl-2 py-3 mt-1 rounded-md"
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
      style: "border-[1px] border-zinc-300 pl-2 py-3 mt-1 rounded-md"
    }
  ]
  const formButtons = [
    {
      text: "Register",
      action: () => {console.log("Register button clicked")} ,
      style: "bg-blue-600 py-3 rounded-md bg-red-600 text-white hover:cursor-pointer mt-3"
      
    }
  ]

  return (

    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl mb-4 font-medium'>Register </h1>
      <Form formInputs={formInputs} formButtons={formButtons}/>
    </div>
  )
}

export default Register