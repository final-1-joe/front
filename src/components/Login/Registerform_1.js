import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Registerform_1 = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isMatch, setIsMatch] = useState(true);
  const idRef = useRef();
  const pwRef = useRef();
  const pwConfirmRef = useRef();
  const coRef = useRef();
  const bthRef = useRef();
  const emailRef = useRef();
  const phRef = useRef();
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  const [isIdExist, setIsIdExist] = useState(false);


  const handleCheck = () => {
    axios
      .get(`http://localhost:8080/user/checkMember?user_id=${idRef.current.value}`)
      .then((res) => {
        if (res.data === 1) {
          alert("중복되는 아이디입니다");
        } else {
          alert("생성이 가능한 아이디입니다");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleIdKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode === 33 || charCode === 35 || charCode === 36 || charCode === 37 || charCode === 38 || charCode === 42 || charCode === 43 || charCode === 64) {
      event.preventDefault();
    }
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsMatch(event.target.value === passwordConfirm);
    
    const password = event.target.value;

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-]).{8,16}$/;
    const isValidPassword = regex.test(password);

    if (isValidPassword) {
      // 비밀번호 유효성 검사 통과
    } else {
      // 비밀번호 유효성 검사 실패
    }
  };

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    
     // 11자리 전화번호를 다 입력하지 않은 경우, 입력만 받고 검사를 하지 않습니다.
  if (inputPhoneNumber.length < 11) {
    setPhoneNumber(inputPhoneNumber);
  }
  // 11자리 전화번호를 다 입력한 경우, 검사 수행
  else if (inputPhoneNumber.length === 11) {

  const regex = /^[0-9]{10,11}$/;
  if (!regex.test(inputPhoneNumber)) {
    alert('전화번호는 10자리 또는 11자리의 숫자로만 입력해주세요.');
    return;
  }

  const regex2 = /^[0-9]*$/;
  if (!regex2.test(inputPhoneNumber)) {
    alert('전화번호는 숫자로만 입력해주세요.');
    return;
  }
  const phoneNumberPattern = /^(01[0|1|6|7|8|9])(\d{3,4})(\d{4})$/;
  if (!phoneNumberPattern.test(inputPhoneNumber)) {
  alert('전화번호를 다시 입력해주세요. (예: 01012345678)');
  return;
}

  // 전화번호 저장
  setPhoneNumber(inputPhoneNumber);
  }
}

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
    setIsMatch(event.target.value === password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === passwordConfirm) {
      console.log('비밀번호 일치');
    } else {
      console.log('비밀번호 불일치');
    }
  };
  const handleMember = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("이이디를 입력하세요!");
      idRef.current.focus();
      return false;
    }

    if (isIdExist) {
      alert("이미 존재하는 아이디입니다!");
      idRef.current.focus();
      return false;
    }

    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("패스워드를 입력하세요!");
      pwRef.current.focus();
      return false;
    }

    if (coRef.current.value === "" || coRef.current.value === undefined) {
      alert("상호 명을 입력하세요!");
      coRef.current.focus();
      return false;
    }

    if (emailRef.current.value === "" || emailRef.current.value === undefined) {
      alert("이메일을 입력하세요!");
      emailRef.current.focus();
      return false;
    }

    if (bthRef.current.value === "" || bthRef.current.value === undefined) {
      alert("생년월일을 입력하세요!");
      bthRef.current.focus();
      return false;
    }

    if (phRef.current.value === "" || phRef.current.value === undefined) {
      alert("이메일을 입력하세요!");
      phRef.current.focus();
      return false;
    }

    axios
      .post("/insertMember", {
        id: idRef.current.value,
        pw: pwRef.current.value,
        co: coRef.current.value,
        email: emailRef.current.value,
        bth: bthRef.current.value,
        ph: phRef.current.value,
        
      })
      .then((res) => {
        console.log("handleMember =>", res);
        console.log("handleMember((res.data) =>", res.data);
        if (res.data === 1) {
          alert("회원가입 성공!");
          navigate("/");
        } else {
          alert("회원가입 실패!");
          navigate("/member");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <center>
      <h1>클라이언트 회원가입</h1>
      <p>&nbsp;&nbsp;</p>
      <form onSubmit={handleSubmit}>
        <table border="0" width="300px" align="center">
        <hr />
        <tr>
          <td style={{ fontSize: '20px' }}>아이디
          <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
          </td>
        </tr>
        <tr>
          <td align="left" colspan="2">
            <input type="text"
                  name="id"
                  size="40"
                  ref={idRef}
                  maxLength="12"
                  placeholder="아이디를 입력하세요(최대 12자)"
                  style={{ fontSize: '20px' }}
                  onKeyPress={handleIdKeyPress} />
                  <h>&nbsp;&nbsp;</h>
                  <button type="button" style={{ width:'100px', height:'40px', backgroundColor: '#ffe68b', fontSize: '18px', border: 'none' }}
                  onClick={handleCheck}>
                  중복확인
                  </button>
          </td>
        </tr>
        <p>&nbsp;&nbsp;</p>
        <tr>
            <td style={{ fontSize: '20px' }}>비밀번호
            <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
          </td>
          </tr>
          <tr>
            <td align="left" colspan="2">
            <input type="password"
                  name="id"
                  size="45"
                  minLength="8"
                  maxLength="16"
                  ref={pwRef}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="비밀번호를 입력하세요(8~16자리, 특수문자 가능)"
                  style={{ fontSize: '20px', border:'none' }} />
            </td>
          </tr>
          <p>&nbsp;&nbsp;</p>
        <tr>
            <td style={{ fontSize: '20px' }}>비밀번호 확인
            <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
          </td>
          </tr>
          <tr>
            <td align="left" colspan="2">
              <input
                type="password"
                name="password-confirm"
                size="40"
                ref={pwConfirmRef}
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
                placeholder="비밀번호를 다시 입력하세요"
                style={{ fontSize: '20px', border: 'none' }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: '15px', color: isMatch ? 'green' : 'red' }}>
              {isMatch ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
            </td>
          </tr>
          <p>&nbsp;&nbsp;</p>
        <tr>
            <td style={{ fontSize: '20px' }}>상호 명
            <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
          </td>
          </tr>
          <tr>
            <td align="left" colspan="2">
              <input type="text"
                    name="id"
                    size="40"
                    ref={coRef}
                    placeholder="상호 명을 입력하세요"
                    style={{ fontSize: '20px' }} />
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: '20px' }}>사업자 등록증 파일
              <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
            </td>
          </tr>
          <tr>
            <td align="left" colspan="2">
              <input
                type="file"
                name="businessLicense"
                accept=".pdf,.jpg,.jpeg,.png"
                style={{ fontSize: '20px' }}
              />
            </td>
          </tr>
          <p>&nbsp;&nbsp;</p>
          <tr>
            <td style={{ fontSize: '20px' }}>생년월일
            <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
          </td>
          </tr>
          <tr>
            <td align="left" colspan="2">
              <input type="text"
                    name="id"
                    size="40"
                    ref={bthRef}
                    placeholder="YYYYMMDD"
                    style={{ fontSize: '20px' }} />
            </td>
          </tr>
          <p>&nbsp;&nbsp;</p>
          <tr>
            <td style={{ fontSize: '20px' }}>이메일
            <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
          </td>
          </tr>
          <tr>
            <td align="left" colspan="2">
              <input type="text"
                    name="id"
                    size="40"
                    ref={emailRef}
                    placeholder="ex) email@peoplancer.com"
                    style={{ fontSize: '20px' }} />
            </td>
          </tr>
          <p>&nbsp;&nbsp;</p>
          <tr>
          <td style={{ fontSize: '20px' }}>
            <label htmlFor="phone-number-input">전화번호 </label>
            <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
          </td>
          </tr>
          <tr>
            <td align="left" colspan="2">
              <input type="text"
                    id="phone-number-input"
                    name="phoneNumber"
                    ref={phRef}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    size="40"
                    placeholder="-빼고 숫자만 입력해주세요"
                    style={{ fontSize: '20px' }} />
            </td>
          </tr>
          <p>&nbsp;&nbsp;</p>
          <tr>
            <td align="left" colspan="2" style={{ fontSize: '15px'}}>
              <label style={{ display: 'inline-block'}}>
              <input type="checkbox" name="agreement" value="agree" required style={{ width: '20px', height: '20px' }} />
              &nbsp; 서비스 이용약관에 동의합니다.
              <span style={{ color: 'red', marginLeft: '5px' }}>(필수)</span>
              </label>
            </td>
          </tr>
          <tr>
            <td align="left" colspan="2" style={{ fontSize: '15px'}}>
              <label style={{ display: 'inline-block'}}>
              <input type="checkbox" name="agreement" value="agree" required style={{ width: '20px', height: '20px' }} />
              &nbsp; 개인정보 수집・이용에 동의합니다.
              <span style={{ color: 'red', marginLeft: '5px' }}>(필수)</span>
              </label>
            </td>
          </tr>
          <tr>
            <td align="left" colspan="2" style={{ fontSize: '15px'}}>
              <label style={{ display: 'inline-block'}}>
              <input type="checkbox" name="agreement" value="agree" style={{ width: '20px', height: '20px' }} />
              &nbsp; 마케팅 수신・홍보 목적의 개인정보 수집 및 이용에 동의합니다. (선택)
              </label>
            </td>
          </tr>
          <p>&nbsp;&nbsp;</p>
          <tr>
            <td colSpan="2" align="center" style={{ fontSize: '20px' }}>
              <input
                type="button"
                value="버튼만 누르면 회원가입 완료!"
                onClick={handleMember}
                style={{ width: '300px', height:'60px', backgroundColor: '#ffe68b', border: 'none' }}
              ></input>
            </td>
          </tr>
          <p>&nbsp;&nbsp;</p>
          <hr />
          <p>&nbsp;&nbsp;</p>
              <tr>
                <td colSpan="2" align="center">
                  <h4>이미 Peoplancer 회원님이신가요? &nbsp;
                    <Link to="/Loginform">로그인하기</Link>
                  </h4>
                </td>
              </tr>
        </table>
      </form>
      </center>
    </div>
  );
};

export default Registerform_1;
