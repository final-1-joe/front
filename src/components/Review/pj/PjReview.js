import axios from "axios";
import "../../../css/Review.css";
import PjReviewWrite from "./PjReviewWrite";
import PjReviewAvg from "./PjReviewAvg";
import PjReviewList from "./PjReviewList";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PjReview = (props) => {
  const navigate = useNavigate();
  const [review, setReview] = useState({});
  const [reviewForm, setReviewForm] = useState(false);
  const pj_num = props.pj_num;
  console.log("props pj_num: ", pj_num);

  useEffect(() => {
    getReviewList();
  }, []);

  const getReviewList = () => {
    axios
      .get(`http://localhost:8080/pjreview/list?pj_num=${pj_num}`, {})
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

      {reviewForm && <PjReviewWrite pj_num={pj_num} />}

      <PjReviewAvg review={review} pj_num={pj_num} />
      <PjReviewList review={review} pj_num={pj_num} />
    </div>
  );
};

export default PjReview;
