import { useState } from "react";
import "../../css/SupportCenter.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import pdata from "./pdata";
import bldata from "./bldata";

const SupportBoard = () => {
  const [boardlist, setBoardlist] = useState(bldata);
  const navigate = useNavigate();
  const [PageLink, setPageLink] = useState(pdata); //페이지 링크 저장
  var page_num = 1; // 페이지 번호
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
    axios
      .get("/count", {})
      .then((res) => {
        const { data } = res;
        article_count = data;
        page_count = Math.ceil(article_count / page_size);
        var page_link = [];
        for (let i = 1; i <= page_count; i++) page_link.push(i);

        setPageLink(page_link);
      })
      .catch((e) => {
        console.error(e);
      });

    axios
      .post("/list", {
        page_num: page_num,
        limit: page_size,
      })
      .then((res) => {
        const { data } = res; // data = res.data

        setBoardlist(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (boardlist.length === 1) {
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
            {boardlist.map((article) => (
              <tbody>
                <tr>
                  <td className="number">{article.num}</td>
                  <td className="title left">
                    <Link
                      to="/support/supportboard/detail"
                      state={{ ctg: article.ctg, num: article.num }}
                    >
                      {article.title}
                    </Link>
                  </td>
                  <td className="date">{article.writer}</td>
                  <td className="date">{article.date}</td>
                  <td className="answer">답변</td>
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
            <Link to="/support/supportboard/write" className="sc_bl_btn-btn">
              글쓰기
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
export default SupportBoard;
