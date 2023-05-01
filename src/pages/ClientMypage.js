import React from "react";
import MySidebar from "../components/my/mySidebar/MySidebar.js";
import {
  MypageLayout,
  Wrapper,
  Project,
  H4,
  WithdrawalButton,
} from "../css/MyLayout.js";
import { Freelancer } from "../css/ClientMypageStyle.js";

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
    <MypageLayout>
      <MySidebar />
      <Wrapper>
        <H4>모집중인 프로젝트</H4>
        {recruitProject.map((recruitProject) => (
          <Project>
            {recruitProject.project_name}
            <br />
            {recruitProject.project_content}
          </Project>
        ))}
        <H4>관심 프리랜서</H4>
        {bookmarkFreelancer.map((bookmarkFreelancer) => (
          <Freelancer>
            {bookmarkFreelancer.free_name}
            <br />
            {bookmarkFreelancer.free_skills}
          </Freelancer>
        ))}
        <WithdrawalButton type="submit">탈퇴하기</WithdrawalButton>
      </Wrapper>
    </MypageLayout>
  );
}

export default ClientMypage;
