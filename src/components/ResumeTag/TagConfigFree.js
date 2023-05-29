import "../../css/Resume.css";
import Select from "react-select";
import React, { useState, useRef, useEffect } from "react";
import { occupation, occupations } from "./OccupationData";
import axios from "axios";
import Modal from "../supportcenter/modal";
import InputWon from "./InputWon";
import InputMonth from "./InputMonth";
import { Link } from "react-router-dom";

const TagConfigFree = () => {
  const [selectedoccupation, setSelectedOccupation] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [redata, setRedata] = useState();
  const user_id = window.sessionStorage.getItem("user_id");
  const jgRef = useRef();
  const jobRef = useRef();
  const wsRef = useRef();
  const [ws, setWs] = useState("allok");
  const wtRef = useRef();
  const [wt, setWt] = useState("allok");
  const [pays, setPays] = useState(0);
  const pay = (data) => {
    setPays(data);
  };
  const startRef = useRef();
  const [start, setStart] = useState(null);
  const [months, setMonths] = useState(0);
  const month = (data) => {
    setMonths(data);
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
      setWs(redata.fre_ws);
      setSelectedOccupation(redata.fre_jg);
      setSelectedJobs(
        occupation[redata.fre_jg].filter((option) =>
          redata.fre_job.includes(option.value)
        )
      );
      setWt(redata.fre_wt);
      setPays(redata.fre_pay);
      setStart(redata.fre_stdy);
      setMonths(redata.fre_mth);
    }
  }, [redata]);

  const getTag = () => {
    axios
      .post("http://localhost:8080/fretag/select", {
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
      .post("http://localhost:8080/fretag/select", {
        user_id: user_id,
      })
      .then((res) => {
        const count = res.data;
        if (count === "" || count === null) {
          axios
            .post("http://localhost:8080/fretag/insert", {
              user_id: user_id,
              fre_jg: jgRef.current.props
                ? jgRef.current.props.value.value
                : null,
              fre_job: jobRef.current.props.value
                ? JSON.stringify(
                    jobRef.current.props.value.map((option) => option.value)
                  )
                : null,
              fre_ws: wsRef.current.value || null,
              fre_wt: wtRef.current.value || null,
              fre_pay: pays || null,
              fre_stdy: startRef.current.value || null,
              fre_mth: months || null,
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
            .post("http://localhost:8080/fretag/update", {
              user_id: user_id,
              fre_jg: jgRef.current.props
                ? jgRef.current.props.value.value
                : null,
              fre_job: jobRef.current.props.value
                ? JSON.stringify(
                    jobRef.current.props.value.map((option) => option.value)
                  )
                : null,
              fre_ws: wsRef.current.value || null,
              fre_wt: wtRef.current.value || null,
              fre_pay: pays || null,
              fre_stdy: startRef.current.value || null,
              fre_mth: months || null,
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
  };
  return (
    <div className="resume">
      <div class="btns-area sc_an_wr_btn">
        <a class="btn-m02 btn-color01 depth2" onClick={openModal}>
          등록
        </a>
      </div>
      <Modal open={modalOpen} close={closeModal} header="프리랜서 태그설정">
        <div id="basic" className="resume_section">
          <div className="resume_write">
            <div className="resume_row">
              <span className="input_title">직군/직무</span>
              <span className="resume_input">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="직군을 선택하세요"
                  name="job"
                  ref={jgRef}
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
                />
              </span>
              <div className="input_title"></div>
              <div className="resume_input">
                <Select
                  ref={jobRef}
                  isMulti
                  name="jobs"
                  placeholder="직무를 선택하세요"
                  options={occupation[selectedoccupation]}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  value={selectedJobs}
                  onChange={(e) => setSelectedJobs(e)}
                />
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
              <div className="input_title">예상 금액(월)</div>
              <InputWon pay={pays} onData={pay}></InputWon>
            </div>
            <div className="resume_row">
              <span className="input_title">시작 예정일</span>
              <span className="resume_input focus">
                <input
                  type="date"
                  id="start_dt"
                  name="start_dt"
                  className="box_input"
                  data-only-word="true"
                  defaultValue={start}
                  ref={startRef}
                />
              </span>
            </div>
            <div className="resume_row">
              <span className="input_title">예상 기간</span>
              <InputMonth month={months} onData={month}></InputMonth>
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

export default TagConfigFree;
