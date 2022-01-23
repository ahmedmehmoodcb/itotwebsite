import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "../../Common/containers/SectionWrapper";
import { classNames } from "../../../utils/helpers";

const sectionsData = [
  {
    label: "Register Now",
    color: "red",
    icon: "/assets/images/home/register.png",
    customClass: "hidden md:flex", // Will be displayed in medium devices and up
  },
  {
    label: "Latest News",
    color: "blue",
    icon: "/assets/images/home/news.png",
    customClass: "hidden lg:flex", // Will be displayed in large devices and up
  },
  {
    label: "Students Enrolled",
    color: "blue",
    count: "18000",
  },
  {
    label: "Schools Registered",
    color: "blue",
    count: "1000",
  },
  {
    label: "Cities",
    color: "blue",
    count: "68",
  },
];

const StatsSubSection = ({ data }) => (
  <div
    key={data.label}
    className={classNames(
      "flex flex-col space-y-3 items-center text-white sm:p-3 md:p-5",
      `bg-custom-${data.color}`,
      data.customClass
    )}
  >
    <div className="h-12 md:h-16 lg:h-20 flex items-center">
      {data.icon ? (
        <img src={data.icon} alt={data.label} className="h-full w-auto" />
      ) : (
        <span
          className="font-extrabold text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: "Belinda" }}
        >
          {data.count}
        </span>
      )}
    </div>
    <div className="uppercase font-semibold text-center">{data.label}</div>
    <span className="w-10 border-b-2 border-white" />
  </div>
);

function StatsSection() {
  return (
    <SectionWrapper fluid>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {sectionsData.map(item => (
          <StatsSubSection data={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}

StatsSubSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StatsSection;
