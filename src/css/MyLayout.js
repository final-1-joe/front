import styled from "styled-components";

const MypageLayout = styled.div`
  display: flex;
  top: 20vh;
  position: relative;
  overflow: hidden;
  width: 190vh;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  float: right;
  flex-direction: column;
  margin-left: 30vh;
`;

const Project = styled.div`
  width: 800px;
  height: 60px;
  margin-bottom: 20px;
  border: 5px solid #ffebb4;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  float: right;
  font-size: 20px;
  text-align: center;
`;

const H4 = styled.h4`
  text-align: left;
  font-size: 24px;
  flex-direction: column;
  display: flex;
`;

const WithdrawalButton = styled.button`
  box-sizing: border-box;
  text-decoration-style: bold;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 55px;
  display: flex;
  text-align: center;
  font-size: 20px;
  background-color: #fbdb6a;
  border-radius: 20px;
  border: none;
  padding: 13px;
  margin-left: 700px;
  cursor: pointer;
  &:hover {
    background-color: #ffebb4;
    color: #bf9b30;
    font-weight: bold;
  }
`;

export { MypageLayout, Wrapper, Project, H4, WithdrawalButton };
