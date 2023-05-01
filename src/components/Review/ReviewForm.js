import { useRef } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const ReviewForm = ({ handlelist }) => {
  const writerRef = useRef();
  const gradeRef = useRef();
  const contentRef = useRef();

  const handleInsert = () => {
    if (gradeRef.current.value === "" || gradeRef.current.value === undefined) {
      alert("평점을 입력하세요");
      gradeRef.current.focus();
      return false;
    }
    if (
      writerRef.current.value === "" ||
      writerRef.current.value === undefined
    ) {
      alert("작성자를 입력하세요");
      writerRef.current.focus();
      return false;
    }
    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      alert("내용을 입력하세요");
      contentRef.current.focus();
      return false;
    }

    axios
      .post("/insert", {
        board_title: gradeRef.current.value,
        board_writer: writerRef.current.value,
        board_content: contentRef.current.value,
      })
      .then((res) => {
        console.log("handleInsert =>", res);
        handlelist();
        gradeRef.current.value = "";
        writerRef.current.value = "";
        contentRef.current.value = "";
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <form>
        <table align="center" width="500px">
          <tr>
            <td width="60px">작성자</td>
            <td align="left" width="260px">
              <input
                type="text"
                name="writer"
                size="30"
                ref={writerRef}
                placeholder="작성자를 입력하세요"
              ></input>
            </td>
            <td width="60px">평점</td>
            <td align="left" width="120px">
              <select ref={gradeRef}>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td align="left" colSpan="3">
              <textarea
                rows="5"
                cols="55"
                name="content"
                ref={contentRef}
                placeholder="내용을 입력하세요"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="4" align="center">
              <input type="button" value="등록" onClick={handleInsert}></input>
              &nbsp;
              <input type="reset" value="취소"></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default ReviewForm;
