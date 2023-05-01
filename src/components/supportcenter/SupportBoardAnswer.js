/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import "../../css/SupportCenter.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
const SupportBoardAnswer = () => {
  const navigate = useNavigate();
  const [boarddetail, setBoarddetail] = useState([]);
  const writerRef = useRef();
  const contentRef = useRef();
  const handleDelete = () => {
    if (
      boarddetail.board_writer === window.sessionStorage.getItem("id") ||
      window.sessionStorage.getItem("id") === "admin"
    ) {
      axios
        .post("/delete", {
          board_num: boarddetail.board_num,
          ctg: boarddetail.ctg,
        })
        .then((res) => {
          navigate("/reviewboard");
        })
        .catch((e) => {
          console.error(e);
        });
    } else alert("삭제 권한이 없습니다!!!");
  };

  return (
    <div id="sc">
      <div className="sc_an sc_vi">
        <div class="title-area">
          <h4>답변</h4>
        </div>
        <div className="sc_vi-contents">
          <pre>답변 123129421412421</pre>
        </div>
        <div className="sc_vi-information">
          <dl className="sc_right">
            <dt>등록일</dt>
            <dd>2023-04-25</dd>
          </dl>
        </div>
      </div>
      <div>
        <form>
          <div className="sc_an sc_vi">
            <div class="title-area">
              <h4>답변 등록</h4>
            </div>
            <input
              type="hidden"
              name="writer"
              id="id"
              ref={writerRef}
              value={window.sessionStorage.getItem("id")}
            />
            <fieldset>
              <div class="sc_bl_wr sc_an_wr">
                <input
                  type="hidden"
                  name="usernm"
                  value={window.sessionStorage.getItem("name")}
                />
                <input
                  type="hidden"
                  name="insertuser"
                  value={window.sessionStorage.getItem("id")}
                />
                <div className="sc_vi-contents">
                  <div class="editer-wrapper">
                    <textarea
                      id="content"
                      ref={contentRef}
                      name="content"
                      cols="50"
                      rows="50"
                      placeholder="내용을 입력하세요."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="btns-area sc_an_wr_btn">
                <a class="btn-m02 btn-color01 depth2">등록</a>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportBoardAnswer;
