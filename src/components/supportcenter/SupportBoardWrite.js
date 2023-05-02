import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/SupportCenter.css";
const SupportBoardWrite = () => {
  const titleRef = useRef();
  const writerRef = useRef();
  const contentRef = useRef();
  const navigate = useNavigate();
  const handleInsert = () => {
    console.log("handleInsert =>", titleRef.current.value);
    if (titleRef.current.value === "" || titleRef.current.value === undefined) {
      alert("제목을 입력하세요!!!");
      titleRef.current.focus();
      return false;
    }
    if (
      writerRef.current.value === "" ||
      writerRef.current.value === undefined
    ) {
      alert("글쓴이를 입력하세요!!!");
      writerRef.current.focus();
      return false;
    }
    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      alert("내용을 입력하세요!!!");
      contentRef.current.focus();
      return false;
    }

    axios
      .post("/insert", {
        ctg: 1,
        board_title: titleRef.current.value,
        board_writer: writerRef.current.value,
        board_content: contentRef.current.value,
      })
      .then((res) => {
        titleRef.current.value = "";
        writerRef.current.value = "";
        contentRef.current.value = "";
        navigate("/reviewboard");
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
            <a onclick={handleInsert} class="btn-m02 btn-color01 depth2">
              등록
            </a>
            <a onClick={() => navigate(-1)} class="btn-m02 btn-color06 depth2">
              취소
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportBoardWrite;
