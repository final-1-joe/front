import "../../css/List.css";
import dummy from "./PjDummyData.json";
import { HiHashtag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const PjList = () => {
  const navigate = useNavigate();

  const handleDetailPage = ({ dummy }) => {
    navigate("/pjdetail", {
      state: {
        id: `${dummy.projects.id}`,
        pjNum: `${dummy.projects.pjNum}`,
        projectName: `${dummy.projects.projectName}`,
        corpName: `${dummy.projects.corpName}`,
        workForm: `${dummy.projects.workForm}`,
        startDate: `${dummy.projects.startDate}`,
        pjPeriod: `${dummy.projects.pjPeriod}`,
        salary: `${dummy.projects.salary}`,
        jobGroup: `${dummy.projects.jobGroup}`,
        personnel: `${dummy.projects.personnel}`,
        requiredSkills: `${dummy.projects.requiredSkills}`,
        pjContent: `${dummy.projects.pjContent}`,
      },
    });
  };

  return (
    <div>
      <div className="ListOption">
        <table>
          <tr>
            <td width="100px">프로젝트</td>
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
        <div>
          <select id="ListFilter">
            <option>최신순</option>
            <option>많이 담은 순</option>
          </select>
        </div>
      </div>

      <div>
        {dummy.projects.map((project) => (
          <div
            className="ListBox"
            key={project.id}
            onClick={() => handleDetailPage({ dummy })}
          >
            <div className="ListText">
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <span className="ListJobTag">#개발</span>
                      <span className="ListPossible">모집중</span>
                    </td>
                  </tr>
                  <tr>
                    <td>(주)&nbsp;{project.corpName}&nbsp;&nbsp;|</td>
                    <td className="ListIntro">{project.projectName}</td>
                  </tr>
                  <tr style={{ fontSize: "14px" }}>
                    <td colSpan={2}>
                      {project.salary}&nbsp;&nbsp;|&nbsp;&nbsp;
                      {project.pjPeriod}
                      &nbsp;&nbsp;|&nbsp;&nbsp;{project.workForm}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <HiHashtag size="20" />
                      &nbsp;
                      {project.requiredSkills}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default PjList;
