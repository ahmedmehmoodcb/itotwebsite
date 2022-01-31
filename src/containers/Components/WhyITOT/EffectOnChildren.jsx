import React from "react";
import ScrollableSection from "../../Common/components/ScrollableSection";
import EffectSection from "./EffectSection";

const data = [
  "Without heavy bags, the child gets rid of mental and physical stress",
  "Repetition of lessons converts short term memory into long term memory",
  "Physical activities increase children's attachment to education",
  "Personalized learning able the child to work independently",
  "Multimedia clears the whole concept of the child",
];

function EffectOnChildren() {
  return (
    <ScrollableSection
      title="Effect of ITOT On Children"
      containerId="effectOnChildren"
    >
      <div className="py-3">
        <EffectSection
          image="/assets/images/whyITOT/effects/children.png"
          section="Effect on Children"
          data={data}
        />
      </div>
    </ScrollableSection>
  );
}

export default EffectOnChildren;
