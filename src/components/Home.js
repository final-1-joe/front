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
      img: "/images/프리랜서1.PNG",
      url: "/",
      // text: "프로젝트 1",
      // description: "로고 제작",
    },
    {
      img: "/images/프리랜서2.PNG",
      url: "/",
      // text: "프로젝트 2",
      // description: "프로그램 제작",
    },
    {
      img: "/images/프리랜서3.PNG",
      url: "/",
      // text: "프로젝트 3",
      // description: "홈페이지 제작",
    },
    {
      img: "/images/프리랜서1.PNG",
      url: "/",
      // text: "프로젝트 1",
      // description: "로고 제작",
    },
  ];
  const data2 = [
    {
      img: "/images/프리랜서1.PNG",
      url: "/",
      // text: "프로젝트 1",
      // description: "로고 제작",
    },
    {
      img: "/images/프리랜서2.PNG",
      url: "/",
      // text: "프로젝트 2",
      // description: "프로그램 제작",
    },
    {
      img: "/images/프리랜서3.PNG",
      url: "/",
      // text: "프로젝트 3",
      // description: "홈페이지 제작",
    },
    {
      img: "/images/프리랜서1.PNG",
      url: "/",
      // text: "프로젝트 1",
      // description: "로고 제작",
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
                    backgroundColor: "#FFE68B",
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
                    backgroundColor: "#FFE68B",
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
                    backgroundColor: "#FFE68B",
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
                {data.map((d) => (
                  <div key={d.url} style={{ padding: "0 10px" }}>
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