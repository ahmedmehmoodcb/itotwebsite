import React from "react";
import { FaAngleRight } from "react-icons/fa";
import SectionWrapper from "../../Common/containers/SectionWrapper";
import CustomButton from "../../Common/components/CustomButton";

function IntroSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col space-y-5">
          <h4
            className="text-custom-blue uppercase text-center text-5xl"
            style={{ fontFamily: "Chiller" }}
          >
            Welcome to ITOT
          </h4>
          <p className="text-center text-sm">
            Reprehenderit consequat culpa sint nulla nulla laboris occaecat est
            est. Irure ad duis ullamco incididunt dolore voluptate sint
            cupidatat velit id occaecat culpa velit. Dolor pariatur aliqua amet
            aliqua commodo amet laborum nulla ea laboris non elit amet velit.
            Culpa qui nulla laboris mollit occaecat nostrud ad id exercitation
            consequat sunt. Reprehenderit Lorem tempor ipsum consectetur fugiat
            sit eiusmod. Ex nisi officia minim ea cillum cillum dolore.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-center">
            <h5 className="text-center uppercase font-bold">
              Become ITOT Member
            </h5>
            <p className="text-center text-sm py-3">
              Aliqua excepteur esse eu ad in sunt excepteur tempor id et.Aliqua
              excepteur esse eu ad in sunt excepteur tempor id et.
            </p>
            <CustomButton to="/register" variant="transparent">
              <span className="flex items-center uppercase text-sm">
                Learn More <FaAngleRight className="ml-3" size={18} />
              </span>
            </CustomButton>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-center uppercase font-bold">
              ITOT MarketPlace
            </h5>
            <p className="text-center text-sm py-3">
              Aliqua excepteur esse eu ad in sunt excepteur tempor id et.Aliqua
              excepteur esse eu ad in sunt excepteur tempor id et.
            </p>
            <CustomButton to="/market-place">
              <span className="flex items-center uppercase text-sm">
                Learn More <FaAngleRight className="ml-3" size={18} />
              </span>
            </CustomButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default IntroSection;
