import React from "react";
import MySidebar from "../components/my/mySidebar/MySidebar.js";
import "../css/MyLayout.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ClientMypage() {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };

  const recruitProject = [
    {
      pj_num: 1,
      pj_name: "프로젝트1",
      pj_content: "온라인몰 리뉴얼 프로젝트 개발자 - React, Java",
      //path: "/pjdetail/:pj_num"
    },
  ];

  const bookmarkFreelancer = [
    //axios.get(/mark_fre_id)
    {
      user_id: "kim",
      re_name: "김멀티",
      re_skill: "Java, Spring, mySQL",
      /*path:"/freedetail/:user_id"*/
    },
    { user_id: "lee", re_name: "이멀티", re_skill: "Java, React, Recoil" },
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
        <h4 className="myh4">모집중인 프로젝트</h4>
        {recruitProject.map((recruitProject) => (
          //<Link to = "/pjdetail:project_id" style={{textDecoration: "none"}}>
          <div className="myproject">
            {recruitProject.pj_name}
            <br />
            {recruitProject.pj_content}
          </div>
          //</Link>
        ))}
        <h4 className="myh4">관심 프리랜서</h4>
        {bookmarkFreelancer.map((bookmarkFreelancer) => (
          //<Link to = "/freedetail/:free_id" style={{textDecoration: "none"}}>
          <div className="myfreelancer">
            {bookmarkFreelancer.re_name}
            <br />
            {bookmarkFreelancer.re_skill}
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
