import Text from "../../components/FormElements/TextField";
import BtnPrimary from "../../components/Buttons/BtnPrimary";
import BtnOutlined from "../../components/Buttons/BtnOutlined";
import OnBoarding from "../../components/OnBoarding";

const Verification = () => {
  return (
    <OnBoarding>
      <h2 className="headline_heavy mb-[37px] text-black-default">Hello, James...</h2>
      <p className="subheader_light mb-[24px]">We sent you a unique code via mail</p>
      <Text label="Input your code"></Text>
      <div className="flex gap-8 mt-[38px]">
        <BtnOutlined text={<span>text</span>}></BtnOutlined>
        <BtnPrimary text="Proceed"></BtnPrimary>
      </div>
    </OnBoarding>
  );
};

export default Verification;
