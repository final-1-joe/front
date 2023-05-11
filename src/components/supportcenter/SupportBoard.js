import { useState } from "react";
import "../../css/SupportCenter.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const SupportBoard = () => {
  const [boardlist, setBoardlist] = useState([]);
  const [page_num, setPage_num] = useState(1);
  const [page_maxnum, setPage_maxnum] = useState(0);
  const [pageLink, setPageLink] = useState([]);
  const page_size = 10; // 한 페이지에 나타낼 글 수

  useEffect(() => {
    getList();
    getCount();
  }, []);

  const handlePage = (page) => {
    setPage_num(page);
  };

  useEffect(() => {
    getList();
  }, [page_num]);

  const getCount = () => {
    axios
      .get("/support/board/count", {})
      .then((res) => {
        const max = Math.ceil(res.data / 10);
        setPage_maxnum(max);
        const arr = [];
        for (let i = 1; i <= max; i++) {
          arr.push(i);
        }
        setPageLink(arr);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const getList = () => {
    axios
      .post("/support/board/list", {
        page: page_num,
        limit: page_size,
      })
      .then((res) => {
        const data = res.data;
        setBoardlist(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (boardlist.length === 0 || boardlist === undefined) {
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
            <Link to="/support/board/write" className="sc_bl_btn-btn">
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
            {boardlist.map((data) => (
              <tbody>
                <tr>
                  <td className="number">{data.sbqnum}</td>
                  <td className="title left">
                    <Link to={`/support/board/detail/${data.sbqnum}`}>
                      {data.sbqsubject}
                    </Link>
                  </td>
                  <td className="date">{data.sbqwriter}</td>
                  <td className="date">{data.sbqcreateDate}</td>
                  <td className="answer">
                    {data.answerList === null ||
                    data.answerList.length === 0 ||
                    data.answerList.length === undefined ? (
                      <p>미답변</p>
                    ) : (
                      <p>답변</p>
                    )}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="sc_bl_page">
          {page_num === 1 ? (
            <></>
          ) : (
            <Link href="#" id="back" onClick={() => handlePage(page_num - 1)}>
              {"<"}
            </Link>
          )}
          {pageLink.map((page) => (
            <Link href="#" id={page} onClick={() => handlePage(page)}>
              {page}
            </Link>
          ))}
          {page_num === page_maxnum ? (
            <></>
          ) : (
            <Link href="#" id="pre" onClick={() => handlePage(page_num + 1)}>
              {">"}
            </Link>
          )}
        </div>
        <div className="sc_bl_btn">
          <div className="sc_bl_btn-right">
            <Link
              to="/support/board/write"
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
