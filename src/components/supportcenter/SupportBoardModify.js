/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import "../../css/SupportCenter.css";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
const SupportBoardModify = () => {
  const location = useLocation();
  const id = location.state;
  const titleRef = useRef();
  const navigate = useNavigate();
  const contentRef = useRef();
  const [boarddetail, setBoarddetail] = useState([]);
  useEffect(() => {
    getDetail();
    console.log("id", id);
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
  const handleUpdate = () => {
    // console.log("handleUpdate =>", article);
    axios
      .post("/update", {
        ctg: boarddetail.ctg,
        board_num: boarddetail.board_num,
        board_title: titleRef.current.value,
        board_content: contentRef.current.value,
      })
      .then((res) => {})
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
      <div>
        <form>
          <input type="hidden" name="id" id="id" value={id} />
          <div className="sc_bl_wr">
            <div className="one-box">
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
                    className="w100"
                    defaultValue={boarddetail.subject}
                  />
                </dd>
              </dl>
            </div>
            <input type="hidden" name="writer" value={boarddetail.writer} />

            <div className="one-box">
              <dl>
                <dt>
                  <label for="content">내용</label>
                </dt>
                <dd>
                  <div className="editer-wrapper">
                    <textarea
                      id="content"
                      defaultValue={boarddetail.content}
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
          <div className="btns-area">
            <a onclick={handleUpdate} className="btn-m02 btn-color01 depth2">
              수정
            </a>
            <a
              onClick={() => navigate(-1)}
              className="btn-m02 btn-color06 depth2"
            >
              취소
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportBoardModify;
