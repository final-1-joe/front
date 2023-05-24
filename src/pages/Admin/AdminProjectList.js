import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../../css/admin.css';
import AdminSideBar from "../../components/AdminSideBar";

const AdminProjectList = () => {
    //함수
    return (
        <div className="admin-page">
            <AdminSideBar />
            <div className="main-content">
                여기에 프로젝트 리스트를 출력해야 합니다.
            </div>
        </div>
    );
};


export default AdminProjectList;