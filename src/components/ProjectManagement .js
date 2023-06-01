import React, { useState, useEffect } from "react";
import ManagementForm from "./ManagementForm";
import MySidebar from "./my/mySidebar/MySidebar";
import axios from "axios";

const ProjectManagement = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const user = window.sessionStorage.getItem("user_id");

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/pjlistClient", {
        params: { user_id: user },
      })
      .then((response) => {
        const modifiedData = response.data.map((item) => {
          const { pj_num, pj_title, pj_content, pj_status } = item;
          const link = `/pjlist/pjdetail/${pj_num}`;
          return {
            id: pj_num,
            project: pj_title,
            content: pj_content,
            status: pj_status,
            link,
          };
        });
        setScheduleData(modifiedData);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div>
      <div className="flex">
        <MySidebar />
        <ManagementForm listData={scheduleData} />
      </div>
    </div>
  );
};

export default ProjectManagement;
