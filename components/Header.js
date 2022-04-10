import { useMoralis } from "react-moralis";
import Image from "next/image";
import ChangeUserName from "../components/ChangeUserName"
import Avatar from "./Avatar";
function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 
    text-pink-500">
      <div className=" grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div
          className="relative h-24 w-24 mx-auto 
      hidden lg:inline-grid"
        >
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full z-50"
            src="https://png.pngitem.com/pimgs/s/228-2280873_satan-devil-lucifer-samael-angel-demon-thedevil-devil.png"
            alt="logo"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center" >
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          {/*Wellcome message*/}
          <h1 className="text-3xl ">
            Wellcome to the IMMORTAL_KALI metaverse world{" "}
          </h1>
          
          {/* UserName*/}
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          {/*change usernae Component*/}
          <ChangeUserName/>
        </div>
      </div>
    </div>
  );
}
export default Header;
