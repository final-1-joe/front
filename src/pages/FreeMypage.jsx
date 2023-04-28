import React from "react";
import MySidebar from "../components/my/mySidebar/MySidebar.js";
import {
  MypageLayout,
  Wrapper,
  Project,
  H4,
  WithdrawalButton,
} from "../css/MyLayout.js";

function FreeMypage() {
  return (
    <MypageLayout>
      <MySidebar />
      <Wrapper>
        <H4>진행중인 프로젝트</H4>
        <Project>
          온라인몰 리뉴얼 프로젝트 개발자 - React, Java <br />
          회사1
        </Project>
        <H4>관심 프로젝트</H4>
        <Project>
          [원격] 프론트 개발 - React 모집 <br />
          회사2
        </Project>
        <Project>
          제조업 고객서비스 앱 운영 및 유지보수 - Git, JavaScript <br />
          회사3
        </Project>
        <WithdrawalButton type="submit">탈퇴하기</WithdrawalButton>
      </Wrapper>
    </MypageLayout>
  );
}

export default FreeMypage;
