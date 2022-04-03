import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();

  return (
    <Image 
    className="rounded-full bg-white border-red cursor-pointer hover:opacity-75" 
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
    onClick={()=>logoutOnPress && logout()}
    layout="fill"
      alt="img"
    />
  );
}

export default Avatar;
