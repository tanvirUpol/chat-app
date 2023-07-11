import { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import MyBuble from "./MyBuble";
import OtherBuble from "./OtherBuble";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const ref = collection(db, "chat");
  const messagesEndRef = useRef();

  const scrolltoBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrolltoBottom();
  }, [data]);

  useEffect(() => {
    const queryMessages = query(ref, orderBy("createdAt"));
    const unsub = onSnapshot(queryMessages, (snapshot) => {
      let fetchedMessages = [];
      snapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      setData(fetchedMessages);
    });

    return () => unsub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message === "") {
      return;
    }
    const text = message.trim();
    setMessage("");
    await addDoc(ref, {
      text: text,
      displayName: auth.currentUser.displayName,
      uid: auth.currentUser.uid,
      createdAt: serverTimestamp(),
    });
  };

  return (
    <div className="flex-1 sm:p-6 justify-end flex flex-col h-full">
      <div
        id="messages"
        className=" flex flex-col space-y-4 p-3 overflow-y-auto"
      >
        {data.length < 1 && (
          <p className="text-lg text-center">🥺 No Messages</p>
        )}
        {data &&
          data.map((message, index) => (
            <div key={index}>
              {auth.currentUser.uid === message.uid && (
                <MyBuble message={message} />
              )}
              {auth.currentUser.uid !== message.uid && (
                <OtherBuble message={message} />
              )}
            </div>
          ))}

        <div ref={messagesEndRef}></div>
      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Write your message!"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-6 bg-gray-200 rounded-md py-3"
          />
          <button
            type="submit"
            className="flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
          >
            <span className="font-bold hidden sm:block">Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 sm:ml-2 transform rotate-90"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Chat;
