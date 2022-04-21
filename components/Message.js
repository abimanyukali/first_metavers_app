import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
const Message = ({ message }) => {
  const { user } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end dpace-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div
        className={`relative h-10 w-10 ${isUserMessage && "order-last ml-2 "}`}
      >
        <Avatar username={message.get("username")} />
      </div>

      <div
        className={`flex space-x-4 p-3 rounded-lg  ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-400"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      {/*Timeage stamp */}
      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-pink-300 " : "text-blue-300"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
};

export default Message;
