import DatePick from "./PjDatePick";
import "../../css/PjRegi.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PjUpdate = () => {
  // 동작x 수정 필요
  const navigate = useNavigate();
  const { id } = useParams();
  const pj_num = parseInt(id);
  const [pjupdate, setPjupdate] = useState({
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
  });
  useEffect(() => {
    getPjDetail();
  }, []);

  const getPjDetail = () => {
    axios
      .get(`http://localhost:8080/pjlist/pjdetail?pj_num=${pj_num}`, {})
      .then((res) => {
        const data = res.data;
        console.log("getPjDetail: ", data);
        // setPjupdate(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdate = () => {
    axios
      .post(`http://localhost:8080/pjdetail/update`, { pj_num: pj_num })
      .then((res) => {
        getPjDetail();
        const { data } = res; // const data = res.data;
        console.log("getPjDetail => handleUpdate: ", data);

        setPjupdate({
          pj_title: data.pj_title,
          pj_corpname: data.pj_corpname,
          pj_content: data.pj_content,
          pj_pay: data.pj_pay,
          pj_start: data.pj_start,
          pj_period: data.pj_period,
          pj_day: data.pj_day,
          pj_work_form: data.pj_work_form,
          pj_place: data.pj_place,
          pj_job: data.pj_job,
          pj_skill: data.pj_skill,
          pj_pick: data.pj_pick,
        });
        alert("프로젝트가 수정되었습니다.");
      })
      .catch((e) => {
        console.log("pj_num: ", pj_num);
        console.error(e);
        alert("프로젝트 수정에 실패했습니다.");
      });
  };

  const onChange = (e) => {
    setPjupdate({
      ...pjupdate,
      [e.target.name]: e.target.value,
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
                defaultValue={pjupdate.pj_title}
                onChange={onChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td>회사명&nbsp;&nbsp;(주)</td>
            <td>
              <input type="text" size="30" value={pjupdate.pj_corpname}></input>
            </td>
          </tr>
          <tr>
            <td>근무 형태 / 지역</td>
            {/* (select option으로 처리 전)임시 입력창 */}
            <td>
              <input
                type="text"
                size="30"
                defaultValue={pjupdate.pj_work_form}
                onChange={onChange}
              ></input>
              &nbsp;&nbsp;
              <input
                type="text"
                size="30"
                defaultValue={pjupdate.pj_place}
                onChange={onChange}
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
                defaultValue={pjupdate.pj_start}
                onChange={onChange}
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
                defaultValue={pjupdate.pj_period}
                onChange={onChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td>직군</td> {/* (select option으로 처리 전)임시 입력창 */}
            <td>
              <input
                type="text"
                size="30"
                defaultValue={pjupdate.pj_job}
                onChange={onChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td>예상 급여</td>
            <td>
              <input
                type="text"
                defaultValue={pjupdate.pj_pay}
                onChange={onChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td>프로젝트 기간</td>
            <td>
              <input
                type="text"
                defaultValue={pjupdate.pj_day}
                onChange={onChange}
              ></input>
              &nbsp;개월
            </td>
          </tr>
          <tr>
            <td>고용 인원</td>
            <td>
              <input
                type="text"
                defaultValue={pjupdate.pj_pick}
                onChange={onChange}
              ></input>
              &nbsp;&nbsp;명
            </td>
          </tr>
          <tr>
            <td>필요 스킬</td>
            <td>
              <input
                type="text"
                defaultValue={pjupdate.pj_skill}
                onChange={onChange}
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
                defaultValue={pjupdate.pj_content}
                onChange={onChange}
              ></textarea>
            </td>
          </tr>
        </table>
        <br />
        <input
          value="등록"
          className="PjBtn"
          onClick={() => handleUpdate()}
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

export default PjUpdate;
