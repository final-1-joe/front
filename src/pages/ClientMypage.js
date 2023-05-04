import React from "react";
import MySidebar from "../components/my/mySidebar/MySidebar.js";
import "../css/MyLayout.css";
import axios from "axios";

function ClientMypage() {
  const recruitProject = [
    {
      project_id: 1,
      project_name: "프로젝트1",
      project_content: "온라인몰 리뉴얼 프로젝트 개발자 - React, Java",
      //path: "/pjdetail/:pj_id"
    },
  ];

  const bookmarkFreelancer = [
    {
      free_id: 1,
      free_name: "김멀티",
      free_skills: "Java, Spring, mySQL",
      /*path:"/freedetail/:free_id"*/
    },
    { free_id: 2, free_name: "이멀티", free_skills: "Java, React, Recoil" },
  ];

  const handleDeleteMember = (e) => {
    e.preventDefault();
    const confirmResult = window.confirm(
      "정말로 탈퇴하시겠습니까?<br/> 확인을 누르시면 회원정보가 삭제됩니다."
    );

    if (confirmResult) {
      try {
        const response = axios.delete("/api/user");
        console.log(response.data);
        alert("회원탈퇴가 완료되었습니다.<br/>그동안 이용해주셔서 감사합니다.");
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
        <h4 className="myh4">모집중인 프로젝트</h4>
        {recruitProject.map((recruitProject) => (
          //<Link to = "/pjdetail:project_id" style={{textDecoration: "none"}}>
          <div className="myproject">
            {recruitProject.project_name}
            <br />
            {recruitProject.project_content}
          </div>
          //</Link>
        ))}
        <h4 className="myh4">관심 프리랜서</h4>
        {bookmarkFreelancer.map((bookmarkFreelancer) => (
          //<Link to = "/freedetail/:free_id" style={{textDecoration: "none"}}>
          <div className="myfreelancer">
            {bookmarkFreelancer.free_name}
            <br />
            {bookmarkFreelancer.free_skills}
          </div>
          //</Link>
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

export default ClientMypage;
