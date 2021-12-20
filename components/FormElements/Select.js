import React from "react";

const Select = () => {
  return (
    <select
      name="cars"
      id="cars"
      className="appearance-none bg-white cursor-pointer flex h-[48px] mb-[10px] max-w-[375px] min-w-[250px] w-full text-black-default body_light focus:border-primary focus:outline-0 border rounded-[16px] px-[8px] py-[14px] border-gray-light"
      style={{
        background: "url(/icons/angle-down.svg) no-repeat ",
        backgroundPosition: "97%",
      }}
    >
      <option value="none" className="d text">Select an option</option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
};

export default Select;
