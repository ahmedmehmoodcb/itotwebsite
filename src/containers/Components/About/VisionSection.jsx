import React from "react";
import ScrollableSection from "../../Common/components/ScrollableSection";

function VisionSection() {
  return (
    <ScrollableSection title="Vision" containerId="vision">
      <ul className="text-base list-disc pl-5 py-3">
        <li>
          To create a standardize learning environment that does not contain any
          pressure or boredom.
        </li>
        <li>
          To strengthen the childs foundaon so that he/she has the ability to
          think crically and strategically and solve problems that will make
          him/her a leader in the future.
        </li>
      </ul>
    </ScrollableSection>
  );
}

export default VisionSection;
