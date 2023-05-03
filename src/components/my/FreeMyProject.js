import React from "react";
import MySidebar from "./mySidebar/MySidebar";
import "../../css/MyLayout.css";
import "../../css/FreeMyProject.css";

function MyProject() {
  const ongoingProject = [
    {
      project_id: 1,
      project_name: "프로젝트1",
      project_content: "온라인몰 리뉴얼 프로젝트 개발자 - React, Java",
    },
  ];

  const offeredProject = [
    {
      project_id: 2,
      project_name: "프로젝트2",
      project_content:
        "카페24 관리자에 연동되는 별도의 Admin 페이지 설계 및 개발",
    },
    {
      project_id: 3,
      project_name: "프로젝트3",
      project_content: "공간관리 플랫폼 React 프론트엔드 개발",
    },
  ];

  const finishedProject = [
    {
      project_id: 5,
      project_name: "프로젝트4",
      project_content: "반응형 및 모바일 서브페이지 퍼블리싱",
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
        <h4 className="myh4">제안받은 프로젝트</h4>
        {offeredProject.map((offeredProject) => (
          <form className="myoffered">
            <div className="myofferedProject">
              <p>
                {offeredProject.project_name}
                <br />
                {offeredProject.project_content?.length > 28
                  ? `${offeredProject.project_content.slice(0, 28)}...`
                  : offeredProject.project_content}
              </p>
            </div>
            <button className="myDMButton" type="button">
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
            {finishedProject.project_name}
            <br />
            {finishedProject.project_content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
