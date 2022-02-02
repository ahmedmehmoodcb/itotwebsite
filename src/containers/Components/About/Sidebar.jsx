/* eslint-disable react/jsx-boolean-value */
import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { FaAngleRight } from "react-icons/fa";
import { classNames } from "../../../utils/helpers";

const mainSections = [
  {
    title: "Mission",
    containerId: "mission",
  },
  {
    title: "Vision",
    containerId: "vision",
  },
  {
    title: "Aim & Objectives",
    containerId: "aimAndObjectives",
  },
  {
    title: "History",
    containerId: "history",
  },
  {
    title: "ITOT Team",
    containerId: "itotTeam",
  },
  {
    title: "Chairman Message",
    containerId: "chairmanMessage",
  },
  {
    title: "CEO Message",
    containerId: "ceoMessage",
  },
];

function Sidebar({ className }) {
  return (
    <div
      className={classNames(
        className,
        "hidden md:flex flex-col gap-2 text-sm font-bold cursor-pointer py-3 sm:px-1 md:px-2 lg:px-3 sticky top-0 self-start"
      )}
    >
      {mainSections.map(item => (
        <div className="flex items-center gap-1" key={item.title}>
          <FaAngleRight size={16} />
          <Link
            activeClass="text-custom-red"
            className="hover:text-custom-red"
            to={item.containerId}
            spy={true}
            smooth={true}
            duration={500}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  className: "",
};

export default Sidebar;
