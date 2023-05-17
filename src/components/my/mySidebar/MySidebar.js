import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import MySidebarItem from "./MySidebarItem";
import "../../../css/MySidebarStyle.css";

const MySidebar = () => {
  const paths = useLocation().path;
  //const user_code = localStorage.getItem("user_code");
  //const user_code = window.sessionStorage("user_code");
  const pathName = useLocation().pathname.split("/")[1];

  const freeTabs = [
    //Menus
    { name: "마이페이지 홈", path: "/free/mypage" }, //freelancer/mypage
    { name: "일정관리", path: "/free/calendar" },
    { name: "이력서관리", path: "/free/resumemypage" },
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

  // if (user_code === "client") {
  //   sidebarTitle = clientTabs;
  // }
  // else if(user_code === "freelancer") {
  //   sidebarTitle = freeTabs;
  // }

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
