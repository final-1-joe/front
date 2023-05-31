import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../../css/admin.css';
import AdminSideBar from "../../components/AdminSideBar";

const AdminUserList = () => {
    //함수
    const [freedb, setFreedb] = useState([]);

    const openlink = (url) => {
        const open = window.open(url, '_blank', 'width=900px,height=910px,scrollbars=no');
        if (open) {
            open.document.documentElement.style.overflow = 'hidden';
        }
    };

    const getfreelancerdb = () => {
        axios
            .get("http://localhost:8080/auth/searchbycode?user_code=free", {})
            .then((res) => {
                const freedata = res.data
                setFreedb(freedata);
            })
            .catch((e) => {
                console.error(e);
            });
    }

    useEffect(() => {
        getfreelancerdb();
    }, []);

    return (
        <div className="admin-page">
            <AdminSideBar />
            <div className="main-content">
                <h2>출력물(프리랜서리스트)</h2>
                <div id="sc">
                    <div className="sc_bl">
                        <table>
                            <thead>
                                <tr>
                                    <th className="number">아이디</th>
                                    <th className="title">이름</th>
                                    <th className="data1">비밀번호</th>
                                    <th className="data2">번호</th>
                                    <th className="data3">정보변경</th>
                                </tr>
                            </thead>
                            <tbody>
                                {freedb.map((data) => (
                                    <tr>
                                        <td className="number">{data.user_name}</td>
                                        <td className="title left">
                                            <Link to={`/admin/free`}>
                                                데이터 제목, 링크 업데이트 해야함
                                            </Link>
                                        </td>
                                        <td className="data1">{data.user_email}</td>
                                        <td className="data2">{data.user_tel}</td>
                                        <td className="data3"
                                            onClick={() => openlink(`http://localhost:3000/free/calendar/${data.user_id}`)}
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

export default AdminUserList;