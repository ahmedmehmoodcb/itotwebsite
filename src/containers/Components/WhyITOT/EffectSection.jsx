import React from "react";
import PropTypes from "prop-types";

function EffectSection({ image, section, data }) {
  return (
    <div className="sm:py-3 md:py-5 grid sm:grid-cols-1 md:grid-cols-2 gap-3">
      <img
        className="hidden md:block w-full h-auto"
        src={image}
        alt={section}
      />
      <div className="flex flex-col sm:gap-4 md:gap-6 lg:gap-28 px-3">
        {data.map(item => (
          <p className="effect-row">{item}</p>
        ))}
      </div>
    </div>
  );
}

EffectSection.propTypes = {
  image: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default EffectSection;
