import { Link } from "react-router-dom";
import "../../css/List.css";

const FreeList = () => {
  return (
    <div>
      <div className="ListOption">
        <table>
          <tr>
            <td width="100px">프리랜서</td>
            <td>
              <select className="ListSelect">
                <option>직군 선택</option>
                <option>개발</option>
                <option>경영 / 비지니스</option>
                <option>마케팅 / 광고</option>
                <option>디자인</option>
                <option>미디어</option>
                <option>엔지니어링 / 설계</option>
                <option>법률 / 법집행기관</option>
                <option>기타</option>
              </select>
            </td>
            <td>
              <select className="ListSelect">
                <option>근무 기간</option>
                <option>~3개월</option>
                <option>3~6개월</option>
                <option>6개월~1년</option>
                <option>1년 이상</option>
              </select>
            </td>
            <td>
              <select className="ListSelect">
                <option>근무 형태</option>
                <option>원격</option>
                <option>상주</option>
              </select>
            </td>
          </tr>
        </table>
        <hr />
      </div>

      <div>
        <div className="ListBox">
          <Link to="/freedetail" style={{ textDecoration: "none" }}>
            <div className="ListText">
              <span className="ListJobTag">#개발</span>
              <span className="ListPossible">모집가능</span>
              <table align="center">
                <tr>
                  <td>김멀티</td>
                  <td className="ListBar">|</td>
                  <td>경력 0년</td>
                  <td className="ListBar">|</td>
                  <td>Java, Spring, jQuery, MySQL</td>
                </tr>
                <tr>
                  <td colSpan={5} className="ListIntro">
                    " 끈기와 열정이 있는 개발자 김멀티입니다. "
                  </td>
                </tr>
              </table>
            </div>
            {/* 태그 설정시 선택한 태그가 나타나도록 */}
          </Link>
        </div>
        <div className="ListBox">
          <Link to="/freedetail" style={{ textDecoration: "none" }}>
            <div className="ListText">
              <span className="ListJobTag">#개발</span>
              <span className="ListPossible">모집가능</span>
              <table align="center">
                <tr>
                  <td>박멀티</td>
                  <td className="ListBar">|</td>
                  <td>경력 00년</td>
                  <td className="ListBar">|</td>
                  <td>JavaScript, React, TypeScript, Node.js</td>
                </tr>
                <tr>
                  <td colSpan={5} className="ListIntro">
                    " 준비된 개발자 박멀티입니다. "
                  </td>
                </tr>
              </table>
            </div>
          </Link>
        </div>
        <div className="ListBox">
          <Link to="/freedetail" style={{ textDecoration: "none" }}>
            <div className="ListText">
              <span className="ListJobTag">#디자인</span>
              <span className="ListPossible">모집가능</span>
              <table align="center">
                <tr>
                  <td>이멀티</td>
                  <td className="ListBar">|</td>
                  <td>경력 0년</td>
                  <td className="ListBar">|</td>
                  <td>Illustrator, PhotoShop, AdobeXD</td>
                </tr>
                <tr>
                  <td colSpan={5} className="ListIntro">
                    " 함께 일하고 싶은 디자이너 이멀티입니다. "
                  </td>
                </tr>
              </table>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeList;
