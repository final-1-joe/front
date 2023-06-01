import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/admin.css";

const AdminSideBar = () => {
    const navigate = useNavigate();
    const userid = window.sessionStorage.getItem("user_id");
    const admincheck = () => {
        if (userid !== 'admin') {
            navigate("/");
        }
    }

    const freelancerclick = () => {
        navigate('/admin/free');
    };

    const clientclick = () => {
        navigate('/admin/client');
    };
    const projectclick = () => {
        navigate('/admin/project');
    };
    const mainclick = () => {
        navigate('/admin');
    }
    useEffect(() => {
        admincheck();
    }, []);

    return (
        <div className="sidebar-admin">
            <h3>관리자님, 환영합니다</h3><hr />
            <h4 onClick={mainclick}>어드민 메인 페이지(통계)</h4>
            <h4 onClick={freelancerclick}>프리랜서 리스트</h4>
            <h4 onClick={clientclick}>클라이언트 리스트</h4>
            <h4 onClick={projectclick}>프로젝트 리스트</h4>
            <h4>고객센터 리스트</h4>
            <div>
                <Link to="/admin/sca">
                    <p>
                        ┖ 답변
                    </p>
                </Link>
                <Link to="/admin/scna">
                    <p>
                        ┖ 미답변
                    </p>
                </Link>
            </div>
        </div >
    );
}
export default AdminSideBar;

