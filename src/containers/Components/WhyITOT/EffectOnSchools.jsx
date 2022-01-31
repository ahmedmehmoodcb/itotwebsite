import React from "react";
import ScrollableSection from "../../Common/components/ScrollableSection";
import EffectSection from "./EffectSection";

const data = [
  "It becomes much easier for the school to control the teaching-learning process",
  "Able to attract more affluent parents resulting in more revenue",
  "A child attending school becomes a mobile advertisement for school",
  "The number admissions in school will increase exponentially",
  "The school meets all the modern needs of the 21st century",
];

function EffectOnSchools() {
  return (
    <ScrollableSection
      title="Effect of ITOT On Schools"
      containerId="effectOnSchools"
    >
      <div className="py-3">
        <EffectSection
          image="/assets/images/whyITOT/effects/schools.png"
          section="Effect on Schools"
          data={data}
        />
      </div>
    </ScrollableSection>
  );
}

export default EffectOnSchools;
