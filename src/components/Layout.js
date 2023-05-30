import "../css/Layout.css";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = ({ isLoggedIn, handleLogout, onLogin }) => {

  const [user_id, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUserId = window.sessionStorage.getItem("user_id");
    setUserId(loggedInUserId);
    console.log(user_id);
    if (user_id == null) {
      handleLogout();
    } else {
      onLogin();
    }

  }, [user_id, isLoggedIn]);


  const Logout = () => {
    window.sessionStorage.clear();

    setUserId("");
    handleLogout();
    navigate("/");
  };

  return (
    <div id="Layout">
      <div id="Layoutwrapper">
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
              {isLoggedIn ? (
                <>
                  <li className="member">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      마이페이지
                    </Link>
                  </li>
                  <li className="member">
                    <button onClick={Logout} style={{ backgroundColor: 'transparent', border: 'none', fontSize: "16px" }}>&nbsp;&nbsp;로그아웃</button>
                  </li>
                  <li className="welcome-message" style={{ fontSize: "17px" }}>{user_id} 회원님, 환영합니다!</li>

                </>
              ) : (
                <>
                  <li className="member">
                    <Link to="/loginform" style={{ textDecoration: "none" }}>
                      로그인
                    </Link>
                  </li>
                  <li className="member">
                    <Link to="/Loginselect" style={{ textDecoration: "none" }}>
                      회원가입
                    </Link>
                  </li>
                </>
              )}
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