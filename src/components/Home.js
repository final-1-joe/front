import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slideshow.css";

function PrevArrow(props) {
  const { className, onClick} = props;
  const handleClick = () => {
    if (typeof onClick === 'function') {
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
  const { className, onClick} = props;
  const handleClick = () => {
    if (typeof onClick === 'function') {
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
    variableWidth: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    vertical: true,
    initialSlide:0
  }; 

  const data = [
    {
      img:"/images/logo.png",
      url: "/",
      text: "프로젝트 1",
      description: "로고 제작",
    },
    {
      img:"/images/logo2.PNG",
      url: "/",
      text: "프로젝트 2",
      description: "프로그램 제작",
    },
    {
      img:"/images/logo.png",
      url: "/",
      text: "프로젝트 3",
      description: "홈페이지 제작",
    },
    {
      img:"/images/logo2.PNG",
      url: "/",
      text: "프로젝트 4",
      description: "영상 편집",
    },
  ]
  const data2 = [
    {
      img:"/images/logo.png",
      url: "/",
      text: "홍현덕",
      description: "로고 제작 전문",
    },
    {
      img:"/images/logo2.PNG",
      url: "/",
      text: "이길주",
      description: "코딩 전문",
    },
    {
      img:"/images/logo.png",
      url: "/",
      text: "김성만",
      description: "영상 편집 전문",
    },
    {
      img:"/images/logo2.PNG",
      url: "/",
      text: "최유진",
      description: "프론트엔드 전문",
    },
  ]
  
  return (
    <div>
      <center>
        <form>
        <tr>
            <td colSpan="2" align="center">
            <Link to="/PjRegistration">
              <input
                type="button"
                value="프로젝트 등록"
                style={{ width: '150px', height: '50px', backgroundColor: '#ffe68b', fontSize: '20px', border: 'none' }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="button"
                value="프리랜서 등록"
                onClick={"/"}
                style={{ width: '150px', height: '50px', backgroundColor: '#ffe68b', fontSize: '20px', border: 'none' }}
              />
              </Link>
            </td>
            <p>&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;</p>
          </tr>

          <div id="event_show">
            <div style={{ height: '500px' }}>
            <h3>추천 프로젝트(프리랜서) </h3>
            <p>&nbsp;&nbsp;</p>
            <Slider {...settings} className="slick-slider" style={{ display: "flex", flexDirection: "row" }}>
              {data.map((d) => (
                <div key={d.url} style={{padding: "0 10px"}}>
                  <Link to={d.url}>
                    <img src={d.img} alt={d.text} />
                    <div className="d-info">
                      <h2>{d.text}</h2>
                       <p>{d.description}</p>
                    </div>
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
            <div style={{ height: '500px' }}>
            <h3>신규 프로젝트/프리랜서</h3>
            <p>&nbsp;&nbsp;</p>
            <Slider {...settings} className="slick-slider" style={{ display: "flex", flexDirection: "row" }}>
              {data2.map((d) => (
                <div key={d.url} style={{padding: "0 10px"}}>
                  <Link to={d.url}>
                    <img src={d.img} alt={d.text} />
                    <div className="d-info">
                      <h2>{d.text}</h2>
                       <p>{d.description}</p>
                    </div>
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
