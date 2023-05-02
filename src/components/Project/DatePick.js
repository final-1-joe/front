import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy년 MM월 dd일"
      closeOnScroll={true}
      selected={startDate}
      minDate={new Date()}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default DatePick;
