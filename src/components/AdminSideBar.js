import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/admin.css";

const AdminSideBar = () => {

    const navigate = useNavigate();

    const freelancerclick = () => {
        navigate('/admin/free');
    };

    const clientclick = () => {
        navigate('/admin/client');
    };
    const projectclick = () => {
        navigate('/admin/project')
    };

    return (
        <div className="sidebar-admin">
            <h3>관리자님, 환영합니다</h3>
            <h4 onClick={freelancerclick}>유저 리스트</h4>
            <h4 onClick={clientclick}>클라이언트 리스트</h4>
            <h4 onClick={projectclick}>프로젝트 리스트</h4>
            <h4>고객센터 리스트</h4>
            <div>
                <p>
                    <Link to="/admin/sca">┖ 답변</Link>
                </p>
                <p>
                    <Link to="/admin/scna">┖ 미답변</Link>
                </p>
            </div>
        </div>
    );
}
export default AdminSideBar;

