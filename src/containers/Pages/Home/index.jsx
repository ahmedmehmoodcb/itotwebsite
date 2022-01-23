import React from "react";
import BannerSlider from "../../Components/Home/BannerSlider";
import IntroSection from "../../Components/Home/IntroSection";
import StatsSection from "../../Components/Home/StatsSection";
import CardsSection from "../../Components/Home/CardsSection";
import Testimonials from "../../Components/Home/Testimonials";

function HomePage() {
  return (
    <div>
      <BannerSlider />
      <IntroSection />
      <StatsSection />
      <CardsSection />
      <Testimonials />
    </div>
  );
}

export default HomePage;
