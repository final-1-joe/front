/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import "../../css/SupportCenter.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import SupportBoardAnswer from "./SupportBoardAnswer";
import SupportBoardAnswerWrite from "./SupportBoardAnswerWrite";
const SupportBoardDetail = () => {
  const location = useLocation();
  const ctg = location.state.ctg;
  const num = location.state.num;
  const navigate = useNavigate();
  const [boarddetail, setBoarddetail] = useState([]);
  const writerRef = useRef();
  const contentRef = useRef();
  const getDetail = () => {
    // console.log("handleUpdate =>", article);
    axios
      .post("/detail", {
        ctg: ctg,
        board_num: num,
      })
      .then((res) => {
        setBoarddetail(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getDetail();
  }, []);

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
      <h1>고객센터</h1>
      <hr></hr>
      <div id="sc_tt">
        <Link to="/support">자주하는 질문</Link>
        <Link to="/support/supportboard" className="sccolor">
          문의 내역
        </Link>
      </div>
      <div className="sc_vi">
        <div className="title-area">
          <h4>문의글 1</h4>
        </div>
        <div className="sc_vi-information">
          <dl>
            <dt>작성자</dt>
            <dd>김성만</dd>
          </dl>
          <dl>
            <dt>등록일</dt>
            <dd>2023-04-25</dd>
          </dl>
        </div>
        <div className="sc_vi-contents">
          <pre>
            글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.
            글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.글내용입니다.
          </pre>
        </div>
      </div>
      <SupportBoardAnswer />
      <SupportBoardAnswerWrite></SupportBoardAnswerWrite>
      <div className="btns-area mt60">
        <Link
          to="/support/supportboard/modify"
          className="btn-m02 btn-color02 depth3"
        >
          수정
        </Link>
        <a
          onClick={handleDelete}
          className="btn-m02 btn-color02 depth3 open-password"
        >
          삭제
        </a>
        <Link to="/support/supportboard" className="btn-m02 btn-color01 depth3">
          목록
        </Link>
      </div>
    </div>
  );
};

export default SupportBoardDetail;
