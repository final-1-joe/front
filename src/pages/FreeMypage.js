import React, { useState, useEffect } from "react";
import MySidebar from "../components/my/mySidebar/MySidebar.js";
import "../css/MyLayout.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function FreeMypage({ handleLogout }) {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };

  const [ongoingProject, setOngoingProject] = useState([]);
  const [bookmarkProject, setBookmarkProject] = useState([]);
  const user = window.sessionStorage.getItem("user_id");

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/freeongoingpj", {
        params: { user_id: user },
      })
      .then((response) => {
        setOngoingProject(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:8080/auth/markpjlist", {
        params: { user_id: user },
      })
      .then((response) => {
        setBookmarkProject(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteMember = (e) => {
    e.preventDefault();
    const confirmResult = window.confirm(
      "정말로 탈퇴하시겠습니까? \n확인을 누르시면 회원정보가 삭제됩니다."
    );

    if (confirmResult) {
      axios
        .post("http://localhost:8080/auth/delete", null, {
          params: {
            user_id: user,
          },
        })
        .then((response) => {
          console.log(response.data);
          alert("회원탈퇴가 완료되었습니다. \n그동안 이용해주셔서 감사합니다.");
          window.sessionStorage.clear();
          handleLogout();
          goMain();
        })
        .catch((error) => {
          console.error(error);
          alert("회원탈퇴가 취소되었습니다");
        });
    }
  };

  return (
    <div className="mypageLayout">
      <MySidebar />
      <div className="mywrapper">
        <h4 className="myh4">진행중인 프로젝트</h4>
        {ongoingProject.map((project) => (
          <Link
            to={`/pjlist/pjdetail/${project.pj_num}`}
            style={{ textDecoration: "none" }}
          >
            <div className="myproject">
              {project.pj_title}
              <br />
              {project.pj_corpname}
            </div>
          </Link>
        ))}
        <h4 className="myh4">관심 프로젝트</h4>
        {bookmarkProject.map((project) => (
          <Link
            to={`/pjlist/pjdetail/${project.pj_num}`}
            style={{ textDecoration: "none" }}
          >
            <div className="myproject">
              {project.pj_title}
              <br />
              {project.pj_corpname}
            </div>
          </Link>
        ))}
        <button
          className="mywithdrawal"
          type="submit"
          onClick={handleDeleteMember}
        >
          탈퇴하기
        </button>
      </div>
    </div>
  );
}

export default FreeMypage;
