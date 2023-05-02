import "../../css/Resume.css";

import React, { useState } from "react";

const InputWon = () => {
  const [value, setValue] = useState("");

  function handleInputChange(event) {
    const strVal = event.target.value;
    let keyID = event.which || event.keyCode;
    if (
      (keyID >= 48 && keyID <= 57) ||
      (keyID >= 96 && keyID <= 105) ||
      keyID === 46 ||
      keyID === 8 ||
      keyID === 109 ||
      keyID === 189 ||
      keyID === 9 ||
      keyID === 37 ||
      keyID === 39
    ) {
      if (strVal.length > 1 && (keyID === 109 || keyID === 189)) {
        return false;
      } else {
        return;
      }
    } else {
      return false;
    }
  }

  function handleInputBlur() {
    let val = value;
    val = val.replace(",", "");
    val = val.replace(/[^-\.0-9]/gi, "");
    val = val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    if (val !== "") {
      val = val + "만원";
    }
    setValue(val);
  }

  function handleInputFocus() {
    let val = value;
    val = val.replace("만원", "");
    setValue(val);
  }
  function handleValueChange(event) {
    let val = event.target.value;
    val = val.replace(/[^-\.0-9]/gi, "");
    val = val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    setValue(val);
  }

  return (
    <div className="resume_input ">
      <input
        type="text"
        id="user_pay"
        name="user_pay"
        maxLength={4}
        value={value}
        placeholder="0만원"
        onChange={handleValueChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onKeyDown={handleInputChange}
        className="box_input"
      />
    </div>
  );
};

export default InputWon;
