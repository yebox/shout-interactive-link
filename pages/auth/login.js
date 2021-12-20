import React from "react";
import Text from "../../components/FormElements/TextField";

const login = () => {
  return (
    <div className="h-screen flex">
      <div className="w-[568px] bg-primary h-screen relative">
        <img src="/Shout Logo.svg" className="w-[170px] mt-[101px] ml-[70px]"></img>
        <p className="ml-[70px] headline_heavy text-white">
          You deserve to be <br></br>celebrated
        </p>
        <img src="/Decor-1.svg" className="w-[100%] mt-[20%]"></img>
        <img src="/On-Boarding-Final.svg" className="w-[522px] absolute bottom-[120px] left-[66px]"></img>
        {/* <img src="/Balloons 1.svg" className="absolute right-0 top-[60%] h-[171px]"></img> */}
      </div>
      <div className="w-[568px] p-64">
        <select name="cars" id="cars" className="w-[375px] h-[42px]">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
};

export default login;
