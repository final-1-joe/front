import "../../css/PjDetail.css";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import React, { useState } from "react";
import ReviewModal from "../Review/ReviewModal";
import ReviewWrite from "../Review/ReviewWrite";
import dummy from "./PjData.json";

const PjDetail = () => {
  const [reviewForm, setReviewForm] = useState(false);

  const dummy = {
    projectName: "삼성카드 쇼핑몰 사이트 개발(백엔드)",
    corpName: "삼성카드",
    workForm: "상주",
    startDate: "2023년 6월 1일",
    pjPeriod: "3개월",
    salary: "월 500만원",
    jobGroup: "개발",
    personnel: "1명",
    requiredSkills: "Java, Spring boot",
    pjContent: "프로젝트 내용 프로젝트 내용 프로젝트 내용",
  };

  return (
    <div id="PjContainer">
      <div className="PjDetail">
        <h1>{dummy.projectName}</h1>

        <div className="PjDetailBox1">
          <table width="450px">
            <tr>
              <td width="60px" className="info">
                회사명
              </td>
              <td>(주){dummy.corpName}</td>
              <td width="60px" className="info">
                근무 형태
              </td>
              <td>{dummy.workForm}</td>
            </tr>
            <tr>
              <td className="info">시작 예정일</td>
              <td>{dummy.startDate}</td>
              <td className="info" width="100px">
                프로젝트 기간
              </td>
              <td>{dummy.pjPeriod}</td>
            </tr>
          </table>
        </div>

        <div className="PjDetailBox2">
          <table>
            <tr>
              <td className="info" width="80px">
                예상 급여
              </td>
              <td>{dummy.salary}</td>
            </tr>
            <tr>
              <td className="info">직군</td>
              <td>{dummy.jobGroup}</td>
            </tr>
            <tr>
              <td className="info">고용 인원</td>
              <td>{dummy.personnel}</td>
            </tr>
            <tr>
              <td className="info">필요 스킬</td>
              <td>{dummy.requiredSkills}</td>
            </tr>
          </table>
          <br />
          <table>
            <tr>
              <td>{dummy.pjContent}</td>
            </tr>
          </table>
          <Link
            to="/pjregistration"
            style={{ textDecoration: "none", color: "black" }}
          >
            <input type="button" value="프로젝트 등록"></input>
          </Link>
        </div>
        <div className="PjReview">
          <details open>
            <summary>회사 평가</summary>
            <div className="evaluate">
              <input
                type="button"
                value="작성"
                className="PjWriteBtn"
                onClick={() => setReviewForm(!reviewForm)}
              />
              {reviewForm && (
                <ReviewModal closeModal={() => setReviewForm(!reviewForm)}>
                  <ReviewWrite />
                </ReviewModal>
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
                  <td colSpan={4}>
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
                  <td colSpan={4}>
                    멀티캠퍼스와 함께 하는 동안 많이 배우고 성장했습니다!
                  </td>
                </tr>
              </table>
            </div>
          </details>
        </div>
      </div>

      <aside id="PjAside">
        <div className="PjContact">
          <span className="PjLikeBtn">♡&nbsp;관심 프로젝트</span>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span className="PjDM">DM</span>
          </Link>
          <div className="PjApplyBtn">지원하기</div>
        </div>
        <br />
        <div>
          <h3>유사 프로젝트</h3>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="PjSimilar">
              <p>프로젝트명</p>
              <p>프로젝트 내용</p>
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="PjSimilar">
              <p>프로젝트명</p>
              <p>프로젝트 내용</p>
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="PjSimilar">
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
