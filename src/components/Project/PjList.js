import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { HiHashtag } from "react-icons/hi";

const PjList = () => {
  //project데이터 가져오기
  const [pjlist, setPjlist] = useState([]);
  const pj_jobRef = useRef();
  const pj_dayRef = useRef();
  const pj_work_formRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getPjlist();
    const searchParams = new URLSearchParams(location.search);
    const pj_job = searchParams.get("pj_job");
    const pj_day = searchParams.get("pj_day");
    const pj_work_form = searchParams.get("pj_work_form");

    pj_jobRef.current.value = pj_job || "";
    pj_dayRef.current.value = pj_day || 0;
    pj_work_formRef.current.value = pj_work_form || "";

    getPjlistTag(pj_job, pj_day, pj_work_form);
  }, []);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pj_job = searchParams.get("pj_job");
    const pj_day = searchParams.get("pj_day");
    const pj_work_form = searchParams.get("pj_work_form");

    pj_jobRef.current.value = pj_job || "";
    pj_dayRef.current.value = pj_day || 0;
    pj_work_formRef.current.value = pj_work_form || "";

    getPjlistTag(pj_job, pj_day, pj_work_form);
  }, [location.search]);

  const handleTagChange = () => {
    const pj_job = pj_jobRef.current.value;
    const pj_day = pj_dayRef.current.value;
    const pj_work_form = pj_work_formRef.current.value;

    const searchParams = new URLSearchParams();
    searchParams.set("pj_job", pj_job);
    searchParams.set("pj_day", pj_day);
    searchParams.set("pj_work_form", pj_work_form);
    navigate(`?${searchParams.toString()}`);

    // Fetch project list based on the updated tag settings
    getPjlistTag(pj_job, pj_day, pj_work_form);
  };

  const getPjlist = () => {
    axios
      .get("http://localhost:8080/pjlist", {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        setPjlist(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const getPjlistTag = (pj_job, pj_day, pj_work_form) => {
    // Fetch project list based on tag settings
    axios
      .post("http://localhost:8080/pjlisttag", {
        pj_job: pj_job || "",
        pj_day: pj_day || "",
        pj_work_form: pj_work_form || "",
      })
      .then((res) => {
        const data = res.data;
        console.log("tag", res);
        setPjlist(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <div className="ListOption">
        <table>
          <tr>
            <td width="100px">프로젝트</td>
            <td>
              <select
                className="ListSelect"
                ref={pj_jobRef}
                onChange={handleTagChange}
              >
                <option value="">직군 선택</option>
                <option value="개발">개발</option>
                <option value="경영·비즈니스">경영·비즈니스</option>
                <option value="마케팅·광고">마케팅·광고</option>
                <option value="디자인">디자인</option>
                <option value="미디어">미디어</option>
                <option value="엔지니어링·설계">엔지니어링·설계</option>
                <option value="법률·법집행기관">법률·법집행기관</option>
              </select>
            </td>
            <td>
              <select
                className="ListSelect"
                ref={pj_dayRef}
                onChange={handleTagChange}
              >
                <option value={0}>근무 기간</option>
                <option value={3}>~3개월</option>
                <option value={6}>3~6개월</option>
                <option value={12}>6개월~1년</option>
                <option value={13}>1년 이상</option>
              </select>
            </td>
            <td>
              <select
                className="ListSelect"
                ref={pj_work_formRef}
                onChange={handleTagChange}
              >
                <option value="">근무 형태</option>
                <option value="online">원격</option>
                <option value="offline">상주</option>
              </select>
            </td>
          </tr>
        </table>
        <hr />
        <div>
          <select id="ListFilter">
            <option>최신순</option>
            <option>많이 담은 순</option>
          </select>
        </div>
      </div>
      {pjlist.map((data) => (
        <div className="ListBox" id={data.pj_num}>
          <Link to={`/pjlist/pjdetail/${data.pj_num}`}>
            <div className="ListText">
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <span className="ListJobTag">#{data.pj_job}</span>
                      <span className="ListPossible">
                        모집 마감일 {data.pj_period}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>(주)&nbsp;{data.pj_corpname}&nbsp;&nbsp;|</td>
                    <td className="ListIntro">{data.pj_title}</td>
                  </tr>
                  <tr style={{ fontSize: "14px" }}>
                    <td colSpan={2}>
                      {data.pj_pay}&nbsp;&nbsp;|&nbsp;&nbsp;
                      {data.pj_day}개월&nbsp;&nbsp;|&nbsp;&nbsp;
                      {data.pj_work_form}&nbsp;&nbsp;|&nbsp;&nbsp;
                      {data.pj_place}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <HiHashtag size="20" />
                      &nbsp;
                      {data.pj_skill}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default PjList;
