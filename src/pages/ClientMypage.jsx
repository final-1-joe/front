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
  return (
    <MypageLayout>
      <MySidebar />
      <Wrapper>
        <H4>모집중인 프로젝트</H4>
        <Project>
          온라인몰 리뉴얼 프로젝트 개발자 - React, Java <br />
          회사1
        </Project>
        <H4>관심 프리랜서</H4>
        <Freelancer>
          김멀티
          <br /> Java, Spring, mySQL
        </Freelancer>
        <Freelancer>
          이멀티
          <br /> Java, React, Recoil
        </Freelancer>
        <WithdrawalButton type="submit">탈퇴하기</WithdrawalButton>
      </Wrapper>
    </MypageLayout>
  );
}

export default ClientMypage;
