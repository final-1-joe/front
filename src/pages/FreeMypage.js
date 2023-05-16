import React from "react";
import MySidebar from "../components/my/mySidebar/MySidebar.js";
import "../css/MyLayout.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FreeMypage() {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };

  const ongoingProject = [
    {
      pj_num: 1,
      pj_name: "프로젝트1",
      pj_content: "온라인몰 리뉴얼 프로젝트 개발자 - React, Java",
      //path: "/pjdetail/:pj_num"
    },
  ];

  const bookmarkProject = [
    //axios.get("/mark_pj_pjnum")
    {
      pj_num: 2,
      pj_name: "프로젝트2",
      pj_content: "[원격] 프론트 개발 - React 모집",
    },
    {
      pj_num: 3,
      pj_name: "프로젝트3",
      pj_content: "제조업 고객서비스 앱 운영 및 유지보수 - Git, JavaScript",
    },
    {
      pj_num: 4,
      pj_name: "프로젝트4",
      pj_content: "[상주] 서점 온라인몰 퍼블리싱",
    },
  ];

  const handleDeleteMember = (e) => {
    e.preventDefault();
    const confirmResult = window.confirm(
      "정말로 탈퇴하시겠습니까? \n확인을 누르시면 회원정보가 삭제됩니다."
    );

    if (confirmResult) {
      try {
        const response = axios.delete("/api/user");
        console.log(response.data);
        alert("회원탈퇴가 완료되었습니다. \n그동안 이용해주셔서 감사합니다.");
        goMain();
      } catch (error) {
        console.error(error);
        alert("회원탈퇴가 취소되었습니다");
      }
    }
  };

  return (
    <div className="mypageLayout">
      <MySidebar />
      <div className="mywrapper">
        <h4 className="myh4">진행중인 프로젝트</h4>
        {ongoingProject.map((ongoingProject) => (
          //<Link to = "/pjlist:project_id" style={{textDecoration: "none"}}>
          <div className="myproject">
            {ongoingProject.pj_name}
            <br />
            {ongoingProject.pj_content}
          </div>
          //</Link>
        ))}
        <h4 className="myh4">관심 프로젝트</h4>
        {bookmarkProject.map((bookmarkProject) => (
          <div className="myproject">
            {bookmarkProject.pj_name}
            <br />
            {bookmarkProject.pj_content}
          </div>
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
