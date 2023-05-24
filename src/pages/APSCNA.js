import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/admin.css";

//매칭율 확인?? 부분을 그래프처럼 생각중
const APSCNA = () => {
  const [customerclick, setCustomerclick] = useState(true);
  const [customerRender, setCustomerRender] = useState(false);
  //customer데이터 가져오기(임시)
  const [customerdb, setCustomerdb] = useState([]);
  const [page_num, setPage_num] = useState(1);
  const [page_maxnum, setPage_maxnum] = useState(0);
  const [pageLink, setPageLink] = useState([]);
  const page_size = 10;
  const getcustomerdb = () => {
    axios
      .get("http://localhost:8080/support/board/nacount", {})
      .then((res) => {
        console.log("res", res);
        const max = Math.ceil(res.data / page_size);
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

    axios
      .post("http://localhost:8080/support/board/nalist", {
        page: page_num,
        limit: page_size,
      })
      .then((customerres) => {
        const customerdata = customerres.data;
        setCustomerdb(customerdata);
        console.log(customerres);
        setCustomerRender(true);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getcustomerdb();
  }, [page_num]);

  const handlecustomerclick = () => {
    if (customerclick === false) {
      setCustomerclick(true);
    } else {
      setCustomerclick(false);
    }
  };

  return (
    <div className="admin-page">
      <div className="sidebar-admin">
        <h3>관리자님, 환영합니다</h3>
        <h4>유저 리스트</h4>
        <h4>클라이언트 리스트</h4>
        <h4>프로젝트 리스트</h4>
        <h4 onClick={handlecustomerclick}>고객센터 리스트</h4>
        {customerclick ? (
          <div>
            <Link to="/admin/sca">
              <p>┖ 답변</p>
            </Link>

            <Link to="/admin/scna">
              <p>┖ 미답변</p>
            </Link>
          </div>
        ) : null}
      </div>
      <div>
        <h2>고객센터 미답변 리스트</h2>
        <div id="sc">
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
              {customerdb.map((data) => (
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
              <Link
                href="#"
                id="back"
                onClick={() => setPage_num(page_num - 1)}
              >
                {"<"}
              </Link>
            )}
            {pageLink.map((page) => (
              <Link href="#" id={page} onClick={() => setPage_num(page)}>
                {page}
              </Link>
            ))}
            {page_num === page_maxnum ? (
              <></>
            ) : (
              <Link href="#" id="pre" onClick={() => setPage_num(page_num + 1)}>
                {">"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default APSCNA;
