import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MySidebar from "./mySidebar/MySidebar";
import "../../css/MyLayout.css";
import "../../css/MyInfoStyle.css";
import axios from "axios";

function ClientMyInfo() {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const getNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const getNewPasswordCheck = (e) => {
    setNewPasswordCheck(e.target.value);
  };

  const getNewName = (e) => {
    setName(e.target.value);
  };

  const getNewEmail = (e) => {
    setEmail(e.target.value);
  };

  const getNewPhone = (e) => {
    setPhone(e.target.value);
  };

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
  const phoneRegex = /^[0-9]{10,11}$/;

  useEffect(() => {
    axios
      .get("/auth/userinfo")
      .then((response) => {
        const userData = response.data;
        setId(userData.user_id);
        setName(userData.user_name);
        setEmail(userData.user_email);
        setPhone(userData.user_tel);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put("/auth/updateuser", {
        user_pw: newPassword,
        user_name: getNewName,
        user_email: getNewEmail,
        user_tel: getNewPhone,
      })
      .then(() => {
        alert("회원정보가 변경되었습니다");
        navigate("/free/mypage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mypageLayout">
      <MySidebar />
      <form className="mywrapper">
        <h2 className="mytitle">회원정보수정</h2>
        <div className="myInfoList">
          <div className="mylistGroup">
            <label for="id" className="mylabel">
              아이디
            </label>
            <p className="myidp">{id}</p>
          </div>
          <div className="mylistGroup">
            <label for="newPassword" className="mylabel">
              패스워드
            </label>
            <input
              className="myinfoinput"
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="새 비밀번호"
              value={newPassword}
              onChange={getNewPassword}
              required
            />
          </div>
          <p className="myError">
            {!passwordRegex.test(newPassword)
              ? "숫자+영문자+특수문자로 8~16자 입력해주세요"
              : ""}
          </p>
          <div className="mylistGroup">
            <label for="newPasswordCheck" className="mylabel">
              패스워드 확인
            </label>
            <input
              className="myinfoinput"
              type="password"
              id="newPasswordCheck"
              name="newPasswordCheck"
              placeholder="비밀번호를 한 번 더 입력해주세요"
              value={newPasswordCheck}
              onChange={getNewPasswordCheck}
              required
            />
          </div>
          <p className="myError">
            {newPassword !== newPasswordCheck
              ? "비밀번호가 일치하지 않습니다!"
              : ""}
          </p>
          <div className="mylistGroup">
            <label for="name" className="mylabel">
              상호명
            </label>
            <input
              className="myinfoinput"
              type="text"
              id="name"
              name="name"
              placeholder="상호명"
              defaultValue={name}
              onChange={getNewName}
            />
          </div>
          <p className="myError"></p>
          <div className="mylistGroup">
            <label for="email" className="mylabel">
              이메일
            </label>
            <input
              className="myinfoinput"
              type="email"
              id="email"
              name="email"
              placeholder="이메일을 입력하세요 ex)peoplancer@peoplancer.com"
              defaultValue={email}
              onChange={getNewEmail}
            />
          </div>
          <p className="myError"></p>
          <div className="mylistGroup">
            <label for="phone" className="mylabel">
              전화번호
            </label>
            <input
              className="myinfoinput"
              type="number"
              id="phone"
              name="phone"
              placeholder="-없이 숫자만 입력해주세요"
              defaultValue={phone}
              onChange={getNewPhone}
            />
          </div>
          <p className="myError">
            {!phoneRegex.test(phone) ? "-없이 숫자만 입력해주세요" : ""}
          </p>
        </div>
        <button className="myeditInfo" type="submit" onSubmit={handleSubmit}>
          수정하기
        </button>
      </form>
    </div>
  );
}

export default ClientMyInfo;
