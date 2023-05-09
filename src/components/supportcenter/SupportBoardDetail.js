/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import "../../css/SupportCenter.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import SupportBoardAnswer from "./SupportBoardAnswer";
import SupportBoardAnswerWrite from "./SupportBoardAnswerWrite";
const SupportBoardDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [boarddetail, setBoarddetail] = useState([]);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    // console.log("handleUpdate =>", article);
    axios
      .get(`/support/board/detail?id=${id}`)
      .then((res) => {
        console.log("res", res);
        setBoarddetail(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleDelete = () => {
    axios
      .post(`/support/board/delete?id=${id}`)
      .then((res) => {
        navigate("/support/board/");
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
        <Link to="/support/board" className="sccolor">
          문의 내역
        </Link>
      </div>
      <div className="sc_vi">
        <div className="title-area">
          <h4>{boarddetail.subject}</h4>
        </div>
        <div className="sc_vi-information">
          <dl>
            <dt>작성자</dt>
            <dd>{boarddetail.writer}</dd>
          </dl>
          <dl>
            <dt>등록일</dt>
            <dd>{boarddetail.createDate}</dd>
          </dl>
        </div>
        <div className="sc_vi-contents">
          <pre>{boarddetail.content}</pre>
        </div>
      </div>
      <SupportBoardAnswer />
      <SupportBoardAnswerWrite></SupportBoardAnswerWrite>
      <div className="btns-area mt60">
        <Link
          to={`/support/board/modify`}
          state={id}
          className="btn-m02 btn-color02 depth3"
        >
          수정
        </Link>
        <Link
          onClick={handleDelete}
          className="btn-m02 btn-color02 depth3 open-password"
        >
          삭제
        </Link>
        <Link to="/support/supportboard" className="btn-m02 btn-color01 depth3">
          목록
        </Link>
      </div>
    </div>
  );
};

export default SupportBoardDetail;
