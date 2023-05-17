import { useNavigate } from "react-router-dom";
import dummy from "./FreeDummyData.json";
import "../../css/List.css";

const FreeList = () => {
  const navigate = useNavigate();

  // const handleDetailPage = ({ dummy }) => {
  //   navigate("/freedetail", {
  //     state: {
  //       id: `${dummy.freelancers.id}`,
  //       name: `${dummy.freelancers.name}`,
  //       pay: `${dummy.freelancers.pay}`,
  //       workSys: `${dummy.freelancers.workSys}`,
  //       workForm: `${dummy.freelancers.workForm}`,
  //       jobGroup: `${dummy.freelancers.jobGroup}`,
  //       skills: `${dummy.freelancers.skills}`,
  //       career: `${dummy.freelancers.career}`,
  //       introduce: `${dummy.freelancers.introduce}`,
  //     },
  //   });
  // };

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
        {dummy.freelancers.map((freelist) => (
          <div
            className="ListBox"
            onClick={() => {
              navigate("/freedetail");
            }}
          >
            <div className="ListText">
              <span className="ListJobTag">#{freelist.jobGroup}</span>
              <span className="ListPossible">모집가능</span>
              <table align="center">
                <tr>
                  <td>김멀티</td>
                  <td className="ListBar">|</td>
                  <td>경력 {freelist.career}</td>
                  <td className="ListBar">|</td>
                  <td>{freelist.skills}</td>
                </tr>
                <tr>
                  <td colSpan={5} className="ListIntro">
                    " {freelist.introduce} "
                  </td>
                </tr>
              </table>
            </div>
            {/* 태그 설정시 선택한 태그가 나타나도록 */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeList;
