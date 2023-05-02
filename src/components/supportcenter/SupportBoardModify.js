/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import "../../css/SupportCenter.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
const SupportBoardModify = () => {
  const titleRef = useRef();
  const navigate = useNavigate();
  const contentRef = useRef();
  const [boarddetail, setBoarddetail] = useState([]);
  const writerRef = useRef();
  const getDetail = () => {
    // console.log("handleUpdate =>", article);
    axios
      .post("/detail", {
        ctg: window.sessionStorage.getItem("ctg"),
        board_num: window.sessionStorage.getItem("board_num"),
      })
      .then((res) => {
        setBoarddetail(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const handleUpdate = () => {
    // console.log("handleUpdate =>", article);
    axios
      .post("/update", {
        ctg: boarddetail.ctg,
        board_num: boarddetail.board_num,
        board_title: titleRef.current.value,
        board_content: contentRef.current.value,
      })
      .then((res) => {
        getDetail();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div id="sc">
      <h1>고객센터</h1>
      <hr></hr>
      <div id="sc_tt">
        <Link to="/support">자주하는 질문</Link>
        <Link to="/support/supportboard" className="sccolor">
          문의 내역
        </Link>
      </div>
      <div>
        <form>
          <input
            type="hidden"
            name="writer"
            id="id"
            ref={writerRef}
            value={window.sessionStorage.getItem("id")}
          />
          <fieldset>
            <div class="sc_bl_wr">
              <div class="one-box">
                <dl>
                  <dt>
                    <label for="title">제목</label>
                  </dt>
                  <dd>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      ref={titleRef}
                      placeholder="제목을 입력하세요."
                      class="w100"
                    />
                  </dd>
                </dl>
              </div>
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
              <div class="one-box">
                <dl>
                  <dt>
                    <label for="content">내용</label>
                  </dt>
                  <dd>
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
                  </dd>
                </dl>
              </div>
            </div>
            <div class="btns-area">
              <a onclick={handleUpdate} class="btn-m02 btn-color01 depth2">
                수정
              </a>
              <a
                onClick={() => navigate(-1)}
                class="btn-m02 btn-color06 depth2"
              >
                취소
              </a>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SupportBoardModify;
