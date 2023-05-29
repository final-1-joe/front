import { useState } from "react";

const PjOptions = () => {
  // 수정 필요
  const [Content1, setContent1] = useState();
  const [Content2, setContent2] = useState();
  const onChangeHandler1 = (e) => {
    setContent1(e.currentTarget.value);
  };
  const onChangeHandler2 = (e) => {
    setContent2(e.currentTarget.value);
  };
  const Options1 = [
    { key: 1, value: "원격" },
    { key: 2, value: "상주" },
  ];
  const Options2 = [
    { key: 1, value: "-" },
    { key: 2, value: "서울" },
    { key: 3, value: "경기" },
    { key: 4, value: "인천" },
    { key: 5, value: "충청" },
    { key: 6, value: "강원" },
    { key: 7, value: "전라" },
    { key: 8, value: "경상" },
    { key: 9, value: "제주" },
    { key: 10, value: "기타(해외)" },
  ];
  return (
    <div>
      <select onChange={onChangeHandler1} value={Content1}>
        {Options1.map((item, index) => (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        ))}
      </select>
      &nbsp;&nbsp;
      <select onChange={onChangeHandler2} value={Content2}>
        {Options2.map((item, index) => (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PjOptions;
