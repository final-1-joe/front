import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MySidebar from "./mySidebar/MySidebar";
import "../../css/MyLayout.css";
import "../../css/MyInfoStyle.css";
import axios from "axios";

function FreeMyInfo() {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  // const [newPasswordError, setNewPasswordError] = useState("");
  // const navigate = useNavigate();

  const getNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const getNewPasswordCheck = (e) => {
    setNewPasswordCheck(e.target.value);
  };

  const memberInfo = {
    id: "test01",
    name: "홍길동",
    email: "hong@gmail.com",
    phone: "010-1234-5678", //추후 axios로 정보를 받아온다.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (newPassword !== newPasswordCheck) {
    //   setNewPasswordError("비밀번호가 일치하지 않습니다!");
    // }

    // await axios
    // .put("/api/member", {
    //   password: newPassword,
    //   name: memberInfo.name,
    //   email: memberInfo.email,
    //   phone: memberInfo.phone
    // })
    // .then(() => {
    //   navigate("/free/mypage");
    // })
    // .catch(error => {
    //   console.log(error);
    // })
  };

  return (
    <div className="mypageLayout">
      <MySidebar />
      <form className="mywrapper">
        <h2 className="mytitle">회원정보수정</h2>
        <ul className="myInfoList">
          <li className="mylistGroup">
            <label for="id">아이디</label>
            <p>{memberInfo.id}</p>
          </li>
          <li className="mylistGroup">
            <label for="newPassword">패스워드</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="새 비밀번호"
              value={newPassword || ""}
              onChange={getNewPassword}
              required
            />
          </li>
          <li className="mylistGroup">
            <label for="newPasswordCheck">패스워드 확인</label>
            <input
              type="password"
              id="newPasswordCheck"
              name="newPasswordCheck"
              placeholder="비밀번호 확인"
              value={newPasswordCheck || ""}
              onChange={getNewPasswordCheck}
              required
            />
          </li>
          <p className="myError">
            {newPassword !== newPasswordCheck
              ? "비밀번호와 일치하지 않습니다!"
              : ""}
          </p>
          <li className="mylistGroup">
            <label for="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="이름"
              defaultValue={memberInfo.name}
            />
          </li>
          <li className="mylistGroup">
            <label for="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              defaultValue={memberInfo.email}
            />
          </li>
          <li className="mylistGroup">
            <label for="phone">전화번호</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="연락처"
              defaultValue={memberInfo.phone}
            />
          </li>
        </ul>
        <button className="myeditInfo" type="submit" onSubmit={handleSubmit}>
          수정하기
        </button>
      </form>
    </div>
  );
}

export default FreeMyInfo;
