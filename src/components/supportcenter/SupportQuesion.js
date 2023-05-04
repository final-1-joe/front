import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../../css/SupportCenter.css";
import Modal from "./modal";

// title,info 표시하기
const SupportQuesion = ({ id, title, info }) => {
  // info를 클릭시에 볼수있도록 버튼 만들기
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <ul>
        <li className="sc_lis">
          <div className="sc_lis-0" onClick={() => setShowInfo(!showInfo)}>
            <span className="sc_lis-1">Q</span>
            <span className="sc_lis-2">{title}</span>
            <span className="sc_lis-3">
              {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
          </div>
          {showInfo && (
            <div className="sc_an-0">
              <table>
                <tbody>
                  <tr>
                    <td width="70px" valign="top">
                      <div className="sc_an-1">A</div>
                    </td>
                    <td>
                      <span className="sc_an-2">
                        <p>{info}</p>
                      </span>
                      <span className="sc_an-3">
                        <a className="btn_an" name={id} onClick={openModal}>
                          수정
                        </a>{" "}
                        &nbsp;
                        <a className="btn_an" name={id}>
                          삭제
                        </a>
                      </span>
                      <Modal
                        open={modalOpen}
                        close={closeModal}
                        header="질문등록"
                      >
                        <form>
                          <div className="sc_an sc_vi">
                            <div className="sc_bl_wr sc_qu">
                              <div className="sc_vi-contents">
                                <div className="editer-wrapper">
                                  <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    defaultValue={title}
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
                                    defaultValue={info}
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SupportQuesion;
