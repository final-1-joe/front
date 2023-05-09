import { useState } from "react";
import "../../css/SupportCenter.css";

import { Link } from "react-router-dom";
import data from "./qdata";
import SupportQuesion from "./SupportQuesion";
import Modal from "./modal";

const SupportCenter = ({ title, info }) => {
  const [questions, setQuestions] = useState(data);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="sc">
      <h1>고객센터</h1>
      <hr></hr>
      <div id="sc_tt">
        <Link to="/support" className="sccolor">
          자주하는 질문
        </Link>
        <Link to="/support/board">문의 내역</Link>
      </div>
      {questions.map((question) => {
        return <SupportQuesion key={question.id} {...question} />;
      })}
      <div className="btns-area sc_an_wr_btn">
        <a className="btn-m02 btn-color01 depth2" onClick={openModal}>
          등록
        </a>
      </div>
      <Modal open={modalOpen} close={closeModal} header="질문등록">
        <form>
          <div className="sc_an sc_vi">
            <div className="sc_bl_wr sc_qu">
              <div className="sc_vi-contents">
                <div className="editer-wrapper">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="질문을 입력하세요."
                    className="w100"
                  />
                </div>
                <div className="editer-wrapper">
                  <textarea
                    id="content"
                    name="content"
                    cols="50"
                    rows="50"
                    placeholder="답변을 입력하세요."
                  ></textarea>
                </div>
                <div className="btns-area sc_qu_btn">
                  <a className="btn-m02 btn-color01">등록</a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default SupportCenter;
