import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../../css/admin.css';
import AdminSideBar from "../../components/AdminSideBar";

const AdminClientList = () => {
    //함수
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
                                    <th className="number">번호</th>
                                    <th className="title">데이터 제목</th>
                                    <th className="data1">데이터1</th>
                                    <th className="data2">데이터2</th>
                                    <th className="data3">데이터3</th>
                                </tr>
                            </thead>
                            {/* 여기에 .map써서 리스트 추가 */}
                            <tbody>
                                <tr>
                                    <td className="number">데이터 번호</td>
                                    <td className="title left">
                                        <Link to={`/admin/client`}>
                                            데이터 제목, 링크 업데이트 해야함
                                        </Link>
                                    </td>
                                    <td className="data1">필요한 데이터 정보 1</td>
                                    <td className="data2">필요한 데이터 정보 2</td>
                                    <td className="data3">필요한 데이터 정보 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminClientList;