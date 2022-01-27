import React from "react";
import Sidebar from "../../Components/WhyITOT/Sidebar";
import BannerSection from "../../Components/WhyITOT/BannerSection";
import CurriculumSection from "../../Components/WhyITOT/CurriculumSection";
import TraditionalStyle from "../../Components/WhyITOT/TraditionalStyle";
import EffectOnChildren from "../../Components/WhyITOT/EffectOnChildren";
import EffectOnParents from "../../Components/WhyITOT/EffectOnParents";
import EffectOnTeachers from "../../Components/WhyITOT/EffectOnTeachers";
import EffectOnSchools from "../../Components/WhyITOT/EffectOnSchools";

function WhyITOTPage() {
  return (
    <>
      <BannerSection />
      <div className="flex">
        <Sidebar className="w-1/5" />
        <div className="w-full md:w-4/5">
          <CurriculumSection />
          <TraditionalStyle />
          <EffectOnChildren />
          <EffectOnParents />
          <EffectOnTeachers />
          <EffectOnSchools />
        </div>
      </div>
    </>
  );
}

export default WhyITOTPage;
