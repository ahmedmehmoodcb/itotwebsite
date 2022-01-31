import React from "react";
import ScrollableSection from "../../Common/components/ScrollableSection";
import EffectSection from "./EffectSection";

const data = [
  "Multimedia education is easy to deliver syllabus to entire class",
  "Systematic training of teachers greatly enhances the quality of education",
  "Teachers can easily identify the learning gaps in children",
  "Able to control over the teaching learning process and to love their profession",
  "Printed worksheets save this valuable time",
];

function EffectOnTeachers() {
  return (
    <ScrollableSection
      title="Effect of ITOT On Teachers"
      containerId="effectOnTeachers"
    >
      <div className="py-3">
        <EffectSection
          image="/assets/images/whyITOT/effects/teachers.png"
          section="Effect on Teachers"
          data={data}
        />
      </div>
    </ScrollableSection>
  );
}

export default EffectOnTeachers;
