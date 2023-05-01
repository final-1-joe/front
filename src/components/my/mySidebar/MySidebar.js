import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Side, Menu } from "./MySidebar.styled";
import MySidebarItem from "./MySidebarItem";

const MySidebar = () => {
  const paths = useLocation().pathname;
  //const user_code = localStorage.getItem("user_code");
  const pathName = useLocation().pathname.split("/")[1];

  const freeTabs = [
    //Menus
    { name: "마이페이지 홈", path: "/freelancer/mypage" }, //freelancer/mypage
    { name: "일정관리", path: "/freelancer/schedule" },
    { name: "이력서관리", path: "/freelancer/manageResume" },
    { name: "프로젝트목록", path: "/freelancer/myproject" },
    { name: "회원정보수정", path: "/freelancer/myinfo" },
  ];

  const clientTabs = [
    { name: "메뉴", path: "/client/mypage" },
    { name: "프로젝트관리", path: "/client/myproject" },
    { name: "모집현황", path: "/client/recruit" },
    { name: "회원정보수정", path: "/client/myinfo" },
  ];

  const Tabs = {
    client: clientTabs,
    freelancer: freeTabs,
  };

  // let sidebarTitle = "";

  // if (user_code === "client") {
  //   sidebarTitle = clientTabs;
  // }
  // else if(user_code === "frelancer") {
  //   sidebarTitle = freeTabs;
  // }

  return (
    <Side>
      <Menu>
        {Tabs[pathName].map((tab, index) => {
          return (
            <NavLink
              style={{ color: "gray", textDecoration: "none" }}
              to={tab.path}
              key={index}
              activeStyle={{ color: "black" }}
            >
              <MySidebarItem
                tab={tab}
                isActive={paths === tab.path ? true : false}
              />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
};

export default MySidebar;
