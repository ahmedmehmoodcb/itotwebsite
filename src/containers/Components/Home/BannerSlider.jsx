/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";

const settings = {
  infinite: true,
  lazyLoad: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  dots: true,
  autoplay: true,
  pauseOnHover: true,
};

const slides = [
  { label: "Slide 1", path: "/assets/images/home/slider/slide-1.jpg" },
  { label: "Slide 2", path: "/assets/images/home/slider/slide-2.jpg" },
  { label: "Slide 3", path: "/assets/images/home/slider/slide-3.jpg" },
  { label: "Slide 4", path: "/assets/images/home/slider/slide-4.jpg" },
];

function BannerSlider() {
  return (
    <div className="mb-5">
      <Slider {...settings}>
        {slides.map(item => (
          <div key={item.label}>
            <img src={item.path} alt={item.label} className="w-screen h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerSlider;
