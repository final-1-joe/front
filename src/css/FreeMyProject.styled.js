import styled from "styled-components";

const Contact = styled.div`
  display: flex;
  position: relative;
  width: 800px;
  height: 70px;
  align-items: center;
  margin: 20px 0px;
`;

const ContactProject = styled.div`
  display: flex;
  position: relative;
  width: 600px;
  height: 50px;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border: 5px solid #ffebb4;
  border-radius: 20px;
  padding: 20px;
  margin-right: 30px;
  margin-button: 20px;
  font-size: 20px;
  text-align: center;
`;

const ContactButton = styled.button`
  width: 80px;
  height: 60px;
  background-color: #ffebb4;
  border: none;
  border-radius: 20px;
  padding: 17.5px;
  align-items: center;
  font-size: 17px;
  display: flex;
  float: right;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    background-color: #ffebb4;
    color: #bf9b30;
    font-weight: bold;
  }
`;

export { Contact, ContactProject, ContactButton };
