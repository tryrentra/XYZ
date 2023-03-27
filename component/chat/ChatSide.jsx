import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import style from "./styles/chatside.module.scss";
import { useRouter } from "next/router"
const socket = io(process.env.NEXT_PUBLIC_SOCKET, {
  rejectUnauthorized: false
}
);
import axios from "axios"
export default function ChatSide() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [id, setID] = useState("");
  let api = process.env.NEXT_PUBLIC_API_URL

  const router = useRouter()
  useEffect(() => {
    axios.get(`${api}api/chats`).then((e) => {
      setMessages([...messages, e.data.chats.flat(Infinity)].flat(Infinity));
    })
  }, []);
  console.log(messages)
  useEffect(() => {
    const id = localStorage.getItem("id")
    !id && router.push("/")
    setID(id)
  }, [])
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  function handleKeyPress(event) {
    if (event.key === "Enter" && text !== "") {
      const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      socket.emit("message", { text, id, timestamp });
      setText("");
    }
  }

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={style.chatSideMain}>
      <div className={style.messageContainer}>
        <div className={style.chatList}>
          {messages.map((message) => (
            <Chat key={message.id} message={message} />
          ))}
        </div>

        <div ref={messagesEndRef} />
      </div>

      <div className={style.inputDiv}>
        <div className="input-box">
          <input
            type="text"
            className="input-box__input"
            placeholder="Type your message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={() => {
            const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
            socket.emit("message", { text, id,timestamp });
            setText("");
          }} className="input-box__button">Send</button>
        </div>
      </div>
    </div>
  );
}

const Chat = ({ message }) => {
  const { name, text, timestamp } = message;
  console.log(timestamp)
  return (
    <div className={style.chatBox}>
      <div>
        <h1>{name}</h1>
        <p>{text}</p>
        <span>{timestamp}</span>
      </div>
    </div>
  );
};
