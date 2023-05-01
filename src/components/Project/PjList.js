import { Link } from "react-router-dom";
import "../../css/List.css";

const PjList = () => {
  return (
    <div id="list">
      <div className="option">
        <table>
          <tr>
            <td width="100px">프로젝트</td>
            <td>
              <select className="select">
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
              <select className="select">
                <option>근무 기간</option>
                <option>~3개월</option>
                <option>3~6개월</option>
                <option>6개월~1년</option>
                <option>1년 이상</option>
              </select>
            </td>
            <td>
              <select className="select">
                <option>근무 형태</option>
                <option>원격</option>
                <option>상주</option>
              </select>
            </td>
            <td width="100px">
              <button>선택</button>
            </td>
          </tr>
        </table>
        <hr />
        <div>
          <select id="filter">
            <option>최신순</option>
            <option>많이 담은 순</option>
          </select>
        </div>
      </div>

      <div>
        <div className="listbox">
          <Link to="/pjdetail" style={{ textDecoration: "none" }}>
            <div className="listtext">
              <span className="jobtag">#개발</span>
              <span className="possible">모집중</span>
              <table align="center">
                <tr>
                  <td colSpan={5} className="introduce">
                    프로젝트명
                  </td>
                </tr>
                <tr>
                  <td colSpan={5}>회사명</td>
                </tr>
                <tr>
                  <td>급여</td>
                  <td className="bar">|</td>
                  <td>기간</td>
                  <td className="bar">|</td>
                  <td>근무 형태</td>
                </tr>
              </table>
            </div>
            {/* 태그 설정시 선택한 태그가 나타나도록 */}
          </Link>
        </div>
        <div className="listbox">
          <Link to="/pjdetail" style={{ textDecoration: "none" }}>
            <div className="listtext">
              <span className="jobtag">#개발</span>
              <span className="possible">모집중</span>
              <table align="center">
                <tr>
                  <td colSpan={5} className="introduce">
                    프로젝트명
                  </td>
                </tr>
                <tr>
                  <td colSpan={5}>회사명</td>
                </tr>
                <tr>
                  <td>급여</td>
                  <td className="bar">|</td>
                  <td>기간</td>
                  <td className="bar">|</td>
                  <td>근무 형태</td>
                </tr>
              </table>
            </div>
          </Link>
        </div>
        <div className="listbox">
          <Link to="/pjdetail" style={{ textDecoration: "none" }}>
            <div className="listtext">
              <span className="jobtag">#개발</span>
              <span className="possible">모집중</span>
              <table align="center">
                <tr>
                  <td colSpan={5} className="introduce">
                    프로젝트명
                  </td>
                </tr>
                <tr>
                  <td colSpan={5}>회사명</td>
                </tr>
                <tr>
                  <td>급여</td>
                  <td className="bar">|</td>
                  <td>기간</td>
                  <td className="bar">|</td>
                  <td>근무 형태</td>
                </tr>
              </table>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PjList;