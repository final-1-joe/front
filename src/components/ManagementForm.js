import React, { useState, useEffect } from "react";
import "../css/ManagementForm.css";
import { useNavigate } from "react-router-dom";

const ManagementForm = ({ listData, Mode }) => {
  //listData와 Mode는 쓰는곳에서 설정해야 합니다.
  const [activeTab, setActiveTab] = useState("all");
  const [allSchedules, setAllSchedules] = useState([]);
  const [applySchedules, setApplySchedules] = useState([]);
  const [inProgressSchedules, setInProgressSchedules] = useState([]);
  const [ongoingSchedules, setOngoingSchedules] = useState([]);
  const [completedSchedules, setCompletedSchedules] = useState([]);
  const [finishedSchedules, setFinishedSchedules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setAllSchedules(listData);
    const apply = listData.filter((schedule) => schedule.status === "apply");
    const inprogress = listData.filter(
      (schedule) => schedule.status === "inprogress"
    );
    const completed = listData.filter(
      (schedule) => schedule.status === "completed"
    );
    const ongoing = listData.filter(
      (schedule) => schedule.status === "ongoing"
    );
    const finished = listData.filter(
      (schedule) => schedule.status === "finished"
    );
    setOngoingSchedules(ongoing);
    setInProgressSchedules(inprogress);
    setCompletedSchedules(completed);
    setFinishedSchedules(finished);
    setApplySchedules(apply);
  }, [listData]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return Mode === "Recruit" ? (
    //Recruit일 경우
    <div className="flex">
      <div className="container-manageform">
        <div className="tab-manageform">
          <button
            className={`button-manageform ${
              activeTab === "all" ? "active" : ""
            }`}
            onClick={() => handleTabClick("all")}
          >
            전체
          </button>
          <button
            className={`button-manageform ${
              activeTab === "apply" ? "active" : ""
            }`}
            onClick={() => handleTabClick("apply")}
          >
            지원
          </button>
          <button
            className={`button-manageform ${
              activeTab === "inprogress" ? "active" : ""
            }`}
            onClick={() => handleTabClick("inprogress")}
          >
            모집중
          </button>
          <button
            className={`button-manageform ${
              activeTab === "completed" ? "active" : ""
            }`}
            onClick={() => handleTabClick("completed")}
          >
            모집완료
          </button>
          <button
            className={`button-manageform ${
              activeTab === "ongoing" ? "active" : ""
            }`}
            onClick={() => handleTabClick("ongoing")}
          >
            진행중
          </button>
          <button
            className={`button-manageform ${
              activeTab === "finished" ? "active" : ""
            }`}
            onClick={() => handleTabClick("finished")}
          >
            진행완료
          </button>
        </div>
        <div className="listcontainer-manageform">
          <ul className="list-manageform">
            <li>
              <div className="index-manageform">
                <span>프리랜서명</span>
                <span></span>
                <span>진행상태</span>
              </div>
            </li>
             {activeTab === "all" && (
              <>
                {allSchedules.map((schedule) => (
                  <li key={schedule.id} className="list-item-manageform">
                    <span onClick={() => navigate(schedule.link)}>
                      {schedule.project}
                    </span>
                    <span onClick={() => navigate(schedule.dmlink)}>
                      DM보내기 / 연락하기
                    </span>
                    <span>{schedule.status === "completed" ? "승낙" : ""}</span>
                  </li>
                ))}
              </>
            )}
            {activeTab === "apply" && (
              <>
                {applySchedules.map((schedule) => (
                  <li key={schedule.id} className="list-item-manageform">
                    <span onClick={() => navigate(schedule.link)}>
                      {schedule.project}
                    </span>
                    <span onClick={() => navigate(schedule.dmlink)}>
                      DM보내기 / 연락하기
                    </span>
                    <span>
                      {schedule.status === "apply" ? "지원" : "미승낙"}
                    </span>
                  </li>
                ))}
              </>
            )}

            {activeTab === "inprogress" && (
              <>
                {inProgressSchedules.map((schedule) => (
                  <li key={schedule.id} className="list-item-manageform">
                    <span onClick={() => navigate(schedule.link)}>
                      {schedule.project}
                    </span>
                    <span onClick={() => navigate(schedule.dmlink)}>
                      DM보내기 / 연락하기
                    </span>
                    <span>
                      {schedule.status === "inprogress" ? "미승낙" : "승낙"}
                    </span>
                  </li>
                ))}
              </>
            )}

            {activeTab === "completed" && (
              <>
                {completedSchedules.map((schedule) => (
                  <li key={schedule.id} className="list-item-manageform">
                    <span onClick={() => navigate(schedule.link)}>
                      {schedule.project}
                    </span>
                    <span onClick={() => navigate(schedule.dmlink)}>
                      DM보내기 / 연락하기
                    </span>
                    <span>
                      {schedule.status === "completed" ? "승낙" : "미승낙"}
                    </span>
                  </li>
                ))}
              </>
            )}
            {activeTab === "ongoing" && (
              <>
                {ongoingSchedules.map((schedule) => (
                  <li key={schedule.id} className="list-item-manageform">
                    <span onClick={() => navigate(schedule.link)}>
                      {schedule.project}
                    </span>
                    <span onClick={() => navigate(schedule.dmlink)}>
                      DM보내기 / 연락하기
                    </span>
                    <span>
                      {schedule.status === "ongoing" ? "협업중" : "미승낙"}
                    </span>
                  </li>
                ))}
              </>
            )}
            {activeTab === "finished" && (
              <>
                {finishedSchedules.map((schedule) => (
                  <li key={schedule.id} className="list-item-manageform">
                    <span onClick={() => navigate(schedule.link)}>
                      {schedule.project}
                    </span>
                    <span onClick={() => navigate(schedule.dmlink)}>
                      DM보내기 / 연락하기
                    </span>
                    <span>
                      {schedule.status === "finished" ? "협업완료" : "미승낙"}
                    </span>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    //Project일 경우
    <div className="flex">
      <div className="container-manageform">
        <div className="tab-manageform">
          <button
            className={`button-manageform ${
              activeTab === "all" ? "active" : ""
            }`}
            onClick={() => handleTabClick("all")}
          >
            전체
          </button>
          <button
            className={`button-manageform ${
              activeTab === "inprogress" ? "active" : ""
            }`}
            onClick={() => handleTabClick("inprogress")}
          >
            모집중
          </button>
          <button
            className={`button-manageform ${
              activeTab === "completed" ? "active" : ""
            }`}
            onClick={() => handleTabClick("completed")}
          >
            모집완료
          </button>
          <button
            className={`button-manageform ${
              activeTab === "ongoing" ? "active" : ""
            }`}
            onClick={() => handleTabClick("ongoing")}
          >
            진행중
          </button>
          <button
            className={`button-manageform ${
              activeTab === "finished" ? "active" : ""
            }`}
            onClick={() => handleTabClick("finished")}
          >
            완료
          </button>
        </div>
        <div className="listcontainer-manageform">
          <ul className="list-manageform">
            <li>
              <div className="index-manageform">
                <span>프로젝트</span>
                <span></span>
                <span>진행상태</span>
              </div>
            </li>
            {activeTab === "all" && (
              <>
                {allSchedules.map((schedule) => (
                  <li
                    key={schedule.id}
                    className="list-item-manageform"
                    onClick={() =>
                      navigate(schedule.link, {
                        state: { pj_num: schedule.id },
                      })
                    }
                  >
                    <span>{schedule.project}</span>
                    <span>{schedule.content}</span>
                    <span>
                      {schedule.status === "completed" ? "완료" : "진행중"}
                    </span>
                  </li>
                ))}
              </>
            )}

            {activeTab === "inprogress" && (
              <>
                {inProgressSchedules.map((schedule) => (
                  <li
                    key={schedule.id}
                    className="list-item-manageform"
                    onClick={() => navigate(schedule.link)}
                  >
                    <span>{schedule.project}</span>
                    <span>{schedule.content}</span>
                    <span>모집중</span>
                  </li>
                ))}
              </>
            )}

            {activeTab === "completed" && (
              <>
                {completedSchedules.map((schedule) => (
                  <li
                    key={schedule.id}
                    className="list-item-manageform"
                    onClick={() => navigate(schedule.link)}
                  >
                    <span>{schedule.project}</span>
                    <span>{schedule.content}</span>
                    <span>모집완료</span>
                  </li>
                ))}
              </>
            )}

            {activeTab === "ongoing" && (
              <>
                {ongoingSchedules.map((schedule) => (
                  <li
                    key={schedule.id}
                    className="list-item-manageform completed"
                    onClick={() => navigate(schedule.link)}
                  >
                    <span>{schedule.project}</span>
                    <span>{schedule.content}</span>
                    <span>진행중</span>
                  </li>
                ))}
              </>
            )}
            {activeTab === "finished" && (
              <>
                {finishedSchedules.map((schedule) => (
                  <li
                    key={schedule.id}
                    className="list-item-manageform completed"
                    onClick={() => navigate(schedule.link)}
                  >
                    <span>{schedule.project}</span>
                    <span>{schedule.content}</span>
                    <span>완료</span>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagementForm;
