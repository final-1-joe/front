import { useState } from "react";
import axios from "axios";
import ReviewList from "./ReviewList";
import ReviewWrite from "./ReviewWrite";
import ReviewUpdateForm from "./ReviewUpdateForm";

function Reveiw() {
  const [reviewlist, setReviewlist] = useState([]);

  const [review, setreview] = useState({
    review_num: 0,
    review_writer: "",
    review_grade: "",
    review_content: "",
    review_date: "",
  });

  // 0:글쓰기, 1:상세보기, 2:글수정
  const [actionMode, setActionMode] = useState(0);

  // 글목록
  const getList = () => {
    axios
      .get("/list", {})
      .then((res) => {
        // res : 서버의 응답 결과 저장
        console.log("res ==>", res);
        const { data } = res; // data = res.data
        console.log("data ==>", data);
        setReviewlist(data);
        setActionMode(0);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // 상세보기
  const handleDetail = (e) => {
    // alert("handleDetail(actionMode) =>" + actionMode.mode);
    axios
      .post("/detail", { review_num: e.target.id })
      .then((res) => {
        // console.log("detail(res) =>", res);
        const { data } = res;
        // server.js : server.js 사용시 data가 배열로 반환
        setreview({
          review_num: data[0].review_num,
          review_writer: data[0].review_writer,
          review_grade: data[0].review_grade,
          review_content: data[0].review_content,
          review_date: data[0].review_date,
        });
        setActionMode(1);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // 수정폼 보기
  const handleUpdateForm = (e) => {
    axios
      .post("/detail", { review_num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log("handleUpdateForm =>", data);

        setreview({
          review_num: data[0].review_num,
          review_writer: data[0].review_writer,
          review_grade: data[0].review_grade,
          review_content: data[0].review_content,
          review_date: data[0].review_date,
        });
        setActionMode(2);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdate = () => {
    console.log("handleUpdate =>", review);
    axios
      .post("/update", {
        review_num: review.review_num,
        review_grade: review.review_grade,
        review_content: review.review_content,
      })
      .then((res) => {
        console.log("handleUpdate( changedRows) =>", res.data.changedRows);
        getList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  console.log("actionMode : " + actionMode);

  return (
    <div>
      <ReviewList
        reviewlist={reviewlist}
        actionmode={actionMode}
        handlelist={getList}
        handledetail={handleDetail}
        handleupdateform={handleUpdateForm}
      ></ReviewList>
    </div>
  );

  // if (actionMode === 0) {
  //   return (
  //     <div>
  //       <ReviewList
  //         reviewlist={reviewlist}
  //         actionmode={actionMode}
  //         handlelist={getList}
  //         handledetail={handleDetail}
  //         handleupdateform={handleUpdateForm}
  //       ></ReviewList>
  //     </div>
  //   );
  // } else if (actionMode === 1) {
  //   return (
  //     <div>
  //       <ReviewList
  //         reviewlist={reviewlist}
  //         handlelist={getList}
  //         handledetail={handleDetail}
  //         handleupdateform={handleUpdateForm}
  //       ></ReviewList>
  //     </div>
  //   );
  // } else if (actionMode === 2) {
  //   return (
  //     <div>
  //       <ReviewUpdateForm
  //         review={review}
  //         setreview={setreview}
  //         handleupdate={handleUpdate}
  //       ></ReviewUpdateForm>
  //       <br />
  //       <ReviewList
  //         reviewlist={reviewlist}
  //         handlelist={getList}
  //         handledetail={handleDetail}
  //         handleupdateform={handleUpdateForm}
  //       ></ReviewList>
  //     </div>
  //   );
  // }
}

export default Reveiw;
