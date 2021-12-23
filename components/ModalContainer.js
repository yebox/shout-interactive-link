import BtnPrimary from "./Buttons/BtnPrimary";
import BtnOutlined from "./Buttons/BtnOutlined";

const ModalContainer = ({ children, icon, headerText, onClose, actionText }) => {
  return (
    <div className="px-[24px] py-[32px] rounded-[8px] w-[423px]">
      {/* modal header */}
      <div className="flex items-center mb-[60px]">
        <span className="rou rounded-full w-[28px] h-[28px] bg-primary-lightest-2 flex justify-center items-center">{icon}</span>
        <p className="title_heavy text-black-default ml-[12.5px]">{headerText}</p>
        <span onClick={onClose} className="icon-close text-[11px] text-gray-dark ml-[auto] cursor-pointer"></span>
      </div>

      <div>{children}</div>

      {/* modal footer */}
      <div className="flex justify-between mt-[60px] gap-5">
        <BtnOutlined text="Cancle"></BtnOutlined>
        <BtnPrimary text={actionText}></BtnPrimary>
      </div>
    </div>
  );
};

export default ModalContainer;
