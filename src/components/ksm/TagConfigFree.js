import "../../css/bootstrap.css";
import "../../css/Resume.css";
import Select from "react-select";
import React, { useState } from "react";
import { occupation, occupations } from "./OccupationData";
import Tag from "./Tag";
import Modal from "../supportcenter/modal";

const TagConfigFree = () => {
  const [selectedoccupation, setSelectedOccupation] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setInputValue(`${value} 만원`);
    }
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
          <div className="area_title">
            <h3 className="title">프리랜서 태그 설정</h3>
            <h6>프로젝트를 탐색합니다</h6>
          </div>
          <div className="resume_write">
            <div className="resume_row">
              <div className="input_title">직군/직무</div>
              <div className="resume_input">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="직군을 선택하세요"
                  name="color"
                  options={occupations}
                  onChange={(e) => {
                    console.log(e);
                    setSelectedOccupation(e.value);
                  }}
                />
              </div>
              <p className="txt_error"></p>
              <div className="input_title"></div>

              {selectedoccupation && (
                <div className="resume_input">
                  <Select
                    isMulti
                    name="colors"
                    placeholder="직무를 선택하세요"
                    options={occupation[selectedoccupation]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              )}
            </div>
            <div className="resume_row">
              <div className="input_title">근무방식</div>
              <div className="resume_input">
                <select className="box_input">
                  <option>근무방식 선택</option>
                  <option>상주근무</option>
                  <option>원격근무</option>
                  <option>상관없음</option>
                </select>
              </div>
            </div>
            <div className="resume_row">
              <div className="input_title">근무형태</div>
              <div className="resume_input">
                <select className="box_input">
                  <option>근무형태 선택</option>
                  <option>풀타임</option>
                  <option>파트타임</option>
                  <option>상관없음</option>
                </select>
              </div>
            </div>
            <div className="resume_row">
              <div className="input_title">예상 금액</div>
              <div className="resume_input ">
                <select className="box_input size_pay">
                  <option>월급</option>
                </select>
                <input
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  min={0}
                  type="text"
                  id="user_pay"
                  name="user_pay"
                  defaultValue={0}
                  maxLength="100"
                  onChange={handleInputChange}
                  value={inputValue}
                  className="box_input pay_size"
                />
              </div>
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
                />
              </span>
            </div>
            <div className="resume_row">
              <span className="input_title">예상 기간</span>
              <span className="resume_input focus">
                <input
                  type="text"
                  id="day_dt"
                  name="day_dt"
                  className="box_input"
                  data-only-word="true"
                  placeholder="1개월"
                />
              </span>
            </div>

            <div class="btns-area">
              <a class="btn-m02 btn-color03 depth2">등록</a>
              <a class="btn-m02 btn-color06 depth2">취소</a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TagConfigFree;
