import React from "react";
import { useNavigate } from "react-router-dom";
import MySidebar from "./mySidebar/MySidebar";
import "../../css/MyLayout.css";
import "../../css/FreeMyProject.css";

function MyProject() {
  const navigate = useNavigate();
  const goDM = () => {
    navigate("/direct/:pj_user_id");
  };
  /*DB구성에 따라서 바로 DM으로 넘길지 
  아니면 해당 프로젝트 상세페이지로 넘어가게 해서 DM으로 연결할지 추후 결정 */

  const ongoingProject = [
    {
      pj_num: 1,
      pj_title: "프로젝트1",
      pj_content: "온라인몰 리뉴얼 프로젝트 개발자 - React, Java",
      //path: "/pjdetail/:pj_num"
    },
  ];

  const offeredProject = [
    //axios.get
    {
      pj_num: 2,
      pj_title: "프로젝트2",
      pj_content: "카페24 관리자에 연동되는 별도의 Admin 페이지 설계 및 개발",
    },
    {
      pj_num: 3,
      pj_title: "프로젝트3",
      pj_content: "공간관리 플랫폼 React 프론트엔드 개발",
    },
  ];

  const finishedProject = [
    {
      pj_num: 5,
      pj_title: "프로젝트4",
      pj_content: "반응형 및 모바일 서브페이지 퍼블리싱",
    },
  ];

  return (
    <div className="mypageLayout">
      <MySidebar />
      <div className="mywrapper">
        <h4 className="myh4">진행중인 프로젝트</h4>
        {ongoingProject.map((ongoingProject) => (
          //<Link to = "/pjdetail:pj_num" style={{textDecoration: "none"}}>
          <div className="myproject">
            {ongoingProject.pj_title}
            <br />
            {ongoingProject.pj_content}
          </div>
          //</Link>
        ))}
        <h4 className="myh4">제안받은 프로젝트</h4>
        {offeredProject.map((offeredProject) => (
          <form className="myoffered">
            <div className="myofferedProject">
              <p>
                {offeredProject.pj_title}
                <br />
                {offeredProject.pj_content?.length > 28
                  ? `${offeredProject.pj_content.slice(0, 28)}...`
                  : offeredProject.pj_content}
              </p>
            </div>
            <button className="myDMButton" type="button" onClick={goDM}>
              DM
            </button>
            <button className="myofferedButton" type="submit">
              승낙
            </button>
            <button className="myofferedButton" type="submit">
              거부
            </button>
          </form>
        ))}
        <h4 className="myh4">완료된 프로젝트</h4>
        {finishedProject.map((finishedProject) => (
          <div className="myproject">
            {finishedProject.pj_title}
            <br />
            {finishedProject.pj_content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
