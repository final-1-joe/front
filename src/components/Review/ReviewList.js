import { useEffect } from "react";
import ReviewForm from "./ReviewForm";

const ReviewList = ({
  boardlist,
  handlelist,
  handledetail,
  handleupdateform,
}) => {
  useEffect(() => {
    console.log("list");
    handlelist();
  }, []);

  if (boardlist.length === 0) {
    return (
      <div>
        <table align="center">
          <tr>
            <td align="center" height="100px">
              작성된 리뷰가 없습니다.
            </td>
          </tr>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        {/* <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
              <th width="200">수정/삭제</th>
            </tr>
          </thead>
          <tbody>
            {boardlist.map((article) => {
              return (
                <Review
                  article={article}
                  key={article.board_num}
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
                />
              );
            })}
          </tbody>
        </table> */}

        {boardlist.map((review) => {
          return (
            <ReviewForm
              review={review}
              key={review.board_num}
              handlelist={handlelist}
              handledetail={handledetail}
              handleupdateform={handleupdateform}
            />
          );
        })}
      </div>
    );
  }
};

export default ReviewList;
