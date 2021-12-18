import React from "react";

const BtnOutlined = ({ text }) => {
  return (
    <div>
      <button className="border border-[#60646A] min-w-[184px] h-[48px] rounded-[8px]">
        <span className="body_heavy text-[#60646A]">{text}</span>
      </button>
    </div>
  );
};

export default BtnOutlined;
