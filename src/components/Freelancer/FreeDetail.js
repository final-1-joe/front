import "../../css/FreeDetail.css";
import FreeReview from "../Review/fre/FreeReview";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FileSaver from "file-saver";
const formData = new FormData();
const FreeDetail = () => {
  const [evalForm, setEvalForm] = useState(false);
  const location = useLocation();
  const [frdata, setFrData] = useState("");
  const params = new URLSearchParams(location.search);
  const user_id = params.get("user_id");
  const login_id = window.sessionStorage.getItem("user_id");
  const navigate = useNavigate();
  const openlink = (url) => {
    const open = window.open(
      url,
      "_blank",
      "width=900px,height=910px,scrollbars=no"
    );
    if (open) {
      open.document.documentElement.style.overflow = "hidden";
    }
  };
  const onClickLike = () => {
    alert("관심 프리랜서에 등록되었습니다");
  };
  const dmchatcreate = () => {
    axios
      .post("http://localhost:8080/createChatroom", {
        my_user_id: login_id,
        your_user_id: frdata.user_id,
      })
      .then((res) => {
        //console.log(res.data);
      })
      .catch((error) => {
        console.error("/createChatroom 에러 발생" + error);
      });
  };
  useEffect(() => {
    getResume();
  }, []);
  const getResume = () => {
    axios
      .post("http://localhost:8080/resume/select", {
        user_id: user_id,
      })
      .then((res) => {
        console.log(res.data);
        setFrData(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const getportfolio = (user_orfile, user_stfile) => {
    formData.append("originfilename", user_orfile);
    formData.append("storedfilename", user_stfile);
    axios
      .post("http://localhost:8080/resume/download", formData, {
        responseType: "blob",
      })
      .then((res) => {
        console.log(res.data);
        FileSaver.saveAs(res.data, user_orfile);
      })
      .catch((e) => {
        console.error(e);
      });
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
                <Link
                  to="/direct"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span
                    className="FreeDM"
                    onClick={() => {
                      dmchatcreate();
                    }}
                  >
                    DM
                  </span>
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
                {frdata.user_intro}
              </td>
            </tr>
            <tr>
              <td>{frdata.user_nm}</td>
              <td className="FreeBar">|</td>
              <td>{frdata.user_jg}</td>
              <td className="FreeBar">|</td>
              <td>경력 {frdata.user_career}년</td>
              <td rowSpan={2} width="300px" align="center">
                <FaHashtag />
                &nbsp;
                {frdata.user_skill
                  ? frdata.user_skill.replace(/\[|\]|"/g, "")
                  : ""}
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                {frdata.user_job ? frdata.user_job.replace(/\[|\]|"/g, "") : ""}
              </td>
            </tr>
            <tr>
              <td colSpan={5} align="center" width="300px">
                <div id="FreeResumeIcon">
                  {frdata.user_orfile !== null ? (
                    <Link
                      onClick={() =>
                        getportfolio(frdata.user_orfile, frdata.user_stfile)
                      }
                      style={{ textDecoration: "none" }}
                    >
                      <span id="FreePortfolio">포트폴리오</span>
                    </Link>
                  ) : (
                    <span id="FreePortfolio">포트폴리오</span>
                  )}
                  <a
                    href={frdata.user_github}
                    style={{ textDecoration: "none" }}
                  >
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
              <td>월 {frdata.user_pay}만원</td>
              <td width="50px"></td>
              <td>희망 근무방식</td>
              <td className="FreeBar">|</td>
              <td>{frdata.user_ws}</td>
              <td width="50px"></td>
              <td>희망 근무형태</td>
              <td className="FreeBar">|</td>
              <td>{frdata.user_wt}</td>
              <td width="100px"></td>
              <td
                align="center"
                onClick={() =>
                  openlink(`http://localhost:3000/free/calendar/${user_id}`)
                }
              >
                <span id="FreeSchedule">일정 보기</span>
              </td>
            </tr>
          </table>
        </div>
        <br />
        <div className="FreeReview">
          <details open>
            <summary>프리랜서 평가</summary>

            <div className="tpt">
              <FreeReview fre_rv_target={user_id} />
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
