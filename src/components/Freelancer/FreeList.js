import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/List.css";

const FreeList = () => {
  const [frlist, setFrlist] = useState([]);
  const user_jgRef = useRef();
  const user_careerRef = useRef();
  const user_wsRef = useRef(null);
  const user_jsRef = useRef(null);
  const searchRef = useRef();
  const searchtextRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const user_jg = searchParams.get("user_jg");
    const user_career = searchParams.get("user_career");
    const user_ws = searchParams.get("user_ws");
    const user_js = searchParams.get("user_js");
    const searchNo = searchParams.get("searchNo");
    const searchtext = searchParams.get("searchtext");
    user_jgRef.current.value = user_jg || "";
    user_careerRef.current.value = user_career || 0;
    user_wsRef.current.value = user_ws || "";
    user_jsRef.current.value = user_js || "";
    searchRef.current.value = searchNo || 0;
    searchtextRef.current.value = searchtext || "";
    getFrlistTag(user_jg, user_career, user_ws, user_js, searchNo, searchtext);
  }, []);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const user_jg = searchParams.get("user_jg");
    const user_career = searchParams.get("user_career");
    const user_ws = searchParams.get("user_ws");
    const user_js = searchParams.get("user_js");
    const searchNo = searchParams.get("searchNo");
    const searchtext = searchParams.get("searchtext");
    user_jgRef.current.value = user_jg || "";
    user_careerRef.current.value = user_career || 0;
    user_wsRef.current.value = user_ws || "";
    user_jsRef.current.value = user_js || "";
    searchRef.current.value = searchNo || 0;
    searchtextRef.current.value = searchtext || "";
    getFrlistTag(user_jg, user_career, user_ws, user_js, searchNo, searchtext);
  }, [location.search]);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const user_jg = user_jgRef.current.value;
      const user_career = user_careerRef.current.value;
      const user_ws = user_wsRef.current.value;
      const user_js = user_jsRef.current.value;
      const searchNo = searchRef.current.value;
      const searchtext = searchtextRef.current.value;
      const searchParams = new URLSearchParams();
      searchParams.set("user_jg", user_jg);
      searchParams.set("user_career", user_career);
      searchParams.set("user_ws", user_ws);
      searchParams.set("user_js", user_js);
      searchParams.set("searchNo", searchNo);
      searchParams.set("searchtext", searchtext);
      navigate(`?${searchParams.toString()}`);
      getFrlistTag(
        user_jg,
        user_career,
        user_ws,
        user_js,
        searchNo,
        searchtext
      );
    }
  };
  const handleTagChange = () => {
    const user_jg = user_jgRef.current.value;
    const user_career = user_careerRef.current.value;
    const user_ws = user_wsRef.current.value;
    const user_js = user_jsRef.current.value;
    const searchNo = searchRef.current.value;
    const searchtext = searchtextRef.current.value;
    const searchParams = new URLSearchParams();
    searchParams.set("user_jg", user_jg);
    searchParams.set("user_career", user_career);
    searchParams.set("user_ws", user_ws);
    searchParams.set("user_js", user_js);
    searchParams.set("searchNo", searchNo);
    searchParams.set("searchtext", searchtext);
    navigate(`?${searchParams.toString()}`);
    getFrlistTag(user_jg, user_career, user_ws, user_js, searchNo, searchtext);
  };

  const getFrlistTag = (
    user_jg,
    user_career,
    user_ws,
    user_js,
    searchNo,
    searchtext
  ) => {
    axios
      .post("http://localhost:8080/resume/list", {
        user_jg: user_jg || "",
        user_career: user_career || 0,
        user_ws: user_ws || "",
        user_js: user_js || "",
        user_nm: searchNo === "0" ? searchtext || "" : "",
        user_skill: searchNo === "1" ? searchtext || "" : "",
      })
      .then((res) => {
        const data = res.data;
        setFrlist(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <div className="ListOption">
        <table className="ListFilter">
          <tr>
            <td width="100px">프리랜서</td>
            <td>
              <select
                className="ListSelect"
                ref={user_jgRef}
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
                ref={user_careerRef}
                onChange={handleTagChange}
              >
                <option value={0}>근무 경력</option>
                <option value={3}>0~3년</option>
                <option value={6}>3~6년</option>
                <option value={10}>6년~10년</option>
                <option value={11}>10년 이상</option>
              </select>
            </td>
            <td>
              <select
                className="ListSelect"
                ref={user_wsRef}
                onChange={handleTagChange}
              >
                <option value="">근무 형태</option>
                <option value="work">원격근무</option>
                <option value="notwork">상주근무</option>
              </select>
            </td>
            <td>
              <select
                className="ListSelect"
                ref={user_jsRef}
                onChange={handleTagChange}
              >
                <option value="">모집 여부</option>
                <option value="work">모집가능</option>
                <option value="notwork">모집불가능</option>
              </select>
            </td>
          </tr>
        </table>
        <div className="List-search-wrapper">
          <div className="List-search-area">
            <select
              name="searchNo"
              id="id_searchNo"
              title="검색선택창"
              ref={searchRef}
            >
              <option value="0">이름</option>
              <option value="1">스킬</option>
            </select>
            <div className="List-search-box">
              <input
                type="search"
                className="List-txt"
                name="searchtext"
                id="id_searchtext"
                ref={searchtextRef}
                placeholder="검색어를 입력하세요."
                title="검색어를 입력하세요."
                onKeyDown={handleKeyPress}
              />
              <input
                type="submit"
                className="List-btn-search"
                value="검색"
                onClick={handleTagChange}
              />
            </div>
          </div>
        </div>
        <hr className="ListHr" />
      </div>

      <div>
        {frlist.map((freelist) => (
          <div
            className="ListBox"
            onClick={() => {
              navigate(`/freedetail?user_id=${freelist.user_id}`);
            }}
          >
            <div className="ListText">
              <span className="ListJobTag">#{freelist.user_jg}</span>
              <span className="ListPossible">
                {freelist.user_js === "work" ? "모집가능" : "모집불가능"}
              </span>
              <table align="center">
                <tr>
                  <td>{freelist.user_nm}</td>
                  <td className="ListBar">|</td>
                  <td>경력 {freelist.user_career}년</td>
                  <td className="ListBar">|</td>
                  <td>{freelist.user_skill.replace(/\[|\]|"/g, "")}</td>
                </tr>
                <tr>
                  <td colSpan={5} className="ListIntro">
                    " {freelist.user_intro} "
                  </td>
                </tr>
              </table>
            </div>
            {/* 태그 설정시 선택한 태그가 나타나도록 */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeList;
