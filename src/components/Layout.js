import "../css/Layout.css";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  //   var login_check = false;
  //   const login_id = window.sessionStorage.getItem("id");
  //   if (login_id === null) {
  //     login_check = false;
  //   } else {
  //     login_check = true;
  //   }

  //   const navigate = useNavigate();
  //   const handleLogout = () => {
  //     window.sessionStorage.clear(); // 세션스토리지에 저장된 속성값 모두 삭제

  //     navigate("/");
  //   };
  return (
    <div id="layout">
      <div id="wrapper">
        <header>
          <div id="logo">
            <Link to="/">
              <img src="/images/logo.png" width="200" alt="메인" />
            </Link>
          </div>
          <div id="bell">
            <Link to="/">
              <img src="/images/bell.png" width="35" alt="알림"></img>
            </Link>
          </div>

          <div>
            <ul className="memberbtn">
              <li className="member">
                <Link to="/" style={{ textDecoration: "none" }}>
                  마이페이지
                </Link>
              </li>
              <li className="member">
                <Link to="/" style={{ textDecoration: "none" }}>
                  회원가입
                </Link>
              </li>
            </ul>
          </div>
          <div className="menubar">
            <ul>
              <li className="menu">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span className="menu">홈</span>
                </Link>
              </li>
              <li className="menu">
                <Link to="/pjlist" style={{ textDecoration: "none" }}>
                  <span className="menu">프로젝트 찾기</span>
                </Link>
              </li>
              <li className="menu">
                <Link to="/freelist" style={{ textDecoration: "none" }}>
                  <span className="menu">프리랜서 찾기</span>
                </Link>
              </li>
              <li className="menu">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span className="menu">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <section className="posts" align="center">
          <Outlet />
        </section>
      </div>
      {/* id=wrapper */}
      {/* <footer>
        <p id="footertext" align="center">
          피플랜서 | 서울특별시 강남구 멀티로 111 | 02-1111-1111
          <br />
          Copyright © PEOPLANCER all right reserved.
        </p>
      </footer> */}
    </div>
  );
};

export default Layout;
