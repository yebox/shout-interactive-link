const StatCard = ({ value, text, color }) => {
  return (
    <div className="flex h-[120px] min-w-[256px] rounded-[8px] border border-my-border-color--1 items-center px-[24px] py-[25px] relative cursor-pointer">
      <div className="info flex flex-col mb-2">
        <span className="caption_light flex items-center">
          {text} <span className="icon-angle-left ml-[10px]"></span>
        </span>
        <p className="display_3_heavy text-primary mt-3"> {value}</p>
      </div>
      <span className={`icon-flower1 text-[40px] right-[24px] absolute self-center ${color == "yellow" ? "text-warn-default" : "text-success-default"} `}></span>
    </div>
  );
};

export default StatCard;
