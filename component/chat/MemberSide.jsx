import React from "react";
import style from "./styles/memberSide.module.scss";

const MemberSide = () => {
  return (
    <div className={style.memberSideMain}>
      <header className={style.header}>
        <h1>ChatTo</h1>
      </header>

      <div className={style.memberListContainer}>
        <Member />
        {/* <Member /> */}
      </div>
    </div>
  );
};

export default MemberSide;

const Member = () => {
  return (
    <div className="member-card">
      <div className="member-card__avatar">
        <img src="/favicon.ico" alt="Avatar" />
      </div>
      <div className="member-card__info">
        <div className="member-card__info__name">Jicro</div>
        <div className="member-card__info__status">12 member</div>
      </div>
    </div>
  );
};
