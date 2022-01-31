import React from "react";
import ScrollableSection from "../../Common/components/ScrollableSection";
import CurriculumCard from "./CurriculumCard";

const data = [
  {
    heading: "Convey Information",
    image: "/assets/images/whyITOT/curriculum/card- (1).png",
    description:
      "Teachers convey information to the children according to the Daily Plan, which is new to the children.",
  },
  {
    heading: "Collect Data",
    image: "/assets/images/whyITOT/curriculum/card- (2).png",
    description:
      "Children collect some data from this new information which is stored in their short-term memory",
  },
  {
    heading: "Constructing Knowledge",
    image: "/assets/images/whyITOT/curriculum/card- (3).png",
    description:
      "Teachers explain the lesson with the help of various stories which help the children constructing knowledge.",
  },
  {
    heading: "Conceptualization",
    image: "/assets/images/whyITOT/curriculum/card- (4).png",
    description:
      "With the help of multimedia, this lesson is made clear which makes the concept of children clear.",
  },
  {
    heading: "Critical Thinking",
    image: "/assets/images/whyITOT/curriculum/card- (5).png",
    description:
      "Multimedia is used to engage classmates in activities that highlight critical thinking",
  },
  {
    heading: "Copying the Method",
    image: "/assets/images/whyITOT/curriculum/card- (6).png",
    description:
      "By copying the method shown on the screen, the children solve the assigned tasks on their own",
  },
  {
    heading: "Connecting Knowledge",
    image: "/assets/images/whyITOT/curriculum/card- (7).png",
    description:
      "Here child connect knowledge received through teacher, digital source and worksheets.",
  },
  {
    heading: "Creative and Innovative",
    image: "/assets/images/whyITOT/curriculum/card- (8).png",
    description:
      "The Creative and Innovative Skills are developed in the child with the help of Hand on Activities associated with this lesson.",
  },
  {
    heading: "Contribute Critically",
    image: "/assets/images/whyITOT/curriculum/card- (9).png",
    description:
      "Teachers convey information to the children according to the Daily Plan, which is new to the children.",
  },
  {
    heading: "Confidence",
    image: "/assets/images/whyITOT/curriculum/card- (10).png",
    description:
      "This method enables the child to do homework with full confidence.",
  },
];

function CurriculumSection() {
  return (
    <ScrollableSection
      title="Curriculum Section 10 Steps (10 Cs)"
      containerId="curriculum"
    >
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4 lg:pr-10 md:py-3">
        {data.map((item, index) => (
          <CurriculumCard data={item} reverse={index % 2 === 1} />
        ))}
      </div>
    </ScrollableSection>
  );
}

export default CurriculumSection;
