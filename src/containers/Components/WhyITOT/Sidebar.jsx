/* eslint-disable react/jsx-boolean-value */
import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { FaAngleRight, FaCircle } from "react-icons/fa";
import { classNames } from "../../../utils/helpers";

const mainSections = [
  {
    title: "Curriculum Goal 10 Steps (10 Cs)",
    containerId: "curriculum",
  },
  {
    title: "Traditional Style vs ITOT Style",
    containerId: "traditionalStyle",
  },
  {
    title: "Effect of ITOT on",
    containerId: "effectOn",
  },
];

const subSections = [
  {
    title: "Children",
    containerId: "effectOnChildren",
  },
  {
    title: "Parents",
    containerId: "effectOnParents",
  },
  {
    title: "Teacher",
    containerId: "effectOnTeachers",
  },
  {
    title: "School",
    containerId: "effectOnSchools",
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
      {subSections.map(item => (
        <div className="pl-5 flex items-center gap-2" key={item.title}>
          <FaCircle size={6} />
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
