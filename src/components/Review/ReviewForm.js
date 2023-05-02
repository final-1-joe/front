import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const ReviewForm = ({ review, handlelist, handledetail, handleupdateform }) => {
  const handleDelete = (e) => {
    console.log("handleDelete(board_num) =>", e.target.id);
    axios
      .post("/delete", {
        board_num: e.target.id,
      })
      .then((res) => {
        handlelist();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div id={review.board_num} onClick={handledetail}>
      <tr>
        <td align="right">
          <input
            type="button"
            value="수정"
            id={review.board_num}
            onClick={handleupdateform}
          ></input>
          <input
            type="button"
            value="삭제"
            id={review.board_num}
            onClick={handleDelete}
          ></input>
        </td>
      </tr>
      <details>
        <tr height="50px">
          <td>{review.board_num}</td>
          <td width="30px">작성자</td>
          <td width="100px">{review.board_writer}</td>
          <td width="30px">평점</td>
          <td width="60px">
            ({review.board_grade} === 1 ? <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar /> : ({review.board_grade} === 2 ? <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar /> : ({review.board_grade} === 3 ? <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar /> : ({review.board_grade} === 4 ? <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar /> : ({review.board_grade} === 5 ? <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />) )) ))
            {review.board_grade}
          </td>
          <td width="30px">작성 일시</td>
          <td width="60px">{review.board_date}</td>
        </tr>
        <summary>
          <tr>
            <td>내용</td>
            <td colSpan={6} id="word">
              {review.board_content}
            </td>
          </tr>
        </summary>
      </details>
    </div>
  );
};

export default ReviewForm;
