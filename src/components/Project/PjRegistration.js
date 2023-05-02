import DatePick from "./DatePick";
import "../../css/PjRegi.css";

const PjRegistration = () => {
  return (
    <div>
      <div className="register">
        <table className="registertbl" width="900px">
          <tr>
            <td className="info">프로젝트명</td>
            <td>
              <input
                type="text"
                size="60"
                placeholder="프로젝트명을 입력하세요"
              ></input>
            </td>
            <td className="info">회사명</td>
            <td>
              (주)&nbsp;&nbsp;
              <input
                type="text"
                size="30"
                placeholder="회사명을 입력하세요"
              ></input>
            </td>
          </tr>
          <tr height="200px">
            <td className="info">프로젝트 내용</td>
            <td colSpan={3}>
              <textarea
                className="content"
                placeholder="내용을 입력하세요"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="info">예상 급여</td>
            <td>
              <input type="text" placeholder="예상 급여"></input>
            </td>
            <td className="info">시작 예정일</td>
            <td>
              <DatePick />
            </td>
          </tr>
          <tr>
            <td className="info">프로젝트 기간</td>
            <td>
              <input type="text"></input>&nbsp;개월
            </td>
            <td className="info">근무 형태</td>
            <td>
              <select>
                <option>원격</option>
                <option>상주</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="info">직군</td>
            <td>
              <select className="select">
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
            <td className="info" rowSpan={2}>
              필요 스킬
            </td>
            <td rowSpan={2}>
              <input type="text" placeholder="필요 스킬을 입력하세요"></input>
              <input type="button" value="+" className="pjbtn"></input>
              {/* 임시: 필요 스킬 직접 입력 / 추후: 태그 선택하도록 구현 */}
            </td>
          </tr>
          <tr>
            <td className="info">고용 인원</td>
            <td>
              <input type="text"></input>&nbsp;&nbsp;명
            </td>
          </tr>
        </table>
        <br />
        <input type="submit" value="등록" className="pjbtn"></input>&nbsp;&nbsp;
        <input type="reset" value="취소" className="pjbtn"></input>
      </div>
    </div>
  );
};

export default PjRegistration;
