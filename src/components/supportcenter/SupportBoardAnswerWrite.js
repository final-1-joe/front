/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import "../../css/SupportCenter.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
const SupportBoardAnswerWrite = () => {
  const navigate = useNavigate();
  const [boarddetail, setBoarddetail] = useState([]);
  const writerRef = useRef();
  const contentRef = useRef();

  return (
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
            <div class="btns-area sc_an_wr_btn">
              <a class="btn-m02 btn-color01 depth2">등록</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SupportBoardAnswerWrite;
