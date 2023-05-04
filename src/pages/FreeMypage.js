import React from "react";
import MySidebar from "../components/my/mySidebar/MySidebar.js";
import "../css/MyLayout.css";
import axios from "axios";

function FreeMypage() {
  const ongoingProject = [
    {
      project_id: 1,
      project_name: "프로젝트1",
      project_content: "온라인몰 리뉴얼 프로젝트 개발자 - React, Java",
      //path: "/pjdetail/:project_id", 혹은 :pj_id
    },
  ];

  const bookmarkProject = [
    {
      project_id: 2,
      project_name: "프로젝트2",
      project_content: "[원격] 프론트 개발 - React 모집",
    },
    {
      project_id: 3,
      project_name: "프로젝트3",
      project_content:
        "제조업 고객서비스 앱 운영 및 유지보수 - Git, JavaScript",
    },
    {
      project_id: 4,
      project_name: "프로젝트4",
      project_content: "[상주] 서점 온라인몰 퍼블리싱",
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
            {ongoingProject.project_name}
            <br />
            {ongoingProject.project_content}
          </div>
          //</Link>
        ))}
        <h4 className="myh4">관심 프로젝트</h4>
        {bookmarkProject.map((bookmarkProject) => (
          <div className="myproject">
            {bookmarkProject.project_name}
            <br />
            {bookmarkProject.project_content}
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
