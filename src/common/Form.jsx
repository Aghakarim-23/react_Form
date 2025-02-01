import React from 'react'
import Input from './Input'
import Button from './Button'


const Form = ({formInputs, formButtons}) => {
  return (
        <form onSubmit={(e) => e.preventDefault()} className='max-w-[350px] w-full flex flex-col gap-3'>

            {formInputs.map(input =>  <Input inputData={input} /> )}

            {formButtons.map(button => <Button buttonData={button}/>)}
           

            
        </form>
  
  )
}

export default Form