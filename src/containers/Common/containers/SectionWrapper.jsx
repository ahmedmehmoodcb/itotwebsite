import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../../utils/helpers";

function SectionWrapper({ children, fluid }) {
  return (
    <div className={classNames(fluid ? "" : "container", "py-4")}>
      {children}
    </div>
  );
}

SectionWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  fluid: PropTypes.bool,
};

SectionWrapper.defaultProps = {
  fluid: false,
};

export default SectionWrapper;
