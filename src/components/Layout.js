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
    <div id="Layout">
      <div id="LayoutWrapper">
        <header id="LayoutHeader">
          <div id="LayoutLogo">
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
                <Link to="/support" style={{ textDecoration: "none" }}>
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

      <footer id="LayoutFooter">
        <center id="LayoutFooterCenter">
          {/* <table>
            <tr>
              <td>
                <div class="logo">
                  <Link to="/">
                    <img src="/images/logo2.PNG" width="200" alt="프리랜서" />
                  </Link>
                </div>
              </td>
              <td>
                <div id="LayoutFooterText">
                  <h4>대표: 김성만</h4>
                  <p></p>
                  <h4>피플랜서 | 서울특별시 강남구 멀티로 111</h4>
                  <p></p>
                  <h4>
                    고객센터 02-2244-7272(평일 09:00~18:00, 주말·공휴일 휴무)
                  </h4>
                  <p></p>
                  <h4>Copyright © PEOPLANCER all right reserved.</h4>
                </div>
              </td>
            </tr>
          </table> */}
          <table>
            <tr>
              <td rowSpan={4}>
                <div class="logo">
                  <Link to="/">
                    <img src="/images/logo2.PNG" width="200" alt="프리랜서" />
                  </Link>
                </div>
              </td>
              <td>대표: 김성만</td>
            </tr>
            <tr>
              <td>피플랜서 | 서울특별시 강남구 멀티로 111</td>
            </tr>
            <tr>
              <td>고객센터 02-2244-7272(평일 09:00~18:00, 주말·공휴일 휴무)</td>
            </tr>
            <tr>
              <td>Copyright © PEOPLANCER all right reserved.</td>
            </tr>
          </table>
        </center>
      </footer>
    </div>
  );
};

export default Layout;
