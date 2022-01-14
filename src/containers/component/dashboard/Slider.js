import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarosalSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowLeft: false,
    arrowRight: false,
    dots: true,
    arrows: false,
    autoplay: true,
    focusOnSelect: true,
  };
  return (
    <div className="container-fluid mb-5">
      <div className="mx-3">
        <Slider {...settings}>
          <div>
            <img
              src="Page-01-Sec-03/003-b.jpg"
              alt="link not found"
              style={{ width: "100%", height: "70vh", margin: "auto" }}
            />
          </div>

          <div>
            <img
              src="Page-01-Sec-03/004-b.jpg"
              alt="link not found"
              style={{ width: "100%", height: "70vh", margin: "auto" }}
            />
          </div>
          <div>
            <img
              src="Page01Sec01/002Slide-Pictures5.jpg"
              alt="link not found"
              style={{ width: "100%", height: "70vh", margin: "auto" }}
            />
          </div>
          <div>
            <img
              src="Page01Sec01/002Slide-Pictures3.jpg"
              alt="link not found"
              style={{ width: "100%", height: "70vh", margin: "auto" }}
            />
          </div>
        </Slider>
      </div>
      {/* ******************************************* */}
      {/* <div className="carousel-indicators my-5 ">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
     */}
    </div>
  );
}

export default CarosalSlider;

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
{
  /* <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="..." className="d-block w-100" alt="...">
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="..." className="d-block w-100" alt="...">
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="...">
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div> */
}
{
  /* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */
}
