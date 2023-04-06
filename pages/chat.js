import ChatSide from '@/component/chat/ChatSide'
import MemberSide from '@/component/chat/MemberSide'
import React, { useState, useEffect } from 'react';
import style from "./styles/chat.module.scss"
const chat = () => {
  const [menustate, setmenustate] = useState(false)
  return (
    <div className={`${style.chatContainer}  ${menustate == true && style.responsive}`}>
<div className={style.memberSide}>
  <button className={style.menubtn} onClick={()=>{setmenustate(menustate == false ? true : false)}}>{menustate == false ? "close" : "groups"}</button>
  <MemberSide/>
</div>
<div className={style.chatSide}>
  <ChatSide/>
</div>
    </div>
  )

}

export default chat
