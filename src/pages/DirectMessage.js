import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
//import { StompJs } from "@stomp/stompjs";
import "../css/DirectMessage.css";

/*
const client = new StompJs.Client({
  brokerURL: "ws://localhost:8080/api/ws",
  connectHeaders: {
    login: "user",
    passcode: "password",
  },
  debug: function (str) {
    console.log(str);
  },
  reconnectDelay: 5000, // 자동 재연결
  heartbeatIncoming: 4000,
  heartbeatOutcoming: 4000,
});

client.onConnect = function (frame) {
  console.log("연결되었다");
};

client.onStompError = function (frame) {
  console.log("Broker reported error: " + frame.headers["message"]);
  console.log("Additional details: " + frame.body);
};

client.activate();
//client.deactivate(); 비활성화
*/

function DirectMessage() {
  const [slide, setSlide] = useState(false);
  const [cooperate] = useState(true);
  const [attach, setAttach] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="dmContent-div">
      {slide === false ? (
        <div className="dmLft-div2">
          <div
            className="dmchat-room-select"
            onClick={() => {
              setSelect(0);
            }}
          >
            <div className="dmprofile-photo"></div>
            <div className="dmprofile-name">프리랜서 1</div>
            <div className="dmprofile-notify">2</div>
            {select === 0 ? <div className="dmprofile-line"></div> : null}
            <div className="dmprofile-content">안녕하세요 저번에 말씀</div>
          </div>
          <div
            className="dmchat-room-select"
            onClick={() => {
              setSelect(1);
            }}
          >
            <div className="dmprofile-photo"></div>
            <div className="dmprofile-name">프리랜서 2</div>
            <div className="dmprofile-notify">1</div>
            {select === 1 ? <div className="dmprofile-line"></div> : null}
            <div className="dmprofile-content">
              요청하신 자료 올려드렸습니다
            </div>
          </div>
          <div
            className="dmchat-room-select"
            onClick={() => {
              setSelect(2);
            }}
          >
            <div className="dmprofile-photo-tmp"></div>
            <div className="dmprofile-name">기업 1</div>
            <div className="dmprofile-notify" hidden>
              1
            </div>
            {select === 2 ? <div className="dmprofile-line"></div> : null}
            <div className="dmprofile-content">
              저번에 말씀드렸 건에 관련해서
            </div>
          </div>
          <div
            className="dmchat-room-select"
            onClick={() => {
              setSelect(3);
            }}
          >
            <div className="dmprofile-photo-tmp"></div>
            <div className="dmprofile-name">기업 2</div>
            <div className="dmprofile-notify" hidden>
              1
            </div>
            {select === 3 ? <div className="dmprofile-line"></div> : null}
            <div className="dmprofile-content">상기 프로젝트 관련하여</div>
          </div>
        </div>
      ) : (
        <>
          <div className="dmLft-div">
            <div
              className="dmdetail-profile"
              onClick={() => {
                setSlide(!slide);
              }}
            ></div>
            <div className="dmdetail-bottom">
              {/* 해당 값을 뭐 받아온 데이터[select] 이런식으로*/}
              <div className="dmdetail-name">기업 1</div>{" "}
              <div className="dmdetail-email">enterprise1@naver.com</div>
              <div className="dmdetail-telephone">02-541-3000</div>
              <div className="dmdetail-score">평점 4.2 / 5.0</div>
              <img
                src="DirectMessage/4.5.png"
                alt="score"
                className="dmdetail-score-image"
              ></img>
              <div className="dmdetail-line"></div>
              {cooperate ? (
                <>
                  <div className="dmcorporation-img"></div>
                  <div className="dmcorporation-text">협 업 중</div>
                </>
              ) : (
                <div className="dmnot-cooperate">협업중인 기업이 아닙니다</div>
              )}
            </div>
          </div>
        </>
      )}

      <div className="dmRgt-div-top">
        <div
          className="dmundo-button"
          onClick={() => {
            navigate(-1);
          }}
        ></div>
        <div className="dmRgt-center-div">
          <div className="dmRgt-center-div-profile"></div>
          <div className="dmRgt-center-div-name">기업 1</div>
        </div>
        <div
          className="dminformation-button"
          onClick={() => {
            setSlide(!slide);
          }}
        ></div>
        <div className="dmdvide-line"></div>
      </div>
      <div className="dmRgt-div-bottom">
        <img
          src="DirectMessage/enterprise1.png"
          alt="profile1"
          className="dmRgt-chat-profile"
        ></img>
        <div className="dmRgt-chat-name">기업 1</div>
        <div className="dmRgt-chat-arrow"></div>
        <div className="dmcombine">
          <div className="dmRgt-chat-content">안녕하세요</div>
          <div className="dmRgt-chat-time">15:39</div>
        </div>
        <div className="dmRgt-chat-arrow"></div>
        <div className="dmcombine">
          <div className="dmRgt-chat-content">
            연속으로써도 css 안무너지는지 테스트
          </div>
          <div className="dmRgt-chat-time">15:39</div>
        </div>
        <img
          src="DirectMessage/freelancer1.png"
          alt="profile2"
          className="dmRgt-chat-profile-me"
        ></img>
        <div className="dmRgt-chat-name-me">나</div>
        <div className="dmRgt-chat-arrow-me"></div>
        <div className="dmcombine-me">
          <div className="dmRgt-chat-content-me">
            저번에 말씀드렸던 프로젝트 관련해서 질문이 있는데 판매 방향은
            어떤식으로 결정이 되었나요?
          </div>
          <div className="dmRgt-chat-time-me">15:39</div>
        </div>
        <div className="dmRgt-chat-arrow-me"></div>
        <div className="dmcombine-me">
          <div className="dmRgt-chat-content-me">
            여기도 연속으로 썼을때 무너지는지 테스트
          </div>
          <div className="dmRgt-chat-time-me">15:39</div>
        </div>
        <img
          src="DirectMessage/enterprise1.png"
          alt="profile1"
          className="dmRgt-chat-profile"
        ></img>
        <div className="dmRgt-chat-name">기업 1</div>
        <div className="dmRgt-chat-arrow"></div>
        <div className="dmcombine">
          <div className="dmRgt-chat-content">
            테스트줄바꿈한글몇글자까지들어가는지
          </div>
          <div className="dmRgt-chat-time">15:39</div>
        </div>
      </div>

      <div className="dmRgt-div-input">
        <div
          className="dminput-something"
          onClick={() => {
            setAttach(!attach);
          }}
        ></div>
        {attach === true ? (
          <>
            <div className="dmattach-pic"></div>
            <div className="dmattach-file"></div>
          </>
        ) : null}

        <input
          type="text"
          className="dminput-text"
          placeholder="메시지를 입력하세요"
        ></input>
        <div className="dminput-button">보내기</div>
        <div className="dminput-line"></div>
      </div>
    </div>
  );
}

export default DirectMessage;
