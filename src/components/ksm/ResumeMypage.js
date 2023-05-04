import "../../css/Resume.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { occupation, occupations } from "./OccupationData";
import SkillTag from "./SkillTag";
import InputWon from "./InputWon";
import InputCareer from "./InputCareer";
const ResumeMypage = () => {
  const nameRef = useRef();
  const [fileName, setFileName] = useState("");

  function handleFileChange(event) {
    const name = event.target.value.split(/(\\|\/)/g).pop(); // 파일 이름 추출
    setFileName(name);
  }
  const navigate = useNavigate();

  const birthRef = useRef();
  const emailRef = useRef();
  const telRef = useRef();
  const [telvalue, setTelValue] = useState("");
  function handleValueChange(event) {
    let val = event.target.value;
    val = val.replace(/[^-\.0-9]/gi, "");
    val = val.replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`);
    setTelValue(val);
  }

  const ResumeData = {
    user_nm: "홍길동",
    user_js: "work",
    user_bd: "2020-01-01",
    user_gen: "male",
    user_email: "hong123@gmail.com",
    user_tel: "010-1234-5678",
    user_jg: "개발",
    user_job: ["자바 개발자", "웹 개발자"],
    user_skill: ["준 개발", "파트너 개발자"],
    user_ws: "offline",
    user_wt: "fulltime",
    user_pay: 100,
    user_career: 3,
    user_file: "포트폴리오_Test.hwp",
    user_github: "https://github.com/final-1-joe/front",
  };

  const selectInputRef = useRef(null);
  const onClearSelect = () => {
    if (selectInputRef.current) {
      selectInputRef.current.clearValue();
    }
  };
  const [selectedoccupation, setSelectedOccupation] = useState("");
  const [selectedJobs, setSelectedJobs] = useState([]);

  useEffect(() => {
    setSelectedOccupation(ResumeData.user_jg);
    setFileName(ResumeData.user_file);
  }, []);

  useEffect(() => {
    if (occupation[selectedoccupation]) {
      setSelectedJobs(
        occupation[selectedoccupation].filter((option) =>
          ResumeData.user_job.includes(option.value)
        )
      );
    }
  }, [selectedoccupation]);

  return (
    <div className="resume">
      <div id="basic" className="resume_section">
        <div className="area_title">
          <h3 className="title">이력서</h3>
        </div>

        <div className="resume_write">
          <div className="resume_row">
            <span className="input_title">
              이름 <span className="point">필수</span>
            </span>
            <span className="resume_input">
              <input
                type="text"
                id="user_nm"
                name="user_nm"
                className="box_input"
                maxLength="20"
                defaultValue={ResumeData.user_nm}
                data-only-word="true"
                placeholder="이름 입력"
                ref={nameRef}
              />
            </span>
            <span className="sri_select resume_select resume_right">
              <select
                className="ico_arr selected size_type3"
                defaultValue={ResumeData.user_js}
              >
                <option>구직상태 선택</option>
                <option value="work">구직중</option>
                <option value="notwork">비구직중</option>
              </select>
            </span>
          </div>
          <div className="resume_row">
            <span className="input_title">
              생년월일 <span className="point">필수</span>
            </span>
            <span className="resume_input focus">
              <input
                type="date"
                id="birth_day"
                name="birth_day"
                className="box_input"
                data-only-word="true"
                ref={birthRef}
                defaultValue={ResumeData.user_bd}
              />
            </span>
            {ResumeData.user_gen === "male" ? (
              <span className="inpRdoSw sizeXL resume_right focus">
                <span className="inOption">
                  <input
                    name="gender"
                    id="male"
                    type="radio"
                    value="male"
                    checked
                  />
                  <label htmlFor="male" name="male" className="lbl">
                    남
                  </label>
                </span>
                <span className="inOption">
                  <input
                    name="gender"
                    id="female"
                    type="radio"
                    value="female"
                  />
                  <label htmlFor="female" name="female" className="lbl">
                    여
                  </label>
                </span>
              </span>
            ) : (
              <span className="inpRdoSw sizeXL resume_right focus">
                <span className="inOption">
                  <input name="gender" id="male" type="radio" value="male" />
                  <label htmlFor="male" name="male" className="lbl">
                    남
                  </label>
                </span>
                <span className="inOption">
                  <input
                    name="gender"
                    id="female"
                    type="radio"
                    value="female"
                  />
                  <label htmlFor="female" name="female" className="lbl" checked>
                    여
                  </label>
                </span>
              </span>
            )}
          </div>
          <div className="resume_row">
            <div className="input_title">
              이메일 <span className="point">필수</span>
            </div>
            <div className="resume_input focus">
              <input
                type="email"
                id="email"
                name="email"
                ref={emailRef}
                className="box_input max_length"
                placeholder="이메일 입력"
                autoComplete="on"
                defaultValue={ResumeData.user_email}
              />
            </div>
          </div>
          <div className="resume_row">
            <div className="input_title">
              휴대폰 <span className="point">필수</span>
            </div>
            <div className="resume_input">
              <input
                type="tel"
                id="user_tel"
                name="user_tel"
                onChange={handleValueChange}
                value={telvalue}
                className="box_input max_length"
                maxLength="13"
                placeholder="ex)01012345678"
                ref={telRef}
                defaultValue={ResumeData.user_tel}
              />
            </div>
          </div>
          <div className="resume_row">
            <div className="input_title">직군/직무</div>
            <div className="resume_input">
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder="직군을 선택하세요"
                name="jobgroup"
                options={occupations}
                value={occupations.find(
                  (option) => option.value === selectedoccupation
                )}
                onChange={(e) => {
                  console.log("e", e);
                  if (e) {
                    setSelectedOccupation(e.value);
                  } else {
                    setSelectedOccupation("");
                  }
                  onClearSelect();
                }}
              />
            </div>
            <div className="input_title"></div>
            <div className="resume_input">
              <Select
                ref={selectInputRef}
                isMulti
                name="jobs"
                placeholder="직무를 선택하세요"
                options={occupation[selectedoccupation] || []}
                className="basic-multi-select"
                classNamePrefix="select"
                value={selectedJobs}
                onChange={(e) => setSelectedJobs(e)}
              />
            </div>
          </div>
          <SkillTag skill={ResumeData.user_skill}></SkillTag>
          <div className="resume_row">
            <div className="input_title">근무방식</div>
            <div className="resume_input">
              <select
                className="box_input"
                name="work_st"
                defaultValue={ResumeData.user_ws}
              >
                <option value="allok">상관없음</option>
                <option value="offline">상주근무</option>
                <option value="online">원격근무</option>
              </select>
            </div>
          </div>
          <div className="resume_row">
            <div className="input_title">근무형태</div>
            <div className="resume_input">
              <select
                className="box_input"
                name="work_ty"
                defaultValue={ResumeData.user_wt}
              >
                <option value="allok">상관없음</option>
                <option value="fulltime">풀타임</option>
                <option value="parttime">파트타임</option>
              </select>
            </div>
          </div>
          <div className="resume_row">
            <div className="input_title">희망 금액(월)</div>
            <InputWon pay={ResumeData.user_pay} />
          </div>
          <div className="resume_row">
            <span className="input_title">프리랜서 경력</span>
            <InputCareer career={ResumeData.user_career}></InputCareer>
          </div>
          <div className="resume_row">
            <div className="input_title">포트 폴리오</div>
            <div className="resume_input">
              <label for="user_file" className="file_label">
                파일등록
              </label>
              <input
                className="box_input file_input_size upload-name"
                value={fileName}
                placeholder="첨부파일"
              />
              <input
                type="file"
                id="user_file"
                name="user_file"
                className="file_input_hidden"
                multiple
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="resume_row">
            <div className="input_title">GitHub</div>
            <div className="resume_input">
              <input
                type="url"
                id="user_url"
                name="user_url"
                className="box_input max_length"
                placeholder="ex) https://github.com"
                defaultValue={ResumeData.user_github}
              />
            </div>
          </div>
        </div>
        <div class="btns-area">
          <a class="btn-m02 btn-color03 depth2">수정</a>
          <a class="btn-m02 btn-color06 depth2" onClick={() => navigate(-1)}>
            취소
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeMypage;
