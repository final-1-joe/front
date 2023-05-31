import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../../css/admin.css';
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminClientList = () => {
    const [clientdb, setClientdb] = useState([]);

    const openlink = (url) => {
        const open = window.open(url, '_blank', 'width=1200px,height=910px,scrollbars=no');
        if (open) {
            open.document.documentElement.style.overflow = 'hidden';
        }
    };
    //함수
    const getclientdb = () => {
        axios
            .get("http://localhost:8080/auth/searchbycode?user_code=client", {})
            .then((res) => {
                const clientdata = res.data
                setClientdb(clientdata);
            })
            .catch((e) => {
                console.error(e);
            });
    }

    useEffect(() => {
        getclientdb();
    }, []);

    return (
        <div className="admin-page">
            <AdminSideBar />
            <div className="main-content">
                <h2>출력물(클라이언트리스트)</h2>
                <div id="sc">
                    <div className="sc_bl">
                        <table>
                            <thead>
                                <tr>
                                    <th className="number">아이디</th>
                                    <th className="data1">비밀번호</th>
                                    <th className="title">회사명</th>
                                    <th className="data2">번호</th>
                                    <th className="data3">사업자등록증</th>
                                    <th className="data4">정보변경</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientdb.map((data) => (
                                    
                                    <tr>
                                        <td className="number">{data.user_id}</td>
                                        <td className="data1">{data.user_pw}</td>
                                        <td className="title left">
                                            {data.user_name}
                                        </td>
                                        <td className="data1">{data.user_tel}</td>
                                        {/* 다운로드식으로 하실건지는 모르겠어요 */}
                                        <td className="data2">{data.user_orlicense}</td>
                                        <td className="data3"
                                            onClick={() => openlink(`http://localhost:3000/admin/clientedit/${data.user_id}`)}
                                        >정보변경(클릭)</td>
                                    </tr>
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