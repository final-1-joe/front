import axios from "axios";
import "../../../css/Review.css";
import PjReviewWrite from "./PjReviewWrite";
import PjReviewAvg from "./PjReviewAvg";
import PjReviewList from "./PjReviewList";
import { useState, useEffect } from "react";

const PjReview = (props) => {
  const [review, setReview] = useState({});
  const [reviewForm, setReviewForm] = useState(false);
  const [usercode, setUsercode] = useState([]);
  const [isFreeUser, setIsFreeUser] = useState(false);

  const loginid = window.sessionStorage.getItem("user_id");
  const pj_num = props.pj_num;

  useEffect(() => {
    getReviewList();
    getUser();
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

  const getUser = () => {
    axios
      .post(`http://localhost:8080/user/getuser`, { user_id: loginid })
      .then((res) => {
        const data = res.data;
        setUsercode(data);
        setIsFreeUser(data.user_code === "free");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  console.log("usercode data: ", usercode, usercode.user_id);
  console.log("usercode user_code: ", usercode.user_code);

  // usercode.user_code 값을 부모 컴포넌트로 전달
  useEffect(() => {
    props.onUsercodeChange(usercode.user_code);
  }, [usercode.user_code]);

  const toggleReviewForm = () => {
    if (isFreeUser) {
      setReviewForm(!reviewForm);
    } else {
      if (usercode.user_code === "client") {
        alert("프로젝트 리뷰는 협업한 프리랜서만 작성 가능합니다.");
      }
    }
  };

  return (
    <div id={review.pj_rv_num} className="RvContainer">
      <div className="RvWrite">
        {usercode.user_code !== "client" && (
          <button
            className="RvBtn2"
            onClick={toggleReviewForm}
            disabled={!isFreeUser}
          >
            작성하기
          </button>
        )}
      </div>

      {reviewForm && <PjReviewWrite pj_num={pj_num} />}

      <PjReviewAvg review={review} pj_num={pj_num} />
      <PjReviewList review={review} pj_num={pj_num} />
    </div>
  );
};

export default PjReview;
