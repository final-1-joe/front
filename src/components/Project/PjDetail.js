import "../../css/PjDetail.css";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import PjReview from "../Review/pj/PjReview";
import { useEffect } from "react";

const PjDetail = () => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  const [project, setProject] = useState([]);
  const [pjlist, setPjlist] = useState([]);
  const [pjNum, setPjNum] = useState("");

  const user_id = window.sessionStorage.getItem("user_id");
  const { id } = useParams();
  const pj_num = parseInt(id);
  console.log("pj_num: ", pj_num);

  const getPjDetail = () => {
    axios
      .get(`http://localhost:8080/pjlist/pjdetail?pj_num=${pj_num}`, {})
      .then((res) => {
        const data = res.data;
        console.log("getdetail data: ", data);
        setProject(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    if (isSelected) {
      window.location.reload(); // 페이지 새로고침
      setIsSelected(false);
    }
  }, [isSelected]);

  const onClickSimilarProject = (slist) => {
    navigate(`/pjlist/pjdetail/${slist.pj_num}`);
    setIsSelected(true);
  };

  useEffect(() => {
    console.log("aaa");
    getPjDetail();
  }, []);

  useEffect(() => {
    getPjlist();
  }, []);
  const getPjlist = () => {
    axios
      .get("http://localhost:8080/pjlist", {})
      .then((res) => {
        const data = res.data;
        setPjlist(data);
        console.log("getPjlist: ", data);
      })
      .catch((e) => {
        console.error(e);
      });
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
        <div className="PjManagement">
          <Link to={`/pjdetail/update/${project.pj_num}`}>
            <button className="PjBtn2">수정</button>
          </Link>
          <button className="PjBtn2" onClick={onClickDelete}>
            삭제
          </button>
        </div>

        <div className="PjReview">
          <details open>
            <summary>회사 평가</summary>
            <div class="tpt">
              <PjReview pj_num={pj_num} />
            </div>
          </details>
          <br />
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
          {pjlist
            .filter(
              (list) =>
                list.pj_num !== project.pj_num && list.pj_job === project.pj_job
            )
            .map((slist) => (
              <div
                key={slist.pj_num}
                className="PjSimilar"
                onClick={() => onClickSimilarProject(slist)}
              >
                <p>{slist.pj_title}</p>
                <p>{slist.pj_content}</p>
              </div>
            ))}
        </div>
      </aside>
    </div>
  );
};

export default PjDetail;
