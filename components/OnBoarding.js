import React, { Children } from "react";

const OnBoarding = ({ children }) => {
  return (
    <div className="h-screen flex">
      <div className="w-[568px] bg-primary h-screen relative">
        <img src="/Shout Logo.svg" className="w-[140px] mt-[60px] ml-[50px]"></img>
        <p className="ml-[40px] mt-11 headline_heavy text-white">
          You deserve to be <br></br>celebrated
        </p>
        <img src="/Decor-1.svg" className="w-[100%] mt-16"></img>
        <img src="/On-Boarding-Final.svg" className="w-[522px] absolute bottom-[100px] left-[66px]"></img>
        {/* <img src="/Balloons 1.svg" className="absolute right-0 top-[60%] h-[171px]"></img> */}
      </div>
      <div className="flex-1 p-64 relative">
        <div className="w-[377px] absolute top-2/4 left-1/2 mt-11 -translate-x-1/2 -translate-y-3/4">{children}</div>
      </div>
    </div>
  );
};

export default OnBoarding;
