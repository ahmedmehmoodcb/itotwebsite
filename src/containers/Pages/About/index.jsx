import React from "react";
import BannerSection from "../../Common/containers/BannerSection";
import Sidebar from "../../Components/About/Sidebar";
import MissionSection from "../../Components/About/MissionSection";
import VisionSection from "../../Components/About/VisionSection";
import AimsAndObjectiveSection from "../../Components/About/AimsAndObjectives";
import HistorySection from "../../Components/About/HistorySection";
import ITOTTeamSection from "../../Components/About/ITOTTeam";
import ChairmanMessageSection from "../../Components/About/ChairmanMessage";
import CEOMessageSection from "../../Components/About/CEOMessage";

function AboutPage() {
  return (
    <>
      <BannerSection title="About Us" />
      <div className="flex">
        <Sidebar className="w-1/5" />
        <div className="w-full md:w-4/5 md:px-7 text-justify">
          <p className="text-base px-2 py-3">
            The Innovative Technology of Teaching offers very broad approach to
            educaon, provides organize and opmize lesson planning, arsc acvies,
            STEAM-based learning, colorful worksheets, mulmedia, assessment
            plan, teachers training and promoonal support to schools.
          </p>
          <MissionSection />
          <VisionSection />
          <AimsAndObjectiveSection />
          <HistorySection />
          <ITOTTeamSection />
          <ChairmanMessageSection />
          <CEOMessageSection />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
