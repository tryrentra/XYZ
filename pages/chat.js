import ChatSide from '@/component/chat/ChatSide'
import MemberSide from '@/component/chat/MemberSide'
import React, { useState, useEffect } from 'react';
import style from "./styles/chat.module.scss"
const chat = () => {
  return (
    <div className={style.chatContainer}>
<div className={style.memberSide}>
  <MemberSide/>
</div>
<div className={style.chatSide}>
  <ChatSide/>
</div>
    </div>
  )
}

export default chat