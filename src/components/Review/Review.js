import { useState } from "react";
import axios from "axios";
import ReviewList from "./ReviewList";
import ReviewWrite from "./ReviewWrite";
import ReviewUpdateForm from "./ReviewUpdateForm";

function Reveiw() {
  const [boardlist, setBoardlist] = useState([]);

  const [review, setreview] = useState({
    board_num: 0,
    board_writer: "",
    board_grade: "",
    board_content: "",
    board_date: "",
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
        setBoardlist(data);
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
      .post("/detail", { board_num: e.target.id })
      .then((res) => {
        // console.log("detail(res) =>", res);
        const { data } = res;
        // server.js : server.js 사용시 data가 배열로 반환
        setreview({
          board_num: data[0].board_num,
          board_writer: data[0].board_writer,
          board_grade: data[0].board_grade,
          board_content: data[0].board_content,
          board_date: data[0].board_date,
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
      .post("/detail", { board_num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log("handleUpdateForm =>", data);

        setreview({
          board_num: data[0].board_num,
          board_writer: data[0].board_writer,
          board_grade: data[0].board_grade,
          board_content: data[0].board_content,
          board_date: data[0].board_date,
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
        board_num: review.board_num,
        board_grade: review.board_grade,
        board_content: review.board_content,
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
        boardlist={boardlist}
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
  //         boardlist={boardlist}
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
  //         boardlist={boardlist}
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
  //         boardlist={boardlist}
  //         handlelist={getList}
  //         handledetail={handleDetail}
  //         handleupdateform={handleUpdateForm}
  //       ></ReviewList>
  //     </div>
  //   );
  // }
}

export default Reveiw;
