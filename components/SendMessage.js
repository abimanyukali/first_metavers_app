import { useState } from "react";
import { useMoralis } from "react-moralis";

export const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );
      endOfMessagesRef.current.scrollIntoView({ behaviour: "smooth" });
    setMessage("");
  };
  return (
    <form
      className="flex w-11/12    fixed bottom-10 bg-black opacity-80 px-6 
    max-w-2xl py-4  shadow-xl rounded-full border-4 border-blue-400"
    >
      <input
        className="flex-grow outline-none bg-transparent text-white 
        placeholder-gray-500 pr-5"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}....`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold  text-pink-500 "
      >
        send
      </button>
    </form>
  );
};
