import React from "react";
import MySidebar from "./mySidebar/MySidebar";
import { Wrapper, H4, MypageLayout, Project } from "../../css/MyLayout.js";
import {
  Contact,
  ContactProject,
  ContactButton,
} from "../../css/FreeMyProject.styled";

function MyProject() {
  return (
    <MypageLayout>
      <MySidebar />
      <Wrapper>
        <H4>진행중인 프로젝트</H4>
        <Project>
          온라인몰 리뉴얼 프로젝트 개발자 - React, Java <br />
          회사1
        </Project>
        <H4>제안받은 프로젝트</H4>
        <Contact>
          <ContactProject>
            카페24 관리자에 연동되는 별도의 Admin 페이지 설계 및 개발
            <br />
            회사5, 상주/원격
          </ContactProject>
          <ContactButton>DM</ContactButton>
          <ContactButton type="submit">승낙</ContactButton>
          <ContactButton type="submit">거부</ContactButton>
        </Contact>
        <H4>완료된 프로젝트</H4>
        <Project>
          반응형 및 모바일 서브페이지 퍼블리싱 <br />
          회사4
        </Project>
      </Wrapper>
    </MypageLayout>
  );
}

export default MyProject;
