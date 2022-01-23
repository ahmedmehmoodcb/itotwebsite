import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "../../Common/containers/SectionWrapper";

const cardsData = [
  {
    title: "Bag Free Education",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/slider/slide-1.jpg",
  },
  {
    title: "Multimedia Education",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/slider/slide-2.jpg",
  },
  {
    title: "Colorful Worksheets",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/slider/slide-3.jpg",
  },
  {
    title: "Stem Education",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/slider/slide-4.jpg",
  },
  {
    title: "Game based Education",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/slider/slide-4.jpg",
  },
  {
    title: "Story Telling Presentation",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/slider/slide-3.jpg",
  },
  {
    title: "Hands on Learning",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/slider/slide-2.jpg",
  },
  {
    title: "English in Action",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/slider/slide-1.jpg",
  },
];

const CustomCard = ({ data }) => (
  <div key={data.title} className="h-96 flex flex-col items-center gap-3">
    <div className="hexagon" style={{ background: `url(${data.image})` }} />
    <h4 className="font-bold text-center">{data.title}</h4>
    <p className="text-sm text-center">{data.description}</p>
  </div>
);

function CardsSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {cardsData.map(item => (
          <CustomCard data={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}

CustomCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardsSection;
