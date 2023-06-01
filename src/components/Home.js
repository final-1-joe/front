import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slideshow.css";

function PrevArrow(props) {
  const { className, onClick } = props;
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return (
    <div className={className} onClick={handleClick}>
      <img src="/images/arrow_left.png" alt="arrow prev" id="left"></img>
    </div>
  );
}
function NextArrow(props) {
  const { className, onClick } = props;
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return (
    <div className={className} onClick={handleClick}>
      <img src="/images/arrow_right.png" alt="arrow next" id="right"></img>
    </div>
  );
}


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    vertical: false,
    initialSlide: 0,
  };

  const data = [
    {
      content: [
        <div className="custom-slide">
         <div style={{ position: 'absolute',  top: '-10px', fontSize: '17px' }}>
          <h2>삼성카드</h2>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div style={{ position: 'absolute', top: '0px', left: '110px' }}>
      <img src="/images/삼성카드.png" alt="Samsung Card" style={{ width: '100px' }} />
    </div>
        <div className="custom-slide2">
        <div style={{ position: 'absolute', left: '3px', bottom: '60px', fontSize: '14px' }}>
          <span>삼성카드 쇼핑몰 사이트 개발(백엔드)</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>예상 금액:월 500만원</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>지역: 서울</span>
        </div>
        </div>
        <div className="custom-slide3">
        <div style={{ position: 'absolute', left: '3px', bottom: '30px', fontSize: '14px' }}>
          예상 기간: 2023-06-15 ~ 2023-12-15
        </div>
        </div>
        <div className="custom-slide3"style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', bottom: '3px', fontSize: '14px' }}>
        <span>개발</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>java</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>Springboot</span>
          </div>
        </div>
      </div>
    ],
    },
    {
      content: [
        <div className="custom-slide">
         <div style={{ position: 'absolute',  top: '-10px', fontSize: '17px' }}>
          <h2>이마트 에브리데이</h2>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div style={{ position: 'absolute', top: '5px', right: '140px' }}>
      <img src="/images/이마트.png" alt="e-mart" style={{ width: '80px' }} />
    </div>
        <div className="custom-slide2">
        <div style={{ position: 'absolute', left: '3px', bottom: '60px', fontSize: '14px' }}>
          <span>네이버 스토어 연동</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>예상 금액:월 500만원</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>지역: 서울</span>
        </div>
        </div>
        <div className="custom-slide3">
        <div style={{ position: 'absolute', left: '3px', bottom: '30px', fontSize: '14px' }}>
          예상 기간: 2023-06-15 ~ 2023-12-15
        </div>
        </div>
        <div className="custom-slide3"style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', bottom: '3px', fontSize: '14px' }}>
        <span>개발</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>java</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>API</span>
          </div>
        </div>
      </div>
    ],
    },
    {
      content: [
        <div className="custom-slide">
         <div style={{ position: 'absolute',  top: '-10px', fontSize: '17px' }}>
          <h2>효성</h2>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div style={{ position: 'absolute', top: '18px', left: '60px' }}>
      <img src="/images/효성.png" alt="hyosung" style={{ width: '100px' }} />
    </div>
        <div className="custom-slide2">
        <div style={{ position: 'absolute', left: '3px', bottom: '60px', fontSize: '14px' }}>
          <span>효성 신규 포털 사이트 구축</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>예상 금액:월 500만원</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>지역: 서울</span>
        </div>
        </div>
        <div className="custom-slide3">
        <div style={{ position: 'absolute', left: '3px', bottom: '30px', fontSize: '14px' }}>
          예상 기간: 2023-06-15 ~ 2023-12-15
        </div>
        </div>
        <div className="custom-slide3"style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', bottom: '3px', fontSize: '14px' }}>
        <span>개발</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>java</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>Vue.js</span>
          </div>
        </div>
      </div>
    ],
    },
    {
      content: [
        <div className="custom-slide">
         <div style={{ position: 'absolute',  top: '-10px', fontSize: '17px' }}>
          <h2>한화생명</h2>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div style={{ position: 'absolute', top: '5px', left: '110px' }}>
      <img src="/images/한화생명.jpg" alt="hanhwa" style={{ width: '100px' }} />
    </div>
        <div className="custom-slide2">
        <div style={{ position: 'absolute', left: '3px', bottom: '60px', fontSize: '14px' }}>
          <span>한화생명 라이프플러스 아카데미 운영</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>예상 금액:월 300만원</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>지역: 서울</span>
        </div>
        </div>
        <div className="custom-slide3">
        <div style={{ position: 'absolute', left: '3px', bottom: '30px', fontSize: '14px' }}>
          예상 기간: 2023-06-15 ~ 2023-12-15
        </div>
        </div>
        <div className="custom-slide3"style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', bottom: '3px', fontSize: '14px' }}>
        <span>개발</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>java</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>Jsp</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>Spring</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>SQL/Mybatis</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>JavaScript/jQuery</span>
          </div>
        </div>
      </div>
    ],
    },
  ];
  
  const data2 = [
    {
      content: [
        <div className="custom-slide">
         <div style={{ position: 'absolute',  top: '-10px', fontSize: '17px' }}>
          <h2>김멀티</h2>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div style={{ position: 'absolute', top: '0px', left: '110px' }}>
    </div>
        <div className="custom-slide2">
        <div style={{ position: 'absolute', left: '3px', bottom: '60px', fontSize: '14px' }}>
          <span>협업 여부: 협업 가능</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>생년월일: 1995-03-04</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>성별: 남</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>경력: 3년</span>
          
        </div>
        <div className="custom-slide3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center', position: 'relative' }}>
          <div style={{position: 'absolute', bottom: '60px', fontSize: '20px', fontWeight: 'bold' }}>
            "끈기와 열정이 있는 개발자 김멀티입니다!"
          </div>
        </div>
        </div>
        <div className="custom-slide3"style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', bottom: '3px', fontSize: '14px' }}>
        <span>개발</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>Java</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>Spring</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>jQuery</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>MySQL</span>
          </div>
        </div>
      </div>
    ],
    },
    {
      content: [
        <div className="custom-slide">
         <div style={{ position: 'absolute',  top: '-10px', fontSize: '17px' }}>
          <h2>이멀티</h2>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div style={{ position: 'absolute', top: '0px', left: '110px' }}>
    </div>
        <div className="custom-slide2">
        <div style={{ position: 'absolute', left: '3px', bottom: '60px', fontSize: '14px' }}>
          <span>협업 여부: 협업 가능</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>생년월일: 1995-03-04</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>성별: 남</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>경력: 5년</span>
        </div>
        <div className="custom-slide3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center', position: 'relative' }}>
          <div style={{position: 'absolute', bottom: '60px', fontSize: '20px', fontWeight: 'bold' }}>
            "준비된 개발자 이멀티입니다!"
          </div>
        </div>
        </div>
        <div className="custom-slide3"style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', bottom: '3px', fontSize: '14px' }}>
        <span>개발</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>JavaScript</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>React</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>TypeScript</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>Node.js</span>
          </div>
        </div>
      </div>
    ],
    },
    {
      content: [
        <div className="custom-slide">
         <div style={{ position: 'absolute',  top: '-10px', fontSize: '17px' }}>
          <h2>박멀티</h2>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div style={{ position: 'absolute', top: '18px', left: '60px' }}>
    </div>
    <div className="custom-slide2">
        <div style={{ position: 'absolute', left: '3px', bottom: '60px', fontSize: '14px' }}>
          <span>협업 여부: 협업 가능</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>생년월일: 1988-05-26</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>성별: 여</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>경력: 5년</span>
        </div>
        <div className="custom-slide3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center', position: 'relative' }}>
          <div style={{position: 'absolute', bottom: '60px', fontSize: '20px', fontWeight: 'bold' }}>
            "뭐든지 노력하는 개발자 박멀티입니다!"
          </div>
        </div>
        </div>
        <div className="custom-slide3"style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', bottom: '3px', fontSize: '14px' }}>
        <span>개발</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>JavaScript</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>React</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>TypeScript</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>Node.js</span>
          </div>
        </div>
      </div>
    ],
    },
    {
      content: [
        <div className="custom-slide">
         <div style={{ position: 'absolute',  top: '-10px', fontSize: '17px' }}>
          <h2>이멀티</h2>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div style={{ position: 'absolute', top: '0px', left: '110px' }}>
    </div>
        <div className="custom-slide2">
        <div style={{ position: 'absolute', left: '3px', bottom: '60px', fontSize: '14px' }}>
          <span>협업 여부: 협업 가능</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>생년월일: 1995-03-04</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>성별: 남</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>경력: 5년</span>
        </div>
        <div className="custom-slide3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center', position: 'relative' }}>
          <div style={{position: 'absolute', bottom: '60px', fontSize: '20px', fontWeight: 'bold' }}>
            "준비된 개발자 이멀티입니다!"
          </div>
        </div>
        </div>
        <div className="custom-slide3"style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', bottom: '3px', fontSize: '14px' }}>
        <span>개발</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>JavaScript</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>React</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>TypeScript</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>Node.js</span>
          </div>
        </div>
      </div>
    ],
    },
  ];

  return (
    <div>
      <center>
        <form>
          <tr>
            <td colSpan="2" align="center">
              <Link to="/pjdetail/insert">
                <input
                  type="button"
                  value="프로젝트 등록"
                  style={{
                    width: "150px",
                    height: "50px",
                    backgroundColor: "#ffe68b",
                    fontSize: "20px",
                    border: "none",
                  }}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="button"
                  value="프리랜서 등록"
                  onClick={"/"}
                  style={{
                    width: "150px",
                    height: "50px",
                    backgroundColor: "#ffe68b",
                    fontSize: "20px",
                    border: "none",
                  }}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="button"
                  value="태그 검색"
                  onClick={"/"}
                  style={{
                    width: "150px",
                    height: "50px",
                    backgroundColor: "#ffe68b",
                    fontSize: "20px",
                    border: "none",
                  }}
                />
              </Link>
            </td>
            <p>&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;</p>
          </tr>
          <div>
            <h2>
              Peoplancer와 함께 성공적인 비즈니스를 시작해보세요!
            </h2>
          </div>

          <div id="event_show">
            <div style={{ height: "500px" }}>
              <h3>추천 프로젝트(프리랜서) </h3>
              <p>&nbsp;&nbsp;</p>
              <Slider
                {...settings}
                className="slick-slider"
                style={{ display: "flex", flexDirection: "row" }}
              >
                {data.map((item) => (
                  <div key={item.content} style={{ padding: "0 10px" }}>
                    <Link to={item.url}>
                    {item.content}
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <p>&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;</p>
          <div id="event_show">
            <div style={{ height: "500px" }}>
              <h3>신규 프로젝트/프리랜서</h3>
              <p>&nbsp;&nbsp;</p>
              <Slider
                {...settings}
                className="slick-slider"
                style={{ display: "flex", flexDirection: "row" }}
              >
                {data2.map((d) => (
                  <div key={d.url} style={{ padding: "0 10px" }}>
                    <Link to={d.url}>
                    {d.content}
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </form>
      </center>
      <div class="scrolling-image">
        <img src="/images/dm.png" alt="dm"></img>
      </div>
    </div>
  );
};
export default Home;
