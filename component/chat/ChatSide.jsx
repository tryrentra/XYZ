import { useEffect, useRef, useState } from 'react'
import style from "./styles/chatside.module.scss"
import SendIcon from '@mui/icons-material/Send';
import FolderIcon from '@mui/icons-material/Folder';

export default function ChatSide() {
  const [messages, setMessages] = useState([])
  function handleSubmit(event) {
    event.preventDefault()
    const message = event.target.elements.message.value
    setMessages([...messages, { text: message }])
    event.target.reset()
  }
  const messagesEndRef = useRef(null)
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }, [])
  return (
    <div className={style.chatSideMain}>
<div className={style.messageContainer}>
  <div className={style.chatList}>
<Chat/>
<Chat/>
<Chat/>
  </div>
  
  <div ref={messagesEndRef} />
</div>

      <div className={style.inputDiv}>
      {/* <form onSubmit={handleSubmit} >
        <textarea
          type="text"
          name="message"
          autoComplete='off'
          placeholder="Type your message here..."
          rows={1}
          column={1}
          />
        <FolderIcon/>
        <SendIcon/>
      </form> */}
     <div className="input-box">
      <input type="text" className="input-box__input" placeholder="Type your message..." />
      <button className="input-box__button" >Send</button>
    </div>
      </div>
    </div>
  )
}

const Chat = ()=>{
  return(
    <div className={style.chatBox}>
          <img src="favicon.ico" alt="" />
      <div>
           <h1>faltu</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi est labore error eum, inventore optio odio voluptatibus vero commodi, assumenda nisi, ipsa molestias quisquam nihil dolores dolore? Nulla, exercitationem.</p>
           <span>23:24</span>
          </div>
    </div>
  )
}