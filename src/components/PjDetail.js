import "../css/PjDetail.css";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import React, { useState } from "react";
import Modal from "./Modal";
import ReviewForm from "./Review/ReviewForm";

const PjDetail = () => {
  const [reviewForm, setReviewForm] = useState(false);

  return (
    <div id="container">
      <div className="detail">
        <h1>프로젝트명</h1>

        <div className="detailbox1">
          <table>
            <tr>
              <td width="100px" className="info">
                회사명
              </td>
              <td width="500px">(주)멀티캠퍼스</td>
            </tr>
            <tr>
              <td className="info">모집기간</td>
              <td>2023.4.20 ~ 2023.5.1</td>
            </tr>
            <tr>
              <td className="info">업무</td>
              <td>Back-End 개발</td>
            </tr>
          </table>
        </div>

        <div className="detailbox2">
          <table>
            <tr>
              <td style={{ fontWeight: "bold", fontSize: "20px" }}>
                프로젝트 세부 내용
              </td>
            </tr>
            <tr>
              <td>
                프로젝트 세부 내용(인원, 업무 내용, 급여, 기간, 필요 기술 등)
              </td>
            </tr>
          </table>
        </div>
        <div className="corpgrade">
          <details open>
            <summary>회사 평가</summary>
            <div className="evaluate">
              <input
                type="button"
                value="작성"
                className="evalbtn"
                onClick={() => setReviewForm(!reviewForm)}
              />
              {reviewForm && (
                <Modal closeModal={() => setReviewForm(!reviewForm)}>
                  <ReviewForm />
                </Modal>
              )}
            </div>
            <div class="tpt">
              <table>
                <tr height="50px">
                  <td width="30px">작성자</td>
                  <td width="60px">김멀티</td>
                  <td width="30px">평점</td>
                  <td width="60px">5.0 / 5.0</td>
                </tr>
                <tr>
                  <td colSpan={4} id="word">
                    멀티캠퍼스와 함께 하는 동안 많이 배우고 성장했습니다!
                  </td>
                </tr>
              </table>
            </div>
            <div class="tpt">
              <table>
                <tr height="50px">
                  <td width="30px">작성자</td>
                  <td width="60px">김멀티</td>
                  <td width="30px">평점</td>
                  <td width="60px">5.0 / 5.0</td>
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
      </div>
      <aside>
        <div className="contact">
          <span className="likebtn">♡&nbsp;관심 프로젝트</span>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span className="dm">DM</span>
          </Link>
          <div className="applybtn">지원하기</div>
        </div>
        <br />
        <div>
          <h3>유사 프로젝트</h3>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="similarpj">
              <p>프로젝트명</p>
              <p>프로젝트 내용</p>
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="similarpj">
              <p>프로젝트명</p>
              <p>프로젝트 내용</p>
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="similarpj">
              <p>프로젝트명</p>
              <p>프로젝트 내용</p>
            </div>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default PjDetail;
