import React from "react";
import PropTypes from "prop-types";

function BannerSection({ title }) {
  return (
    <div className="bg-custom-red py-5 flex justify-center items-center text-white text-3xl font-bold">
      {title}
    </div>
  );
}

BannerSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BannerSection;
