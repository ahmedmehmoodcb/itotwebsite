import React from "react";
import PropTypes from "prop-types";
import { Element } from "react-scroll";

function ScrollableSection({ title, containerId, children }) {
  return (
    <div className="p-2">
      <Element name={containerId} className="w-full flex flex-col">
        <h3 className="text-custom-blue font-bold sm:text-xl md:text-2xl lg:text-3xl">
          {title}
        </h3>
        <div>{children}</div>
      </Element>
    </div>
  );
}

ScrollableSection.propTypes = {
  title: PropTypes.string.isRequired,
  containerId: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ScrollableSection;
