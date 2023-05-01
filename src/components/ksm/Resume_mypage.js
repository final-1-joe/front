import "../../css/bootstrap.css";
import "../../css/Resume.css";
import Select from "react-select";
import React, { useState } from "react";
import { asd, colourOptions } from "./data.ts";
import Tag from "./Tag";

const Resume = () => {
  return (
    <div className="resume">
      <div id="basic" className="resume_section">
        <div className="area_title">
          <h3 className="title">이력서 수정</h3>
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
                data-only-word="true"
                placeholder="이름 입력"
              />
            </span>
            <span className="sri_select resume_select resume_right">
              <select className="ico_arr selected size_type3">
                <option>구직상태 선택</option>
                <option>구직중</option>
                <option>비구직중</option>
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
                id="birth_dt"
                name="birth_dt"
                className="box_input"
                data-only-word="true"
              />
            </span>
            <span className="inpRdoSw sizeXL resume_right focus">
              <span className="inOption">
                <input name="sex" id="male" type="radio" value="male" />
                <label htmlFor="male" name="male" className="lbl">
                  남
                </label>
              </span>
              <span className="inOption">
                <input name="sex" id="female" type="radio" value="female" />
                <label htmlFor="female" name="female" className="lbl">
                  여
                </label>
              </span>
            </span>
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
                className="box_input max_length"
                placeholder="이메일 입력"
                autoComplete="on"
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
                pattern="[0-9]{11}"
                name="user_tel"
                className="box_input max_length"
                maxLength="11"
                placeholder="ex)01012345678"
              />
            </div>
          </div>

          <div className="resume_row">
            <span className="input_title">프리랜서 경력</span>
            <span className="resume_input">
              <input
                type="number"
                min={0}
                id="user_url"
                name="user_url"
                className="box_input max_length"
              />
            </span>
            <span className="sri_select resume_select resume_right">
              <select className="ico_arr selected size_type3">
                <option>프리랜서 경험</option>
                <option>있음</option>
                <option>없음</option>asdfasasfgit
              </select>
            </span>
          </div>

          <Tag></Tag>
          <div className="resume_row">
            <div className="input_title">포트 폴리오</div>
            <div className="resume_input">
              <input
                type="file"
                id="user_url"
                name="user_url"
                multiple
                className="file_input max_length"
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
              />
            </div>
          </div>
        </div>
        <div class="btns-area">
          <a class="btn-m02 btn-color03 depth2">수정</a>
          <a class="btn-m02 btn-color06 depth2">취소</a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
