import React from "react";
import MySidebar from "../components/my/mySidebar/MySidebar.js";
import "../css/MyLayout.css";

function ClientMypage() {
  const recruitProject = [
    {
      project_id: 1,
      project_name: "프로젝트1",
      project_content: "온라인몰 리뉴얼 프로젝트 개발자 - React, Java",
    },
  ];

  const bookmarkFreelancer = [
    { free_id: 1, free_name: "김멀티", free_skills: "Java, Spring, mySQL" },
    { free_id: 2, free_name: "이멀티", free_skills: "Java, React, Recoil" },
  ];

  return (
    <div className="mypageLayout">
      <MySidebar />
      <div className="mywrapper">
        <h4 className="myh4">모집중인 프로젝트</h4>
        {recruitProject.map((recruitProject) => (
          <div className="myproject">
            {recruitProject.project_name}
            <br />
            {recruitProject.project_content}
          </div>
        ))}
        <h4 className="myh4">관심 프리랜서</h4>
        {bookmarkFreelancer.map((bookmarkFreelancer) => (
          <div className="myfreelancer">
            {bookmarkFreelancer.free_name}
            <br />
            {bookmarkFreelancer.free_skills}
          </div>
        ))}
        <button className="mywithdrawal" type="submit">
          탈퇴하기
        </button>
      </div>
    </div>
  );
}

export default ClientMypage;
