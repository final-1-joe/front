import axios from "axios";
import "../../../css/Review.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FreeReviewList from "./FreeReviewList";
import FreeReviewWrite from "./FreeReviewWrite";
import FreeReviewAvg from "./FreeReviewAvg";

const FreeReview = (props) => {
  const [review, setReview] = useState({});
  const [reviewForm, setReviewForm] = useState(false);
  const fre_rv_target = props.fre_rv_target;
  console.log("props fre_rv_target: ", fre_rv_target);

  useEffect(() => {
    getReviewList();
  }, []);

  const getReviewList = () => {
    axios
      .get(
        `http://localhost:8080/frereview/list?fre_rv_target=${fre_rv_target}`,
        {}
      )
      .then((res) => {
        const data = res.data;
        setReview(data);
        console.log("getReviewList => ", data);
      })
      .catch((e) => {
        console.log("리뷰 목록을 가져오지 못했습니다.");
        console.error(e);
      });
  };

  const toggleReviewForm = () => {
    setReviewForm(!reviewForm);
  };

  return (
    <div id={review.pj_rv_num} className="RvContainer">
      <div className="RvWrite">
        <button className="RvBtn2" onClick={toggleReviewForm}>
          작성하기
        </button>
      </div>

      {reviewForm && <FreeReviewWrite fre_rv_target={fre_rv_target} />}

      <FreeReviewAvg review={review} fre_rv_target={fre_rv_target} />
      <FreeReviewList review={review} fre_rv_target={fre_rv_target} />
    </div>
  );
};
export default FreeReview;
