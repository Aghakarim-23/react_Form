import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'

const Home = () => {
  const [msg, setMsg] = useState("")

  const location = useLocation() 
  const message = location.state?.message


  /* 
    actually i didn't get it what happen here -_-
  */

    /* 
      1. useEffect işləyir setMsg (consola 1 dəfə homedan gələn messageni yazdırır)
      2. setMsg Homedan gələn mesajı  buttona klik edəndən sonra saxlayır
      2. amma sonra nə etməliyəm bu ümumiyyətlə necə baş verir onu anlamadım
    */

  useEffect(() => {
    setMsg(message)
    console.log(message);
  },[msg])


  return (
    <div>{message}</div>
  )
}

export default Home