import "../css/FreeDetail.css";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import React, { useState } from "react";
import Modal from "./Modal";
import EvalForm from "./Review/ReviewForm";

const FreeDetail = (props) => {
  const [evalForm, setEvalForm] = useState(false);

  return (
    <div id="container">
      <div>
        <h1>" 끈기와 열정이 있는 개발자 김멀티입니다. "</h1>
        <div className="detailbox1">
          <table align="center">
            <tr>
              <td>김멀티</td>
              <td className="bar">|</td>
              <td>개발</td>
              <td className="bar">|</td>
              <td>경력 0년</td>
              <td rowSpan={2} width="300px" align="center">
                <FaHashtag />
                &nbsp;Java, Spring, jQuery, MySQL
              </td>
            </tr>
            <tr>
              <td colSpan={5} align="center" width="300px">
                <a href="#" style={{ textDecoration: "none" }}>
                  {/* 첨부한 포트폴리오 파일, 깃 주소로 이동 */}
                  <span id="portfolio">포트폴리오</span>
                </a>
                <a href="#" style={{ textDecoration: "none" }}>
                  <span id="portfolio">
                    <AiFillGithub />
                    &nbsp; GitHub
                  </span>
                </a>
              </td>
            </tr>
          </table>
        </div>

        <div className="detailbox2">
          <table align="center">
            <tr>
              <td>희망 급여</td>
              <td className="bar">|</td>
              <td>월 000만원 ~ </td>
              <td width="50px"></td>
              <td>희망 근무방식</td>
              <td className="bar">|</td>
              <td>원격(재택)</td>
              <td width="100px"></td>
              <td align="center">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span id="schedule">일정 보기</span>
                </Link>
              </td>
            </tr>
          </table>
        </div>
        <div className="corpgrade">
          <details open>
            <summary>프리랜서 평가</summary>
            <div className="evaluate">
              <input
                type="button"
                value="작성"
                className="evalbtn"
                onClick={() => setEvalForm(!evalForm)}
              />
              {evalForm && (
                <Modal closeModal={() => setEvalForm(!evalForm)}>
                  <EvalForm />
                </Modal>
              )}
            </div>
            <div class="tpt">
              <table>
                <tr height="50px">
                  <td width="30px">작성자</td>
                  <td width="100px">멀티캠퍼스</td>
                  <td width="30px">평점</td>
                  <td width="60px">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar /> 5.0
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} id="word">
                    멀티캠퍼스와 함께 하는 동안 많이 배우고 성장했습니다!
                  </td>
                </tr>
              </table>
            </div>
          </details>
        </div>
        <div>
          <span className="likebtn">♡&nbsp;관심 프리랜서</span>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span className="dm">DM</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeDetail;
