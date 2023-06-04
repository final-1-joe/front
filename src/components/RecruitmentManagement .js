import React, { useState, useEffect } from "react";
import ManagementForm from "./ManagementForm";
import MySidebar from "./my/mySidebar/MySidebar";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const RecruitmentManagement = () => {
  const [freelancerData, setFreelancerData] = useState([]);
  const user = window.sessionStorage.getItem("user_id");
  //const { pj_num } = useParams(); //pj_num
  const location = useLocation();
  const pj_num = location.state.pj_num;

  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/freelistClient", {
        user_id: user,
        pj_num: pj_num,
      })
      .then((response) => {
        const modifiedData = response.data.map((item) => {
          const { pj_num, user_nm, pj_title, pj_status, user_id } = item;
          const link = `/freedetail?user_id=${user_id}`;
          return {
            id: pj_num,
            project: user_nm,
            content: pj_title,
            status: pj_status,
            freeid: user_id,
            link,
          };
        });
        setFreelancerData(modifiedData);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div className="flex">
      <MySidebar />
      <ManagementForm listData={freelancerData} Mode="Recruit" />
    </div>
  );
};

export default RecruitmentManagement;
