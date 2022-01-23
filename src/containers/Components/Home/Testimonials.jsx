/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from "react-icons/fa";
import SectionWrapper from "../../Common/containers/SectionWrapper";

const settings = {
  infinite: true,
  swipeToSlide: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  prevArrow: <FaAngleLeft />,
  nextArrow: <FaAngleRight />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const testimonials = [
  {
    name: "Mr. Yaseen",
    message:
      "Irure proident consectetur pariatur incididunt. Voluptate irure cupidatat qui ea quis deserunt enim proident officia minim nulla.",
    image: "/assets/images/home/testimonials/yaseen.png",
  },
  {
    name: "Dr. Zynep Polat",
    message:
      "Irure proident consectetur pariatur incididunt. Voluptate irure cupidatat qui ea quis deserunt enim proident officia minim nulla.",
    image: "/assets/images/home/testimonials/zynep.png",
  },
  {
    name: "Mr. Osama Saeed",
    message:
      "Irure proident consectetur pariatur incididunt. Voluptate irure cupidatat qui ea quis deserunt enim proident officia minim nulla.",
    image: "/assets/images/home/testimonials/osama.png",
  },
  {
    name: "Mr. Obrein",
    message:
      "Irure proident consectetur pariatur incididunt. Voluptate irure cupidatat qui ea quis deserunt enim proident officia minim nulla.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const TestimonialCard = ({ data }) => (
  <div
    key={data.name}
    className="h-80 flex flex-col items-center sm:gap-3 lg:gap-8 sm:p-3 md:p-4 lg:p-5 sm:mx-3 md:mx-4 lg:mx-5 border-2 shadow-xl"
  >
    <FaQuoteLeft className="text-custom-red" size={20} />
    <p className="text-center text-sm">{data.message}</p>
    <img
      className="h-16 w-16 border-1 rounded-full"
      src={data.image}
      alt={data.name}
    />
    <h4 className="text-center font-bold text-custom-blue">{data.name}</h4>
  </div>
);

function Testimonials() {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-2 pb-5">
        <h5 className="uppercase text-custom-red font-semibold">
          Testimonials
        </h5>
        <h3 className="text-custom-blue font-bold text-2xl">
          What people say about us
        </h3>
      </div>
      <Slider {...settings}>
        {testimonials.map(item => (
          <TestimonialCard data={item} />
        ))}
      </Slider>
    </SectionWrapper>
  );
}

TestimonialCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Testimonials;
