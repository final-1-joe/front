import "../../css/PjDetail.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import ReviewModal from "../Review/ReviewModal";
import ReviewWrite from "../Review/ReviewWrite";
import { useEffect } from "react";

const PjDetail = () => {
  const navigate = useNavigate();
  const [reviewForm, setReviewForm] = useState(false);
  const [project, setProject] = useState([]);

  const { id } = useParams();
  const pj_num = parseInt(id);
  useEffect(() => {
    getPjDetail();
  }, []);

  const getPjDetail = () => {
    axios
      .get(`http://localhost:8080/pjlist/pjdetail?pj_num=${pj_num}`, {})
      .then((res) => {
        const data = res.data;
        console.log("data: ", data);
        setProject(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const onClickUpdate = () => {
    navigate(`/pjdetail/update/${pj_num}`);
  };
  const onClickDelete = () => {
    console.log("[Delete]pj_num: ", pj_num);

    axios
      .get(`http://localhost:8080/pjdetail/delete?pj_num=${pj_num}`, {})
      .then((res) => {
        alert("프로젝트가 삭제되었습니다.");
        navigate("/pjlist");
      })
      .catch((e) => {
        alert("프로젝트 삭제에 실패했습니다.");
        console.error(e);
      });
  };
  const onClickLike = () => {
    alert("관심 프로젝트에 등록되었습니다");
  };

  return (
    <div className="PjContainer" id={project.pj_num}>
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
                  {project.pj_title}
                </td>
              </tr>
              <tr>
                <td width="60px" className="info">
                  회사명
                </td>
                <td>(주){project.pj_corpname}</td>
                <td width="60px" className="info">
                  근무 형태/지역
                </td>
                <td>
                  {project.pj_work_form}&nbsp;/&nbsp;{project.pj_place}
                </td>
              </tr>
              <tr>
                <td className="info">시작 예정일</td>
                <td>{project.pj_start}</td>
                <td className="info" width="100px">
                  종료 예정일
                </td>
                <td>{project.pj_end}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="PjDetailBox2">
          <table>
            <tbody key={project.pj_num}>
              <tr>
                <td className="info">모집 마감일</td>
                <td>{project.pj_period}</td>
              </tr>
              <tr>
                <td className="info" width="80px">
                  예상 급여
                </td>
                <td>{project.pj_pay}</td>
              </tr>
              <tr>
                <td className="info">직군</td>
                <td>{project.pj_job}</td>
              </tr>
              <tr>
                <td className="info">고용 인원</td>
                <td>{project.pj_pick}명</td>
              </tr>
              <tr>
                <td className="info">필요 스킬</td>
                <td>{project.pj_skill}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div id="PjContent">{project.pj_content}</div>
                </td>
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
            <Link to={`/pjdetail/update/${project.pj_num}`}>
              <button className="PjBtn2">수정</button>
            </Link>
            <button className="PjBtn2" onClick={onClickDelete}>
              삭제
            </button>
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
