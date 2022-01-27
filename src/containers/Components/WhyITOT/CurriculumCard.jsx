import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../../utils/helpers";

function CurriculumCard({ data, reverse }) {
  return (
    <div
      className={classNames(
        "flex items-center text-center justify-between gap-3 sm:px-10 sm:py-5 md:p-0",
        reverse ? "flex-col-reverse" : "flex-col"
      )}
    >
      <h3 className="uppercase text-lg font-bold">{data.heading}</h3>
      <img src={data.image} alt={data.heading} className="w-full h-auto" />
      <p className="text-sm">{data.description}</p>
    </div>
  );
}

CurriculumCard.propTypes = {
  data: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
};

CurriculumCard.defaultProps = {
  reverse: false,
};

export default CurriculumCard;
