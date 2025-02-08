import { useNavigate } from "react-router";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/userDetails", {state: {userData: user}});
      }}
      className="border-[1px] border-zinc-300 w-full p-5 hover:cursor-pointer"
    >
      <h1 className="text-[24px] font-medium">{user.name}</h1>
      <p>{user.email}</p>
      <p className="font-light italic">{user.phone}</p>
    </div>
  );
};

export default UserCard;
