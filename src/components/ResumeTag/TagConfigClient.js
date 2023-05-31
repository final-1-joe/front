import "../../css/Resume.css";
import Select from "react-select";
import React, { useState, useRef, useEffect } from "react";
import { occupation, occupations } from "./OccupationData";
import SkillTag from "./SkillTag";
import Modal from "../supportcenter/modal";
import InputWon from "./InputWon";
import { Link } from "react-router-dom";
import axios from "axios";

const TagConfigClient = () => {
  const [selectedoccupation, setSelectedOccupation] = useState("");
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [redata, setRedata] = useState();
  const user_id = window.sessionStorage.getItem("user_id");

  const jsRef = useRef();
  const [js, setJs] = useState("work");
  const jgRef = useRef();
  const jobRef = useRef();
  const [skills, setSkills] = useState([]);
  const skill = (data) => {
    setSkills(data);
  };
  const wsRef = useRef();
  const [ws, setWs] = useState("allok");
  const wtRef = useRef();
  const [wt, setWt] = useState("allok");
  const [pays, setPays] = useState(0);
  const pay = (data) => {
    setPays(data);
  };
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const onClearSelect = () => {
    if (jobRef.current) {
      jobRef.current.clearValue();
    }
  };
  useEffect(() => {
    getTag();
  }, []);
  useEffect(() => {
    if (redata) {
      setWs(redata.cli_ws);
      setWt(redata.cli_wt);
      setSkills(JSON.parse(redata.cli_skill));
      setJs(redata.cli_js);
      setSelectedOccupation(redata.cli_jg);
      setSelectedJobs(
        occupation[redata.cli_jg].filter((option) =>
          redata.cli_job.includes(option.value)
        )
      );

      setPays(redata.cli_pay);
    }
  }, [redata]);
  const getTag = () => {
    axios
      .post("http://localhost:8080/clitag/select", {
        user_id: user_id,
      })
      .then((res) => {
        setRedata(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const insertTag = () => {
    axios
      .post("http://localhost:8080/clitag/select", {
        user_id: user_id,
      })
      .then((res) => {
        const count = res.data;
        if (count === "" || count === null) {
          axios
            .post("http://localhost:8080/clitag/insert", {
              user_id: user_id,
              cli_jg: jgRef.current.props
                ? jgRef.current.props.value.value
                : null,
              cli_job: jobRef.current.props.value
                ? JSON.stringify(
                    jobRef.current.props.value.map((option) => option.value)
                  )
                : null,
              cli_skill: skills ? JSON.stringify(skills) : null,
              cli_js: jsRef.current.value || null,
              cli_ws: wsRef.current.value || null,
              cli_wt: wtRef.current.value || null,
              cli_pay: pays || null,
            })
            .then((res) => {
              getTag();
              closeModal();
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          axios
            .post("http://localhost:8080/clitag/update", {
              user_id: user_id,
              cli_jg: jgRef.current.props
                ? jgRef.current.props.value.value
                : null,
              cli_job: jobRef.current.props.value
                ? JSON.stringify(
                    jobRef.current.props.value.map((option) => option.value)
                  )
                : null,
              cli_skill: skills ? JSON.stringify(skills) : null,
              cli_js: jsRef.current.value || null,
              cli_ws: wsRef.current.value || null,
              cli_wt: wtRef.current.value || null,
              cli_pay: pays || null,
            })
            .then((res) => {
              closeModal();
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .post("http://localhost:8080/user/updatert", {
        user_id: user_id,
        user_resume: 1,
      })
      .then((res) => {})
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="resume">
      <div class="btns-area sc_an_wr_btn">
        <a class="btn-m02 btn-color01 depth2" onClick={openModal}>
          등록
        </a>
      </div>
      <Modal open={modalOpen} close={closeModal} header="클라이언트 태그설정">
        <div id="basic" className="resume_section">
          <div className="resume_write">
            <div className="resume_row">
              <div className="input_title">직군/직무</div>
              <div className="resume_input">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="직군을 선택하세요"
                  name="job"
                  options={occupations}
                  value={occupations.find(
                    (option) => option.value === selectedoccupation
                  )}
                  onChange={(e) => {
                    if (e) {
                      setSelectedOccupation(e.value);
                    } else {
                      setSelectedOccupation("");
                    }
                    onClearSelect();
                  }}
                  ref={jgRef}
                />
              </div>
              <p className="txt_error"></p>
              <div className="input_title"></div>
              <div className="resume_input">
                <Select
                  isMulti
                  name="jobs"
                  placeholder="직무를 선택하세요"
                  options={occupation[selectedoccupation]}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  ref={jobRef}
                  value={selectedJobs}
                  onChange={(e) => setSelectedJobs(e)}
                />
              </div>
            </div>
            <SkillTag skill={skills} onData={skill}></SkillTag>
            <div className="resume_row">
              <div className="input_title">구직여부</div>
              <div className="resume_input">
                <select
                  className="box_input ico_arr selected "
                  defaultValue={js}
                  ref={jsRef}
                >
                  <option value="work">구직중</option>
                  <option value="notwork">비구직중</option>
                </select>
              </div>
            </div>
            <div className="resume_row">
              <div className="input_title">근무방식</div>
              <div className="resume_input">
                <select className="box_input" defaultValue={ws} ref={wsRef}>
                  <option value="allok">상관없음</option>
                  <option value="offline">상주근무</option>
                  <option value="online">원격근무</option>
                </select>
              </div>
            </div>
            <div className="resume_row">
              <div className="input_title">근무형태</div>
              <div className="resume_input">
                <select className="box_input" defaultValue={wt} ref={wtRef}>
                  <option value="allok">상관없음</option>
                  <option value="fulltime">풀타임</option>
                  <option value="parttime">파트타임</option>
                </select>
              </div>
            </div>
            <div className="resume_row">
              <div className="input_title">희망 금액(월)</div>
              <InputWon pay={pays} onData={pay}></InputWon>
            </div>

            <div class="btns-area">
              <Link class="btn-m02 btn-color03 depth2" onClick={insertTag}>
                등록
              </Link>
              <Link class="btn-m02 btn-color06 depth2" onClick={closeModal}>
                취소
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TagConfigClient;
