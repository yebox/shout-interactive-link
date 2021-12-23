import React from "react";
import Text from "../../components/FormElements/TextField";
import BtnPrimary from "../../components/Buttons/BtnPrimary";
import OnBoarding from "../../components/OnBoarding";

const login = () => {
  return (
    <OnBoarding>
      <h2 className="headline_heavy mb-[37px] text-black-default">Login to Shouts</h2>
      <div className="mb-[26px]">
        <Text label="Email Address"></Text>
      </div>
      <div className="mb-[41px]">
        <Text label="Password"></Text>
      </div>
      <BtnPrimary text="Login"></BtnPrimary>
      <p className="body_light mt-[36px] text-black-light">
        First time Logging in? <a className="text-primary underline cursor-pointer">Click here.</a>
      </p>
    </OnBoarding>
  );
};

export default login;
