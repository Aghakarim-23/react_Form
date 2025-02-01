import React from 'react'
import Form from '../../common/Form'

const Login = () => {
  const formInputs = [
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
    },
  ]
  const formButtons = [
    {
      text: "Login",
      style: "bg-blue-600 py-3 rounded-md text-white hover:cursor-pointer mt-3",
      action: () => {console.log("Login button clicked")} 
      
    }
  ]
  return (

    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl mb-4 font-medium'>Login </h1>
      <Form formInputs={formInputs} formButtons={formButtons}/>
    </div>
  )
}

export default Login