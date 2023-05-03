import React from "react";
import MySidebar from "../components/my/mySidebar/MySidebar.js";
import "../css/MyLayout.css";

function FreeMypage() {
  const ongoingProject = [
    {
      project_id: 1,
      project_name: "프로젝트1",
      project_content: "온라인몰 리뉴얼 프로젝트 개발자 - React, Java",
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

  return (
    <div className="mypageLayout">
      <MySidebar />
      <div className="mywrapper">
        <h4 className="myh4">진행중인 프로젝트</h4>
        {ongoingProject.map((ongoingProject) => (
          <div className="myproject">
            {ongoingProject.project_name}
            <br />
            {ongoingProject.project_content}
          </div>
        ))}
        <h4 className="myh4">관심 프로젝트</h4>
        {bookmarkProject.map((bookmarkProject) => (
          <div className="myproject">
            {bookmarkProject.project_name}
            <br />
            {bookmarkProject.project_content}
          </div>
        ))}
        <button className="mywithdrawal" type="submit">
          탈퇴하기
        </button>
      </div>
    </div>
  );
}

export default FreeMypage;
