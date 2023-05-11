import React, { useState } from "react";
import "../../css/Resume.css";
const FileInput = () => {
  const [fileName, setFileName] = useState("");

  function handleFileChange(event) {
    const name = event.target.value.split(/(\\|\/)/g).pop(); // 파일 이름 추출
    setFileName(name);
  }

  return (
    <div class="filebox">
      <input class="upload-name" value={fileName} placeholder="첨부파일" />
      <label for="file">파일찾기</label>
      <input type="file" id="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileInput;
