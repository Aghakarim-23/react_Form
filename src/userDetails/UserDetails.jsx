import { useLocation } from "react-router"

const UserDetails = () => {
    const location = useLocation()
    const userData = location.state?.userData
    console.log(userData);
  return (
    <div className="w-full h-screen flex justify-center items-center ">
        <div className="border-[1px] p-5">
            <h1 className="font-bold text-2xl">{userData.name}</h1>
            <p>{userData.email}</p>
            <p>{userData.phone}</p>
            <p>{userData.website}</p>
            <p>{userData.username}</p>
        </div>
    </div>
  )
}

export default UserDetails