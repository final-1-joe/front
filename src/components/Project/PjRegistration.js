// import DatePick from "./PjDatePick";
// import DatePick2 from "./PjDatePick2";
import "../../css/PjRegi.css";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

const PjRegistration = () => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [periodDate, setPeriodDate] = useState(new Date());
  // const [test2, setTest2] = useState("");
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    pj_title: "",
    pj_corpname: "",
    pj_content: "",
    pj_pay: "",
    pj_start: "",
    pj_period: "",
    pj_day: "",
    pj_work_form: "",
    pj_place: "",
    pj_job: "",
    pj_skill: "",
    pj_pick: "",
    user_id: "",
  });
  const titleRef = useRef();
  const corpRef = useRef();
  const contentRef = useRef();
  const payRef = useRef();
  const startRef = useRef();
  const periodRef = useRef();
  const dayRef = useRef();
  const workformRef = useRef();
  const placeRef = useRef();
  const jobRef = useRef();
  const skillRef = useRef();
  const pickRef = useRef();

  const handleInsert = () => {
    console.log("handleInsert =>", titleRef.current.value);
    if (titleRef.current.value === "" || titleRef.current.value === undefined) {
      alert("프로젝트명을 입력하세요.");
      titleRef.current.focus();
      return false;
    }
    if (corpRef.current.value === "" || corpRef.current.value === undefined) {
      alert("회사명을 입력하세요.");
      titleRef.current.focus();
      return false;
    }
    if (jobRef.current.value === "" || jobRef.current.value === undefined) {
      alert("직군을 선택하세요.");
      titleRef.current.focus();
      return false;
    }
    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      alert("프로젝트 내용을 입력하세요.");
      contentRef.current.focus();
      return false;
    }
    // const year = startDate.getFullYear();
    // const month = startDate.getMonth() + 1;
    // const day = startDate.getDate();
    // console.log([year, month, day].join("-"));
    // setTest2([year, month, day].join("-"));

    axios
      .post("http://localhost:8080/pjdetail/insert", {
        pj_title: info.pj_title,
        pj_corpname: info.pj_corpname,
        pj_content: info.pj_content,
        pj_pay: info.pj_pay,
        pj_start: info.pj_start,
        pj_period: info.pj_period,
        pj_day: info.pj_day,
        pj_work_form: info.pj_work_form,
        pj_place: info.pj_place,
        pj_job: info.pj_job,
        pj_skill: info.pj_skill,
        pj_pick: info.pj_pick,
        user_id: "admin", // 로그인 기능 합치기 전, id는 임시로 admin으로 설정.
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        alert("프로젝트가 등록되었습니다.");
        navigate("/pjlist");
      })
      .catch((e) => {
        console.error(e);
        alert("프로젝트 등록에 실패했습니다.");
        console.log(info);
      });
  };

  return (
    <div>
      <div className="PjRegister">
        <input type="hidden" id="userId" name="user_id" value="admin" />
        <table className="PjRegisterTbl">
          <tr>
            <td>프로젝트명</td>
            <td>
              <input
                type="text"
                size="60"
                placeholder="프로젝트명을 입력하세요"
                ref={titleRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_title: titleRef.current.value,
                  }))
                }
              ></input>
            </td>
          </tr>
          <tr>
            <td>회사명&nbsp;&nbsp;(주)</td>
            <td>
              <input
                type="text"
                size="30"
                placeholder="회사명을 입력하세요"
                ref={corpRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_corpname: corpRef.current.value,
                  }))
                }
              ></input>
            </td>
          </tr>
          <tr>
            <td>근무 형태 / 지역</td>
            {/* (select option으로 처리 전)임시 입력창 */}
            <td>
              <input
                type="text"
                size="30"
                placeholder="근무 형태"
                ref={workformRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_work_form: workformRef.current.value,
                  }))
                }
              ></input>
              &nbsp;&nbsp;
              <input
                type="text"
                size="30"
                placeholder="근무 지역"
                ref={placeRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_place: placeRef.current.value,
                  }))
                }
              ></input>
            </td>
          </tr>
          <tr>
            <td>시작 예정일</td>
            <td>
              {/* <DatePick startDate={startDate} setStartDate={setStartDate} /> */}
              <input
                type="text"
                size="30"
                placeholder="yyyy-MM-dd"
                ref={startRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_start: startRef.current.value,
                  }))
                }
              ></input>
            </td>
          </tr>
          <tr>
            <td>모집 마감일</td>
            <td>
              {/* <DatePick2
                periodDate={periodDate}
                setPeriodDate={setPeriodDate}
              /> */}
              <input
                type="text"
                size="30"
                placeholder="yyyy-MM-dd"
                ref={periodRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_period: periodRef.current.value,
                  }))
                }
              ></input>
            </td>
          </tr>
          <tr>
            <td>직군</td> {/* (select option으로 처리 전)임시 입력창 */}
            <td>
              <input
                type="text"
                size="30"
                placeholder="모집 직군을 입력하세요"
                ref={jobRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_job: jobRef.current.value,
                  }))
                }
              ></input>
            </td>
          </tr>
          <tr>
            <td>예상 급여</td>
            <td>
              <input
                type="text"
                placeholder="예상 급여"
                ref={payRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_pay: payRef.current.value,
                  }))
                }
              ></input>
            </td>
          </tr>
          <tr>
            <td>프로젝트 기간</td>
            <td>
              <input
                type="text"
                ref={dayRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_day: dayRef.current.value,
                  }))
                }
              ></input>
              &nbsp;개월
            </td>
          </tr>
          <tr>
            <td>고용 인원</td>
            <td>
              <input
                type="text"
                ref={pickRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_pick: pickRef.current.value,
                  }))
                }
              ></input>
              &nbsp;&nbsp;명
            </td>
          </tr>
          <tr>
            <td>필요 스킬</td>
            <td>
              <input
                type="text"
                placeholder="필요 스킬을 입력하세요"
                ref={skillRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_skill: skillRef.current.value,
                  }))
                }
              ></input>
              <input type="button" value="+" className="pjbtn"></input>
              {/* 임시: 필요 스킬 직접 입력 / 추후: 태그 선택하도록 구현 */}
            </td>
          </tr>
          <tr>
            <td>프로젝트 내용</td>
            <td>
              <textarea
                className="PjContent"
                placeholder="내용을 입력하세요"
                ref={contentRef}
                onChange={() =>
                  setInfo((prevInfo) => ({
                    ...prevInfo,
                    pj_content: contentRef.current.value,
                  }))
                }
              ></textarea>
            </td>
          </tr>
        </table>
        <br />
        <input
          value="등록"
          className="PjBtn"
          onClick={() => handleInsert()}
        ></input>
        &nbsp;&nbsp;
        <input
          type="reset"
          value="취소"
          className="PjBtn"
          onClick={() => navigate(-1)}
        ></input>
      </div>
    </div>
  );
};

export default PjRegistration;
