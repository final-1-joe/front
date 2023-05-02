import React from "react";
import MySidebar from "./mySidebar/MySidebar";
import { Wrapper, H4, MypageLayout, Project } from "../../css/MyLayout.js";
import {
  Contact,
  ContactProject,
  ContactButton,
} from "../../css/FreeMyProject.styled";

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
    <MypageLayout>
      <MySidebar />
      <Wrapper>
        <H4>진행중인 프로젝트</H4>
        {ongoingProject.map((ongoingProject) => (
          <Project>
            {ongoingProject.project_name}
            <br />
            {ongoingProject.project_content}
          </Project>
        ))}
        <H4>제안받은 프로젝트</H4>
        {offeredProject.map((offeredProject) => (
          <Contact>
            <ContactProject>
              {offeredProject.project_name}
              <br />
              {offeredProject.project_content?.length > 30
                ? `${offeredProject.project_content.slice(0, 30)}...`
                : offeredProject.project_content}
            </ContactProject>
            <ContactButton>DM</ContactButton>
            <ContactButton type="submit">승낙</ContactButton>
            <ContactButton type="submit">거부</ContactButton>
          </Contact>
        ))}
        <H4>완료된 프로젝트</H4>
        {finishedProject.map((finishedProject) => (
          <Project>
            {finishedProject.project_name}
            <br />
            {finishedProject.project_content}
          </Project>
        ))}
      </Wrapper>
    </MypageLayout>
  );
}

export default MyProject;
