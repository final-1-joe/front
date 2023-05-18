import "../../css/FreeDetail.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import React, { useState } from "react";
import ReviewModal from "../Review/ReviewModal";
import ReviewWrite from "../Review/ReviewWrite";

const FreeDetail = (props) => {
  const [evalForm, setEvalForm] = useState(false);
  const navigate = useNavigate();

  const onClickLike = () => {
    alert("관심 프리랜서에 등록되었습니다");
  };

  return (
    <div id="FreeContainer">
      <div>
        <div className="FreeContact">
          <table align="right">
            <tr>
              <td>
                <span className="FreeLikeBtn" onClick={onClickLike}>
                  ♡&nbsp;관심 프리랜서
                </span>
              </td>
              <td>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <span className="FreeDM">DM</span>
                </Link>
              </td>
            </tr>
          </table>
          <br />
        </div>
        <div className="FreeDetailBox1">
          <table align="center">
            <tr height="50px">
              <td
                colSpan={6}
                align="center"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                끈기와 열정이 있는 개발자 김멀티입니다.
              </td>
            </tr>
            <tr>
              <td>김멀티</td>
              <td className="FreeBar">|</td>
              <td>개발</td>
              <td className="FreeBar">|</td>
              <td>경력 0년</td>
              <td rowSpan={2} width="300px" align="center">
                <FaHashtag />
                &nbsp;Java, Spring, jQuery, MySQL
              </td>
            </tr>
            <tr>
              <td colSpan={5} align="center" width="300px">
                <div id="FreeResumeIcon">
                  <a href="#" style={{ textDecoration: "none" }}>
                    {/* 첨부한 포트폴리오 파일, 깃 주소로 이동 */}
                    <span id="FreePortfolio">포트폴리오</span>
                  </a>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <span id="FreePortfolio">
                      <AiFillGithub />
                      &nbsp; GitHub
                    </span>
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div className="FreeDetailBox2">
          <table align="center">
            <tr>
              <td>희망 급여</td>
              <td className="FreeBar">|</td>
              <td>월 000만원 ~ </td>
              <td width="50px"></td>
              <td>희망 근무방식</td>
              <td className="FreeBar">|</td>
              <td>원격(재택)</td>
              <td width="100px"></td>
              <td align="center">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span id="FreeSchedule">일정 보기</span>
                </Link>
              </td>
            </tr>
          </table>
        </div>
        <br />
        <div className="FreeReview">
          <details open>
            <summary>프리랜서 평가</summary>
            <div>
              <input
                type="button"
                value="작성"
                className="FreeWriteBtn"
                onClick={() => setEvalForm(!evalForm)}
              />
              {evalForm && (
                <ReviewModal closeModal={() => setEvalForm(!evalForm)}>
                  <ReviewWrite />
                </ReviewModal>
              )}
            </div>
            <div className="tpt">
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
                    {/* 멀티캠퍼스와 함께 하는 동안 많이 배우고 성장했습니다! */}
                  </td>
                </tr>
              </table>
            </div>
            <div className="tpt">
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
                  <td colSpan={4}>
                    {/* 멀티캠퍼스와 함께 하는 동안 많이 배우고 성장했습니다! */}
                  </td>
                </tr>
              </table>
            </div>
          </details>
          <br />
          <div>
            <input type="button" value="수정" className="FreeBtn"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDetail;
