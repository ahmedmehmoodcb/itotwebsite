import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { classNames } from "../../../utils/helpers";

function CustomButton({ children, variant, text, to, className, onClick }) {
  const history = useHistory();
  const isContained = variant === "contained";
  return (
    <button
      type="button"
      className={classNames(
        isContained ? "bg-custom-blue text-white" : "bg-white text-custom-blue",
        "border-2 border-custom-blue border-opacity-80 px-3 py-2 rounded-md text-xs md:text-sm",
        className
      )}
      onClick={
        to
          ? () => {
              history.push(to);
            }
          : onClick
      }
    >
      {text || children}
    </button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.element,
  text: PropTypes.string,
  variant: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  children: null,
  text: "",
  variant: "contained",
  to: "",
  className: "",
  onClick: () => {},
};

export default CustomButton;
