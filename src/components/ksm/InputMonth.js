import "../../css/Resume.css";

import React, { useState } from "react";

const InputMonth = () => {
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
      val = val + "개월";
    }
    setValue(val);
  }

  function handleInputFocus() {
    let val = value;
    val = val.replace("개월", "");
    setValue(val);
  }
  function handleValueChange(event) {
    let val = event.target.value;
    val = val.replace(/[^-\.0-9]/gi, "");
    val = val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    setValue(val);
  }

  return (
    <span className="resume_input focus">
      <input
        type="text"
        id="day_dt"
        name="day_dt"
        value={value}
        maxLength={2}
        onChange={handleValueChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onKeyDown={handleInputChange}
        className="box_input"
        data-only-word="true"
        placeholder="1개월"
      />
    </span>
  );
};

export default InputMonth;
