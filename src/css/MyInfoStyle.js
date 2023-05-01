import styled from "styled-components";

const Title = styled.h2`
  font-size: 36px;
  text-align: left;
  flex-direction: column;
  display: flex;
  font-style: bold;
  margin-bottom: 40px;
`;

const MyInfoList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  flex-direction: column;
  display: flex;
`;

const ListGroup = styled.li`
  margin-bottom: 10px;
  flex-direction: column;
  display: inline-block;
`;

const Label = styled.label`
  width: 180px;
  margin-right: 10vh;
  font-size: 20px;
  display: inline-block;
`;

const InputId = styled.p`
  font-size: 20px;
  display: inline-block;
  margin-left: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  display: inline-block;
  width: 500px;
  border: none;
  border-bottom: 2px solid #d9d9d9;
  padding: 10px;
  font-size: 20px;
`;

const EditButton = styled.button`
  width: 110px;
  height: 55px;
  font-size: 18px;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 15px;
  background-color: #fbdb6a;
  border-radius: 20px;
  border: none;
  margin-left: 50vh;
  cursor: pointer;
  &:hover {
    background-color: #ffebb4;
    color: #bf9b30;
    font-weight: bold;
  }
`;

export { Title, MyInfoList, ListGroup, Label, InputId, Input, EditButton };
