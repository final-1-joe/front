import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../css/admin.css";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import FileSaver from "file-saver";

const AdminClientList = () => {
  const [clientdb, setClientdb] = useState([]);
  const [edit, setEdit] = useState("");
  const [editpw, setEditpw] = useState("");
  const [editemail, setEditemail] = useState("");
  const [editname, setEditname] = useState("");
  const [edittel, setEdittel] = useState("");
  const [render, setrender] = useState(false);
  const [user, setuser] = useState("");
  const formData = new FormData();
  const nameChange = (e) => {
    setEditname(e.target.value);
  };
  const telChange = (e) => {
    setEdittel(e.target.value);
  };
  const emailChange = (e) => {
    setEditemail(e.target.value);
  };
  const pwChange = (e) => {
    setEditpw(e.target.value);
  };

  const handleDeleteMember = (e) => {
    e.preventDefault();

    const confirmResult = window.confirm(
      "정말로 삭제하시겠습니까? \n확인을 누르시면 해당 유저의 데이터가 삭제됩니다."
    );

    if (confirmResult) {
      axios
        .post("http://localhost:8080/auth/delete", null, {
          params: {
            user_id: user,
          },
        })
        .then((response) => {
          console.log(response.data);
          alert("해당 유저의 회원탈퇴가 완료되었습니다.");
          setrender(!render);
        })
        .catch((error) => {
          console.error(error);
          alert("회원탈퇴가 취소되었습니다");
        });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmResult = window.confirm(
      "정말로 수정하시겠습니까? \n확인을 누르시면 해당 유저의 데이터가 수정됩니다."
    );
    if (confirmResult) {
      axios
        .post("http://localhost:8080/auth/updateuser", {
          user_id: user,
          user_pw: editpw,
          user_name: editname,
          user_email: editemail,
          user_tel: edittel,
        })
        .then((response) => {
          console.log(response);
          alert("회원정보가 변경되었습니다");
          setEdit("");
          setrender(!render);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getclientdb = () => {
    axios
      .get("http://localhost:8080/auth/searchbycode?user_code=client", {})
      .then((res) => {
        const clientdata = res.data;
        setClientdb(clientdata);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getclientdb();
  }, [render]);

  const getlicense = (user_orlicense, user_stlicense) => {
    formData.append("originfilename", user_orlicense);
    formData.append("storedfilename", user_stlicense);
    axios
      .post("http://localhost:8080/resume/download", formData, {
        responseType: "blob",
      })
      .then((res) => {
        console.log(res.data);
        FileSaver.saveAs(res.data, user_orlicense);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="admin-page">
      <AdminSideBar />
      <div className="main-content">
        <div id="sc">
          <h2>출력물(클라이언트리스트)</h2>
          <div className="sc_bl">
            <table>
              <thead>
                <tr>
                  <th className="number">아이디</th>
                  <th className="data1">비밀번호</th>
                  <th className="title">회사명</th>
                  <th className="data2">번호</th>
                  <th className="data3">이메일</th>
                  <th>사업자등록증</th>
                  <th className="data4"></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {clientdb.map((data) => (
                  <>
                    <tr>
                      <td className="number">{data.user_id}</td>
                      <td className="pass">
                        {/* 비밀번호 */}
                        {edit === data.user_id ? (
                          <td>
                            <input
                              type="text"
                              name="user_name"
                              value={editpw || ""}
                              onChange={pwChange}
                            />
                          </td>
                        ) : (
                          <td className="data1">{data.user_pw}</td>
                        )}
                      </td>
                      {/* 이름 */}
                      {edit === data.user_id ? (
                        <td>
                          <input
                            type="text"
                            name="user_name"
                            value={editname || ""}
                            onChange={nameChange}
                          />
                        </td>
                      ) : (
                        <td className="data1">{data.user_name}</td>
                      )}
                      {/* 번호 */}
                      {edit === data.user_id ? (
                        <td>
                          <input
                            type="text"
                            name="user_tel"
                            value={edittel || ""}
                            onChange={telChange}
                          />
                        </td>
                      ) : (
                        <td className="data2">{data.user_tel}</td>
                      )}
                      {/* 이메일 */}
                      {edit === data.user_id ? (
                        <td>
                          <input
                            type="text"
                            name="user_email"
                            value={editemail || ""}
                            onChange={emailChange}
                          />
                        </td>
                      ) : (
                        <td className="data2">{data.user_email}</td>
                      )}
                      {/* 사업자등록증 */}
                      <td
                        className="data2"
                        onClick={() =>
                          getlicense(data.user_orlicense, data.user_stlicense)
                        }
                      >
                        <Link>{data.user_orlicense}</Link>
                      </td>
                      {edit === data.user_id ? (
                        <td
                          className="data3"
                          onClick={(e) => {
                            handleSubmit(e);
                          }}
                        >
                          수정완료(클릭)
                        </td>
                      ) : (
                        <td
                          className="data3"
                          onClick={() => {
                            setEdit(`${data.user_id}`);
                            setuser(data.user_id);
                            setEditname(data.user_name);
                            setEdittel(data.user_tel);
                            setEditpw(data.user_pw);
                            setEditemail(data.user_email);
                          }}
                        >
                          수정(클릭)
                        </td>
                      )}

                      <td
                        className="data4"
                        onClick={(e) => {
                          setuser(data.user_id);
                          handleDeleteMember(e);
                        }}
                      >
                        삭제&nbsp;&nbsp;&nbsp;
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminClientList;
