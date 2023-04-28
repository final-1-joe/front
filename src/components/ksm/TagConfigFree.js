import "../../css/bootstrap.css";
import "../../css/Resume.css";
import Select from "react-select";
import React, { useState } from "react";
import { asd, colourOptions } from "./data.ts";

const TagConfigFree = () => {
  const states = ["asd", "교육", "금융"];
  const cities = {
    asd: ["f", "g", "l"],
    교육: ["a", "b"],
    금융: ["tr", "trt", "rtt"],
  };
  const [selectedState, setSelectedState] = useState("");
  console.log("select", selectedState);
  return (
    <div className="resume">
      <div className="resume_row">
        <div className="input_title">직종</div>
        <div className="resume_input">
          <select
            className="box_input max_length"
            onChange={(e) => {
              setSelectedState(e.target.value);
            }}
          >
            <option value="">선택해주세요</option>
            {states.map((data) => {
              return <option value={data}>{data}</option>;
            })}
          </select>
        </div>
        <p className="txt_error"></p>
        <div className="input_title"></div>

        {selectedState && (
          <div className="resume_input">
            <select className="box_input max_length">
              <option>선택해주세요</option>
              {cities[selectedState].map((data) => {
                return <option value={data}>{data}</option>;
              })}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagConfigFree;
