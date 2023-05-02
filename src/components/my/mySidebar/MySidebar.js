import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import MySidebarItem from "./MySidebarItem";
import "../../../css/MySidebarStyle.css";

const MySidebar = () => {
  const paths = useLocation().path;
  //const user_code = localStorage.getItem("user_code");
  const pathName = useLocation().pathname.split("/")[1];

  const freeTabs = [
    //Menus
    { name: "마이페이지 홈", path: "/free/mypage" }, //freelancer/mypage
    { name: "일정관리", path: "/free/schedule" },
    { name: "이력서관리", path: "/free/manageResume" },
    { name: "프로젝트목록", path: "/free/myproject" },
    { name: "회원정보수정", path: "/free/myinfo" },
  ];

  const clientTabs = [
    { name: "마이페이지 홈", path: "/client/mypage" },
    { name: "프로젝트관리", path: "/client/myproject" },
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
  // else if(user_code === "frelancer") {
  //   sidebarTitle = freeTabs;
  // }

  return (
    <div className="side">
      <div className="menu">
        {Tabs[pathName].map((tab, idx) => {
          return (
            <NavLink
              style={{ color: "gray", textDecoration: "none" }}
              to={tab.path}
              key={idx}
              activestyle={{ color: "black" }}
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
