import React from "react";
import MySidebar from "./mySidebar/MySidebar";
import { MypageLayout, Wrapper } from "../../css/MyLayout.js";
import {
  Title,
  MyInfoList,
  ListGroup,
  Label,
  InputId,
  Input,
  EditButton,
} from "../../css/MyInfoStyle";

function FreeMyInfo() {
  return (
    <MypageLayout>
      <MySidebar />
      <Wrapper>
        <Title>회원정보수정</Title>
        <MyInfoList>
          <ListGroup>
            <Label for="id">아이디</Label>
            <InputId>test01</InputId>
          </ListGroup>
          <ListGroup>
            <Label for="password">패스워드</Label>
            <Input type="text" id="newPassword" placeholder="새 비밀번호" />
          </ListGroup>
          <ListGroup>
            <Label for="password">패스워드 확인</Label>
            <Input
              type="text"
              id="newPasswordCheck"
              placeholder="비밀번호 확인"
            />
          </ListGroup>
          <ListGroup>
            <Label for="name">이름</Label>
            <Input type="text" id="name" placeholder="이름" />
          </ListGroup>
          <ListGroup>
            <Label for="email">이메일</Label>
            <Input type="email" id="email" placeholder="이메일" />
          </ListGroup>
          <ListGroup>
            <Label for="phone">전화번호</Label>
            <Input type="phone" id="phone" placeholder="전화번호" />
          </ListGroup>
        </MyInfoList>
        <EditButton type="submit">수정하기</EditButton>
      </Wrapper>
    </MypageLayout>
  );
}

export default FreeMyInfo;
