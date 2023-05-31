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
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();

  const user = window.sessionStorage.getItem("user_id");

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

  const getNewLicense = (e) => {
    const uploadFiles = Array.prototype.slice.call(e.target.files);
    console.log("uploadFiles =>", uploadFiles);
    setFileList(uploadFiles);
  };

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
  const phoneRegex = /^[0-9]{10,11}$/;

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/userinfo", { params: { user_id: user } })
      .then((response) => {
        const userData = response.data;
        setId(userData.user_id);
        setName(userData.user_name);
        setPhone(userData.user_tel);
        setEmail(userData.user_email);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("uploadfiles", file);
    });

    if (fileList.length === 0) {
      axios
        .post("http://localhost:8080/auth/updateuser", {
          user_id: user,
          user_pw: newPassword,
          user_name: name,
          user_email: email,
          user_tel: phone,
          user_orlicense: null,
          user_stlicense: null,
        })
        .then((res) => {
          alert("회원정보가 변경되었습니다");
          navigate("/client/mypage");
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      const formData = new FormData();
      fileList.forEach((file) => {
        formData.append("uploadfiles", file);
      });

      axios
        .post("http://localhost:8080/auth/upload", formData)
        .then((res) => {
          const originfilename = res.data[0].originfilename || null;
          const storedfilename = res.data[0].storedfilename || null;

          axios
            .post("http://localhost:8080/auth/updateuser", {
              user_id: user,
              user_pw: newPassword,
              user_name: name,
              user_email: email,
              user_tel: phone,
              user_orlicense: originfilename,
              user_stlicense: storedfilename,
            })
            .then((res) => {
              console.log(res);
              alert("회원정보가 변경되었습니다");
              navigate("/client/mypage");
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="mypageLayout">
      <MySidebar />
      <form className="mywrapper" onSubmit={handleSubmit}>
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
              value={name}
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
              value={email}
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
              value={phone}
              onChange={getNewPhone}
            />
          </div>
          <p className="myError">
            {!phoneRegex.test(phone) ? "-없이 숫자만 입력해주세요" : ""}
          </p>
          <div className="mylistGroup">
            <label for="license" className="mylabel">
              사업자등록증
            </label>
            <input
              className="myfileinput"
              type="file"
              id="license"
              name="license"
              accept="image/*, .pdf"
              multiple
              onChange={getNewLicense}
            />
          </div>
        </div>
        <button className="myeditInfo" type="submit" onSubmit={handleSubmit}>
          수정하기
        </button>
      </form>
    </div>
  );
}

export default ClientMyInfo;
