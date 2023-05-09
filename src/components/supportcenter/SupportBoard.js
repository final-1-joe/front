import { useState } from "react";
import "../../css/SupportCenter.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import pdata from "./pdata";

const SupportBoard = () => {
  const [boardlist, setBoardlist] = useState([]);
  const [list, setlist] = useState([]);
  const [PageLink, setPageLink] = useState(pdata); //페이지 링크 저장
  var page_num = 0; // 페이지 번호
  const page_size = 10; // 한 페이지에 나타낼 글 수
  var page_count = 1; // 페이지 갯수
  var article_count = 0; // 총 글의 갯수

  useEffect(() => {
    getList();
  }, []);

  const handlePage = (e) => {
    page_num = e.target.id;
    getList();
  };

  const getList = () => {
    /*axios
      .get("/support/board/", { page: 0 })
      .then((res) => {
        console.log("data", res.data);
        const { data } = res;
        article_count = data;
        page_count = Math.ceil(article_count / page_size);
        var page_link = [];
        for (let i = 1; i <= page_count; i++) page_link.push(i);

        setPageLink(page_link);
      })
      .catch((e) => {
        console.error(e);
      });*/

    axios
      .get("/support/board/", {
        page: page_num,
      })
      .then((res) => {
        const data = res.data.content;
        setBoardlist(data);
        console.log("data", boardlist);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (boardlist.length === 0) {
    return (
      <div id="sc">
        <h1>고객센터</h1>
        <hr></hr>
        <div id="sc_tt">
          <Link to="/support">자주하는 질문</Link>
          <Link to="/support/board" className="sccolor">
            문의 내역
          </Link>
        </div>

        <div className="sc_bl">
          <table>
            <thead>
              <tr>
                <th className="number">번호</th>
                <th className="title">제목</th>
                <th className="date">작성자</th>
                <th className="date">등록일</th>
                <th className="answer">답변</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="sc_bl_btn">
          <div className="sc_bl_btn-right">
            <Link to="/support/supportboard/write" className="sc_bl_btn-btn">
              글쓰기
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="sc">
        <h1>고객센터</h1>
        <hr></hr>
        <div id="sc_tt">
          <Link to="/support">자주하는 질문</Link>
          <Link to="/support/supportboard" className="sccolor">
            문의 내역
          </Link>
        </div>

        <div className="sc_bl">
          <table>
            <thead>
              <tr>
                <th className="number">번호</th>
                <th className="title">제목</th>
                <th className="date">작성자</th>
                <th className="date">등록일</th>
                <th className="answer">답변</th>
              </tr>
            </thead>
            {boardlist.map((data) => (
              <tbody>
                <tr>
                  <td className="number">{data.id}</td>
                  <td className="title left">
                    <Link to={`/support/board/detail/${data.id}`}>
                      {data.subject}
                    </Link>
                  </td>
                  <td className="date">{data.writer}</td>
                  <td className="date">{data.createDate}</td>
                  <td className="answer">{data.answerList}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="sc_bl_page">
          {PageLink.map((page) => (
            <a href="#" id={page.page} onClick={handlePage}>
              {page.page}
            </a>
          ))}
        </div>
        <div className="sc_bl_btn">
          <div className="sc_bl_btn-right">
            <Link
              to="/support/supportboard/write"
              className="btn-m02 btn-color04 depth2"
            >
              글쓰기
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
export default SupportBoard;
