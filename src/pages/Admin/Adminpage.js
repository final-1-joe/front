import React from "react";
import '../../css/admin.css';
import AdminSideBar from "../../components/Admin/AdminSideBar";


const Adminpage = () => {

  return (
    <div className="admin-page">
      <AdminSideBar />
      <div className="main-content">
        여기에 디폴트 리스트를 출력해야 합니다.
      </div>
    </div>
  );
};

export default Adminpage;
