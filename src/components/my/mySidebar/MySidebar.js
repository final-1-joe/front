import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MySidebarItem from "./MySidebarItem";
import "../../../css/MySidebarStyle.css";
import axios from "axios";

const MySidebar = () => {
  const paths = useLocation().path;
  //const [userCode, setUserCode] = useState("");
  const pathName = useLocation().pathname.split("/")[1];

  // useEffect(() => {
  //   const fetchUserCode = async () => {
  //     try {
  //       const userId = window.sessionStorage.getItem("user_id");
  //       const response = await axios.get(
  //         `http://localhost:8080/auth/user_code?user_id=${userId}`
  //       );
  //       const userCode = response.data;
  //       window.sessionStorage.setItem("user_code", userCode);
  //       setUserCode(userCode);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchUserCode();
  // }, []);

  const freeTabs = [
    { name: "마이페이지 홈", path: "/free/mypage" },
    { name: "일정관리", path: "/free/calendar" },
    { name: "이력서관리", path: "/free/myresume" },
    { name: "프로젝트목록", path: "/free/myproject" },
    { name: "회원정보수정", path: "/free/myinfo" },
  ];

  const clientTabs = [
    { name: "마이페이지 홈", path: "/client/mypage" },
    { name: "프로젝트관리", path: "/client/project" },
    { name: "모집현황", path: "/client/recruit" },
    { name: "회원정보수정", path: "/client/myinfo" },
  ];

  const Tabs = {
    client: clientTabs,
    free: freeTabs, //freelancer
  };

  // let sidebarTitle = "";

  // if (userCode === "client") {
  //   sidebarTitle = clientTabs;
  // } else if (userCode === "free") {
  //   sidebarTitle = freeTabs;
  // }
  //sidebarTitle.map Tabs[pathName]
  return (
    <div className="myside">
      <div className="mymenu">
        {Tabs[pathName].map((tab, index) => {
          return (
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "black" : "gray",
                textDecoration: "none",
              })}
              to={tab.path}
              key={index}
            >
              <MySidebarItem
                tab={tab}
                isActive={paths === tab.path ? true : false}
              />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MySidebar;
