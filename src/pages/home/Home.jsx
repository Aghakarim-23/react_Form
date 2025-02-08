import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import UserCard from './components/UserCard'

const Home = () => {
  const [users , setUsers] = useState([])
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getData()
  },[])
 

  return (
            <div className='grid grid-cols-4 gap-2 p-5'>

                {users.map(user => <UserCard user={user} />)}

            </div>
  )
}

export default Home