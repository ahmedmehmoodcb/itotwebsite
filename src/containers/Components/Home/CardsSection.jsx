import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "../../Common/containers/SectionWrapper";
import ImageLoader from "../../Common/components/ImageLoader";

const cardsData = [
  {
    title: "Bag Free Education",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/cards/card-1.png",
  },
  {
    title: "Multimedia Education",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/cards/card-2.png",
  },
  {
    title: "Colorful Worksheets",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/cards/card-3.png",
  },
  {
    title: "Stem Education",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/cards/card-4.png",
  },
  {
    title: "Game based Education",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/cards/card-5.png",
  },
  {
    title: "Story Telling Presentation",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/cards/card-6.png",
  },
  {
    title: "Hands on Learning",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/cards/card-7.png",
  },
  {
    title: "English in Action",
    description:
      "Ullamco fugiat est excepteur ipsum nisi ad enim proident qui dolor deserunt et. Minim ea enim ipsum do tempor elit ipsum aliqua quis nisi proident.",
    image: "/assets/images/home/cards/card-8.png",
  },
];

const CustomCard = ({ data }) => (
  <div key={data.title} className="h-96 flex flex-col items-center gap-3">
    <div className="w-2/3">
      <ImageLoader
        src={data.image}
        alt={data.title}
        className="w-full h-auto"
      />
    </div>
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
