import React from "react";
import ScrollableSection from "../../Common/components/ScrollableSection";
import EffectSection from "./EffectSection";

const data = [
  "Parents have confidence that their children get the best primary education",
  "Parents have a monthly target plan that keeps them informed",
  "Parents do not decide to drop out of school seeing child growth",
  "Other educational materials help the child play at home as well as",
  "It will be very easy for the child to do the homework",
];

function EffectOnParents() {
  return (
    <ScrollableSection
      title="Effect of ITOT On Parents"
      containerId="effectOnParents"
    >
      <div className="py-3">
        <EffectSection
          image="/assets/images/whyITOT/effects/parents.png"
          section="Effect on Parents"
          data={data}
        />
      </div>
    </ScrollableSection>
  );
}

export default EffectOnParents;
