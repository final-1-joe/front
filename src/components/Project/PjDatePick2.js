import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";

const DatePick2 = ({ periodDate, setPeriodDate }) => {
  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd"
      closeOnScroll={true}
      selected={periodDate}
      minDate={new Date()}
      onChange={(date) => setPeriodDate(date)}
    />
  );
};

export default DatePick2;
