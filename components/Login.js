import Image from "next/image";
import { useMoralis } from "react-moralis";

export const Login = () => {
  const {authenticate} =useMoralis();
  return (
    <div className="bg-black  relative  text-white">
      <h1>i am the login screen </h1>

      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center space-y-4 justify-center ">
        <Image className="object-cover rounded-full"
          src="https://png.pngitem.com/pimgs/s/228-2280873_satan-devil-lucifer-samael-angel-demon-thedevil-devil.png"
          height={200}
          width={200} alt="logo"
        />
        <button onClick={authenticate} className="bg-red-700 rounded-lg p-5 animate-pulse">Login to the METAVERSE</button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://wallpaperaccess.com/full/287098.jpg" alt="bg-image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
