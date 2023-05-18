import "../../css/PjDetail.css";
// import dummy from "./PjDummyData.json";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import ReviewModal from "../Review/ReviewModal";
import ReviewWrite from "../Review/ReviewWrite";

const PjDetail = () => {
  const [reviewForm, setReviewForm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pjInfo = { ...location.state };

  const onClickRegister = () => {
    navigate("/pjregistration");
  };
  const onClickUpdate = () => {
    navigate("/pjdetail/update");
  };
  const onClickDelete = () => {
    alert("프로젝트가 삭제되었습니다.");
    navigate("/pjlist");
  };
  const onClickLike = () => {
    alert("관심 프로젝트에 등록되었습니다");
  };

  return (
    <div id="PjContainer">
      <div className="PjDetail">
        <div className="PjDetailBox1">
          <table width="450px">
            <tbody>
              <tr height="50px">
                <td
                  colSpan={4}
                  align="center"
                  style={{ fontSize: "22px", fontWeight: "bold" }}
                >
                  {pjInfo.projectName}
                </td>
              </tr>
              <tr>
                <td width="60px" className="info">
                  회사명
                </td>
                <td>(주){pjInfo.corpName}</td>
                <td width="60px" className="info">
                  근무 형태
                </td>
                <td>{pjInfo.workForm}</td>
              </tr>
              <tr>
                <td className="info">시작 예정일</td>
                <td>{pjInfo.startDate}</td>
                <td className="info" width="100px">
                  프로젝트 기간
                </td>
                <td>{pjInfo.pjPeriod}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="PjDetailBox2">
          <table>
            <tbody key={pjInfo.id}>
              <tr>
                <td className="info" width="80px">
                  예상 급여
                </td>
                <td>{pjInfo.salary}</td>
              </tr>
              <tr>
                <td className="info">직군</td>
                <td>{pjInfo.jobGroup}</td>
              </tr>
              <tr>
                <td className="info">고용 인원</td>
                <td>{pjInfo.personnel}</td>
              </tr>
              <tr>
                <td className="info">필요 스킬</td>
                <td>{pjInfo.requiredSkills}</td>
              </tr>
              <br />
              <tr>
                <td colSpan={2}>{pjInfo.pjContent}</td>
              </tr>
            </tbody>
          </table>
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
          <br />

          <div className="PjManagement">
            <span>
              <input
                type="button"
                value="프로젝트 등록"
                className="PjBtn1"
                onClick={onClickRegister}
              ></input>
            </span>
            <input
              type="button"
              value="수정"
              className="PjBtn2"
              onClick={onClickUpdate}
            ></input>
            <input
              type="button"
              value="삭제"
              className="PjBtn2"
              onClick={onClickDelete}
            ></input>
          </div>
        </div>
      </div>

      <aside id="PjAside">
        <div className="PjContact">
          <table>
            <tr>
              <td>
                <span className="PjLikeBtn" onClick={onClickLike}>
                  ♡&nbsp;관심 프로젝트
                </span>
              </td>
              <td>
                <span className="PjDM">DM</span>
              </td>
            </tr>
          </table>
          <div id="PjApply">
            <span className="PjApplyBtn">지원하기</span>
          </div>
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
