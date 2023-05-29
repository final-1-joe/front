import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HiHashtag } from "react-icons/hi";

const PjList = () => {
  //project데이터 가져오기
  const [pjlist, setPjlist] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPjlist();
  }, []);

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

  return (
    <div>
      <div className="ListOption">
        <table>
          <tr>
            <td width="100px">프로젝트</td>
            <td>
              <select className="ListSelect">
                <option>직군 선택</option>
                <option>개발</option>
                <option>경영 / 비지니스</option>
                <option>마케팅 / 광고</option>
                <option>디자인</option>
                <option>미디어</option>
                <option>엔지니어링 / 설계</option>
                <option>법률 / 법집행기관</option>
                <option>기타</option>
              </select>
            </td>
            <td>
              <select className="ListSelect">
                <option>근무 기간</option>
                <option>~3개월</option>
                <option>3~6개월</option>
                <option>6개월~1년</option>
                <option>1년 이상</option>
              </select>
            </td>
            <td>
              <select className="ListSelect">
                <option>근무 형태</option>
                <option>원격</option>
                <option>상주</option>
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
                      {data.pj_start}&nbsp;~&nbsp;{data.pj_end}
                      &nbsp;&nbsp;|&nbsp;&nbsp;
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
