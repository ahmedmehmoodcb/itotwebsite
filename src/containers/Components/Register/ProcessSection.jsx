import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "../../Common/containers/SectionWrapper";
import { classNames } from "../../../utils/helpers";

const steps = [
  {
    id: "1",
    stepNo: "Step-I",
    title: "Submit your aaplication form",
    description:
      "To register with ITOT, you must complete and submit our applicaon form. The ITOT team will contact you within three days aer the applicaon form is submitted.",
    image: "/assets/images/register/steps/step-1.png",
  },
  {
    id: "2",
    stepNo: "Step-II",
    title: "Approval List",
    description:
      "The School Relaonship Management Department of ITOT will set a me for the approval visit which will be convenient for you. SRM members will visit your school and the applicaon will be approved if you meet the criteria.",
    image: "/assets/images/register/steps/step-2.png",
  },
  {
    id: "3",
    stepNo: "Step-III",
    title: "Register",
    description:
      "If you approved to register, Legal Department of ITOT will send your contract leer within 10 days of approval visit.",
    image: "/assets/images/register/steps/step-3.png",
  },
  {
    id: "4",
    stepNo: "Step-IV",
    title: "Welcome to ITOT",
    description:
      "When you complete the registraon process, the ITOT will send you a Welcome to ITOT pack, which will guide you through all the steps to get started.",
    image: "/assets/images/register/steps/step-4.png",
  },
];

const StepSection = ({ data, rtl }) => (
  <div
    key={data.id}
    className={classNames(
      "flex sm:gap-5 md:gap-7 py-5",
      rtl ? "flex-row-reverse" : "flex-row"
    )}
  >
    <div
      className={classNames(
        "hidden md:w-1/4 lg:w-1/3 md:flex",
        rtl ? "justify-start items-center" : "justify-end mt-2"
      )}
    >
      <span className="bg-custom-red rounded-full text-white font-bold h-10 w-10 flex justify-center items-center mx-5">
        {data.id}
      </span>
    </div>
    <div className="sm:w-1/2 md:w-1/2 lg:w-1/3 flex flex-col gap-1 text-justify">
      <h3 className="text-xl uppercase font-bold">{data.stepNo}</h3>
      <h4 className="text-lg uppercase text-justify font-semibold">
        {data.title}
      </h4>
      <p className="text-sm">{data.description}</p>
    </div>
    <div
      className={classNames(
        "sm:w-1/2 md:w-1/4 lg:w-1/3 flex items-center",
        rtl ? "justify-end" : "justify-start"
      )}
    >
      <img
        src={data.image}
        alt={data.stepNo}
        className="sm:w-full lg:w-1/3 h-auto"
      />
    </div>
  </div>
);

function ProcessSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-3 text-custom-blue">
        <h2 className="uppercase sm:text-lg md:text-xl lg:text-3xl font-bold">
          Registration Process
        </h2>
        <p className="text-center">Just like this, simply done !</p>
      </div>
      <div className="flex flex-col mt-5">
        {steps.map((item, index) => (
          <StepSection data={item} rtl={index % 2} />
        ))}
      </div>
    </SectionWrapper>
  );
}

StepSection.propTypes = {
  data: PropTypes.object.isRequired,
  rtl: PropTypes.bool.isRequired,
};

export default ProcessSection;
