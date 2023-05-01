import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/DirectMessage.css";

function DirectMessage() {
  const [slide, setSlide] = useState(false);
  const [cooperate] = useState(true);
  const [attach, setAttach] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="Content-div">
      {slide === false ? (
        <div className="Lft-div2">
          <div
            className="chat-room-select"
            onClick={() => {
              setSelect(0);
            }}
          >
            <div className="profile-photo"></div>
            <div className="profile-name">프리랜서 1</div>
            <div className="profile-notify">2</div>
            {select === 0 ? <div className="profile-line"></div> : null}
            <div className="profile-content">안녕하세요 저번에 말씀</div>
          </div>
          <div
            className="chat-room-select"
            onClick={() => {
              setSelect(1);
            }}
          >
            <div className="profile-photo"></div>
            <div className="profile-name">프리랜서 2</div>
            <div className="profile-notify">1</div>
            {select === 1 ? <div className="profile-line"></div> : null}
            <div className="profile-content">요청하신 자료 올려드렸습니다</div>
          </div>
          <div
            className="chat-room-select"
            onClick={() => {
              setSelect(2);
            }}
          >
            <div className="profile-photo-tmp"></div>
            <div className="profile-name">기업 1</div>
            <div className="profile-notify" hidden>
              1
            </div>
            {select === 2 ? <div className="profile-line"></div> : null}
            <div className="profile-content">저번에 말씀드렸 건에 관련해서</div>
          </div>
          <div
            className="chat-room-select"
            onClick={() => {
              setSelect(3);
            }}
          >
            <div className="profile-photo-tmp"></div>
            <div className="profile-name">기업 2</div>
            <div className="profile-notify" hidden>
              1
            </div>
            {select === 3 ? <div className="profile-line"></div> : null}
            <div className="profile-content">상기 프로젝트 관련하여</div>
          </div>
        </div>
      ) : (
        <>
          <div className="Lft-div">
            <div
              className="detail-profile"
              onClick={() => {
                setSlide(!slide);
              }}
            ></div>
            <div className="detail-bottom">
              {/* 해당 값을 뭐 받아온 데이터[select] 이런식으로*/}
              <div className="detail-name">기업 1</div>{" "}
              <div className="detail-email">enterprise1@naver.com</div>
              <div className="detail-telephone">02-541-3000</div>
              <div className="detail-score">평점 4.2 / 5.0</div>
              <img
                src="DirectMessage/4.5.png"
                alt="score"
                className="detail-score-image"
              ></img>
              <div className="detail-line"></div>
              {cooperate ? (
                <>
                  <div className="corporation-img"></div>
                  <div className="corporation-text">협 업 중</div>
                </>
              ) : (
                <div className="not-cooperate">협업중인 기업이 아닙니다</div>
              )}
            </div>
          </div>
        </>
      )}

      <div className="Rgt-div-top">
        <div
          className="undo-button"
          onClick={() => {
            navigate(-1);
          }}
        ></div>
        <div className="Rgt-center-div">
          <div className="Rgt-center-div-profile"></div>
          <div className="Rgt-center-div-name">기업 1</div>
        </div>
        <div
          className="information-button"
          onClick={() => {
            setSlide(!slide);
          }}
        ></div>
        <div className="dvide-line"></div>
      </div>
      <div className="Rgt-div-bottom">
        <img
          src="DirectMessage/enterprise1.png"
          alt="profile1"
          className="Rgt-chat-profile"
        ></img>
        <div className="Rgt-chat-name">기업 1</div>
        <div className="Rgt-chat-arrow"></div>
        <div className="combine">
          <div className="Rgt-chat-content">안녕하세요</div>
          <div className="Rgt-chat-time">15:39</div>
        </div>
        <img
          src="DirectMessage/freelancer1.png"
          alt="profile2"
          className="Rgt-chat-profile-me"
        ></img>
        <div className="Rgt-chat-name-me">나</div>
        <div className="Rgt-chat-arrow-me"></div>
        <div className="combine-me">
          <div className="Rgt-chat-content-me">
            저번에 말씀드렸던 프로젝트 관련해서 질문이 있는데 판매 방향은
            어떤식으로 결정이 되었나요?
          </div>
          <div className="Rgt-chat-time-me">15:39</div>
        </div>
      </div>

      <div className="Rgt-div-input">
        <div
          className="input-something"
          onClick={() => {
            setAttach(!attach);
          }}
        ></div>
        {attach === true ? (
          <>
            <div className="attach-pic"></div>
            <div className="attach-file"></div>
          </>
        ) : null}

        <input
          type="text"
          className="input-text"
          placeholder="메시지를 입력하세요"
        ></input>
        <div className="input-button">보내기</div>
        <div className="input-line"></div>
      </div>
    </div>
  );
}

export default DirectMessage;
