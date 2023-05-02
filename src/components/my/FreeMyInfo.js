import React from "react";
import MySidebar from "./mySidebar/MySidebar";
import "../../css/MyLayout.css";
import "../../css/MyInfoStyle.css";

function FreeMyInfo() {
  return (
    <div className="mypageLayout">
      <MySidebar />
      <div className="wrapper">
        <h2 className="title">회원정보수정</h2>
        <ul className="myInfoList">
          <li className="listGroup">
            <label for="id">아이디</label>
            <p>test01</p>
          </li>
          <li className="listGroup" tGroup>
            <label for="password">패스워드</label>
            <input type="text" id="newPassword" placeholder="새 비밀번호" />
          </li>
          <li className="listGroup">
            <label for="password">패스워드 확인</label>
            <input
              type="text"
              id="newPasswordCheck"
              placeholder="비밀번호 확인"
            />
          </li>
          <li className="listGroup">
            <label for="name">이름</label>
            <input type="text" id="name" placeholder="이름" />
          </li>
          <li className="listGroup">
            <label for="email">이메일</label>
            <input type="email" id="email" placeholder="이메일" />
          </li>
          <li className="listGroup">
            <label for="phone">전화번호</label>
            <input type="phone" id="phone" placeholder="전화번호" />
          </li>
        </ul>
        <button className="editInfo" type="submit">
          수정하기
        </button>
      </div>
    </div>
  );
}

export default FreeMyInfo;
