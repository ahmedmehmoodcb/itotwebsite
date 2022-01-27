import React from "react";
import { classNames } from "../../../utils/helpers";
import ScrollableSection from "../../Common/components/ScrollableSection";

const tradtionalStyle = [
  "Heavy Bags",
  "Teachers just pass on received informaon",
  "Teacher Writes on Notebooks/ Diaries",
  "Teacher provides all informaon",
  "Teacher correct errors",
  "Teacher-movated",
  "Teacher sets student's pace",
  "Seek help from teacher",
  "Teacher center ",
];
const itotStyle = [
  "Bag free system",
  "Teachers smulate, provoke and engage",
  "Printed Worksheets",
  "Students learn by handling objects and teaching themselves.",
  "Movated by child's self-development",
  "Learn for joy of learning and curiosity of discovery",
  "Student sets own pace",
  "Encourage to help one another",
  "Student centered learning environment",
];

function TraditionalStyle() {
  return (
    <ScrollableSection
      title="Traditional Style vs ITOT Style"
      containerId="traditionalStyle"
    >
      <div className="flex flex-col sm:p-3 md:my-3 md:p-5">
        <div
          className="hidden md:flex justify-between items-center text-white"
          style={{ fontSize: "0.5rem" }}
        >
          <div
            className="sm:h-5 md:h-7 lg:h-10 w-1/4 bg-contain flex flex-col items-center justify-center"
            style={{
              backgroundImage: 'url("/assets/images/whyITOT/style/left.png")',
            }}
          >
            <p className="uppercase ">Traditional Curriculum</p>
            <p className="">(Old Stereotyped Educaon System)</p>
          </div>
          <img
            className="sm:h-10 md:h-15 lg:h-20 w-auto"
            src="/assets/images/whyITOT/style/brain.png"
            alt="Brain"
          />
          <div
            className="sm:h-5 md:h-7 lg:h-10 w-1/4 bg-contain flex flex-col items-center justify-center"
            style={{
              backgroundImage: 'url("/assets/images/whyITOT/style/right.png")',
            }}
          >
            <p className="uppercase ">ITOT Curriculum</p>
            <p className="">(21st Century Syllabus)</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-2 md:gap-5">
          <div className="flex flex-col my-5">
            {tradtionalStyle.map((item, index) => (
              <div
                key={item}
                className={classNames(
                  "px-1 py-2 text-center",
                  index % 2 === 0 ? "bg-red-100" : ""
                )}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col my-5">
            {itotStyle.map((item, index) => (
              <div
                key={item}
                className={classNames(
                  "px-1 py-2 text-center",
                  index % 2 === 0 ? "bg-green-100" : ""
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollableSection>
  );
}

export default TraditionalStyle;
