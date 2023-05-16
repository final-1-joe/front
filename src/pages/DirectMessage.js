import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import "../css/DirectMessage.css";
import axios from "axios";

let stompClient = null; // 웹소캣 라이브러리 stomp 객체 입니다. 랜더링이 일어날때마다 소켓 객체를 만들어서 밖으로 꺼냈습니다.

function DirectMessage() {
  const [slide, setSlide] = useState(false); // 좌측 목록 채팅방  or 상세정보
  const [cooperate] = useState(true); // 상세정보 창에서 협력중인지 아닌지에 따라 달라짐
  const [attach, setAttach] = useState(false); // 파일 첨부 버튼 클릭 여부
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const [inputchat, setInputchat] = useState("");
  const [chatarraybox, setChatArrayBox] = useState([]);
  const inputchatvalue = (e) => {
    setInputchat(e.target.value);
  };
  const chatfocus = (e) => {
    e.target.placeholder = "";
  };
  const chatblur = (e) => {
    e.target.placeholder = "메시지를 입력하세요";
  };
  const date = new Date(); // 현재시간
  const [chatArray, setChatArray] = useState([]);
  const chatRef = useRef(null);

  useEffect(() => {
    const chatDiv = chatRef.current;
    chatDiv.scrollTop = chatDiv.scrollHeight;
  });

  //window.sessionStorage.setItem("member_id", "kys2743"); // 테스트용 로그인 아이디 세션, 채팅할때 이부분 주석
  var login_id = String(window.sessionStorage.getItem("member_id"));

  const chatroom = () => {
    axios
      .post("http://localhost:8080/chatroom", {
        message_id: "",
        chatroom_id: "",
        user_id: login_id,
        message_content: "",
        message_date: "",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("/chatroom axios 에러 발생" + error);
      });
  };

  const chatroomcontent = () => {
    axios
      .post("http://localhost:8080/lookupmsg", {
        message_id: "",
        chatroom_id: 1,
        user_id: "",
        message_content: "",
        message_date: "",
      })
      .then((res) => {
        //console.log(res.data);
        const jsonData1 = res.data;
        const data1array = Object.values(jsonData1);
        setChatArrayBox(data1array);
      })
      .catch((error) => {
        console.error("/lookupmsg axios 에러 발생" + error);
      });
  };

  useEffect(() => {
    chatroom();
    chatroomcontent();
    connect();
  }, []);

  function connect() {
    let socket = new SockJS("http://localhost:8080/chat");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
      //console.log("Connected: " + frame);
      //console.log("1번 채팅방 구독");
      stompClient.subscribe("/sub/1", function (response) {
        //console.log(response.body); // 채팅 내용인듯?
        var content = JSON.parse(response.body);
        setChatArray((prevChatArray) => {
          if (
            prevChatArray.length === 0 ||
            prevChatArray[prevChatArray.length - 1].msgId !== content.user_id ||
            prevChatArray[prevChatArray.length - 1].msgContent !==
              content.message_content ||
            prevChatArray[prevChatArray.length - 1].msgDate !==
              content.message_date
          ) {
            return [
              ...prevChatArray,
              {
                msgId: content.user_id,
                msgContent: content.message_content,
                msgDate: content.message_date,
              },
            ];
          } else {
            return prevChatArray;
          }
        });
      });

      /* 
      //--------------------------------- 웹소캣 통신 내용 --------------------------------------------//
      //해당 부분을 보려면 connect() 함수를 useEffect에서 밖으로 빼야합니다.
      console.log(
        "배열 데이터 " +
          JSON.stringify(chatArray) +
          "배열 크기는 " +
          chatArray.length
      );
      */
    });
  }

  // 메시지를 웹소캣에 전달합니다.
  function send() {
    stompClient.send(
      "/pub/message",
      {},
      JSON.stringify({
        chatroom_id: 1,
        user_id: login_id,
        message_content: inputchat,
        message_date: Date.now(),
      })
    );
    setInputchat("");
  }

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
          <div
            className="dmRgt-center-div-profile"
            onClick={() => {
              alert("아이디 변경 dlrdyd97"); // 테스트용 코드
              window.sessionStorage.setItem("member_id", "dlrdyd97");
              login_id = window.sessionStorage.getItem("member_id");
            }}
          ></div>
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
      <div className="dmRgt-div-bottom" ref={chatRef}>
        {chatarraybox.map(function (i) {
          // DB에 있는 메시지를 채팅창에 표시하는 부분
          return (
            <>
              {i.user_id === login_id ? (
                <>
                  <img
                    src="DirectMessage/freelancer1.png"
                    alt="profile2"
                    className="dmRgt-chat-profile-me"
                  ></img>
                  <div className="dmRgt-chat-name-me">나</div>
                  <div className="dmRgt-chat-arrow-me"></div>
                  <div className="dmcombine-me">
                    <div className="dmRgt-chat-content-me">
                      {i.message_content}
                    </div>
                    <div className="dmRgt-chat-time-me">{i.message_date}</div>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src="DirectMessage/freelancer1.png"
                    alt="profile2"
                    className="dmRgt-chat-profile"
                  ></img>
                  <div className="dmRgt-chat-name">{i.user_id}</div>
                  <div className="dmRgt-chat-arrow"></div>
                  <div className="dmcombine">
                    <div className="dmRgt-chat-content">
                      {i.message_content}
                    </div>
                    <div className="dmRgt-chat-time">{i.message_date}</div>
                  </div>
                </>
              )}
            </>
          );
        })}

        {chatArray.map(function (i) {
          // 웹소켓 통신을 채팅창에 표시하는 부분
          return (
            <>
              {i.msgId === login_id ? (
                <>
                  <img
                    src="DirectMessage/freelancer1.png"
                    alt="profile2"
                    className="dmRgt-chat-profile-me"
                  ></img>
                  <div className="dmRgt-chat-name-me">나</div>
                  <div className="dmRgt-chat-arrow-me"></div>
                  <div className="dmcombine-me">
                    <div className="dmRgt-chat-content-me">{i.msgContent}</div>
                    <div className="dmRgt-chat-time-me">{i.msgDate}</div>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src="DirectMessage/freelancer1.png"
                    alt="profile2"
                    className="dmRgt-chat-profile"
                  ></img>
                  <div className="dmRgt-chat-name">{i.msgId}</div>
                  <div className="dmRgt-chat-arrow"></div>
                  <div className="dmcombine">
                    <div className="dmRgt-chat-content">{i.msgContent}</div>
                    <div className="dmRgt-chat-time">{i.msgDate}</div>
                  </div>
                </>
              )}
            </>
          );
        })}
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
          value={inputchat}
          onFocus={chatfocus}
          onBlur={chatblur}
          onChange={inputchatvalue}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // 엔터키를 눌러도 보내기 버튼을 누르는 것과 같음
              send();
            }
          }}
        ></input>
        <div
          className="dminput-button"
          onClick={() => {
            send();
          }}
        >
          보내기
        </div>
        <div className="dminput-line"></div>
      </div>
    </div>
  );
}

export default DirectMessage;
