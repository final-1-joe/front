import "../css/Layout.css";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { FiBell } from "react-icons/fi";

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
    <div>
      <div id="LayoutWrapper">
        <header id="LayoutHeader">
          <div id="logoImg">
            <Link to="/">
              <img src="/images/logo.png" width="200" alt="메인" />
            </Link>
          </div>

          <div className="LayoutMember">
            <table align="center">
              <tr>
                <td width="40px">
                  <Link to="/">
                    <span>
                      <FiBell color="black" size="20px" />
                    </span>
                  </Link>
                </td>
                <td width="80px">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <span>마이페이지</span>
                  </Link>
                </td>
                <td width="80px">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <span>로그아웃</span>
                  </Link>
                </td>
              </tr>
            </table>
          </div>

          <div className="HeaderMenubar">
            <table height="60px" align="center">
              <tr>
                <td>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <span>홈</span>
                  </Link>
                </td>
                <td>
                  <Link to="/pjlist" style={{ textDecoration: "none" }}>
                    <span>프로젝트 찾기</span>
                  </Link>
                </td>
                <td>
                  <Link to="/freelist" style={{ textDecoration: "none" }}>
                    <span>프리랜서 찾기</span>
                  </Link>
                </td>
                <td>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <span>FAQ</span>
                  </Link>
                </td>
              </tr>
            </table>
          </div>
        </header>
        <section className="LayoutPosts" align="center">
          <Outlet />
        </section>
      </div>
      {/* id=wrapper */}
      {/* <footer id="LayoutFooter">
        <p id="LayoutFootertext" align="center">
          피플랜서 | 서울특별시 강남구 멀티로 111 | 02-1111-1111
          <br />
          Copyright © PEOPLANCER all right reserved.
        </p>
      </footer> */}
    </div>
  );
};

export default Layout;
