import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../Common/components/CustomButton";

function BannerSection() {
  return (
    <div className="bg-custom-blue h-80 flex flex-col gap-3 text-white justify-center items-center">
      <h2 className="uppercase sm:text-xl md:text-3xl lg:text-5xl font-bold text-white">
        Registration Process
      </h2>
      <p className="text-center sm:px-10 md:px-40 lg:px-60">
        Quis cillum id eiusmod tempor proident id non nostrud sunt enim. Aliqua
        do officia ipsum esse. Cillum sit Lorem ex consectetur nulla
        reprehenderit sunt labore et pariatur.
      </p>
      <CustomButton
        variant="transparent"
        text="START REGISTRATION"
        to="/register"
      />
      <p>
        Already Registered?
        <Link
          to="/login"
          className="text-yellow-500 hover:underline hover:text-yellow-500"
        >
          Login here
        </Link>
      </p>
    </div>
  );
}

export default BannerSection;
