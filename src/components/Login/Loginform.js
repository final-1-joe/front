import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("아이디를 입력하세요!");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("패스워드를 입력하세요!");
      pwRef.current.focus();
      return false;
    }

    axios
      .post("/login", {
        id: idRef.current.value,
        pw: pwRef.current.value,
      })
      .then((res) => {
        console.log("handleLogin =>", res);
        if (res.data === 1) {
          window.sessionStorage.setItem("id", idRef.current.value);
          navigate("/home");
        } else {
          navigate("/");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const Loginselect = () => {
    navigate("/Loginselect");
  };

  return (
    <div>
      
      <center>
      <h1>로그인</h1>
      <p>&nbsp;&nbsp;</p>
      <form>
        <table border="0" width="300px" align="center" hight="50px">
        <hr/>
        <tr>
          <td style={{ fontSize: '20px' }}> 아이디</td>
        </tr>
        <tr>
          <td align="left" colspan="2">
            <input type="text"
                  name="id"
                  size="40"
                  ref={idRef}
                  placeholder="아이디를 입력하세요"
                  style={{ fontSize: '20px' }} />
          </td>
        </tr>
        <p>&nbsp;&nbsp;</p>
          <tr>
            <td style={{ fontSize: '20px' }}> 패스워드</td>
          </tr>
          <tr>
            <td align="left" colspan="2">
              <input type="text"
                    name="id"
                    size="40"
                    ref={idRef}
                    placeholder="비밀번호를 입력하세요"
                    style={{ fontSize: '20px' }} />
            </td>
          </tr>
          <p>&nbsp;&nbsp;</p>
          <tr>
            <td colSpan="2" align="center">
              <input
                type="button"
                value="로그인"
                onClick={handleLogin}
                style={{ width: '150px', height: '50px', backgroundColor: '#ffe68b', fontSize: '20px', border: 'none' }}
              />
              &nbsp;&nbsp;
              <input
                type="button"
                value="회원가입"
                onClick={Loginselect}
                style={{ width: '150px', height: '50px', backgroundColor: '#ffe68b', fontSize: '20px', border: 'none' }}
              />
              <p>&nbsp;&nbsp;</p>
              <hr/>
            </td>
          </tr>
        </table>
      </form>
      </center>
    </div>
  );
};

export default Loginform;
