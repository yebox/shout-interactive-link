import Link from "next/link";

const BtnOutlined = ({ text, link = "" }) => {
  return (
    <Link href={link}>
      <button className="border border-[#60646A] min-w-[184px] h-[48px] rounded-[8px]">
        <span className="body_heavy text-[#60646A]">{text}</span>
      </button>
    </Link>
  );
};

export default BtnOutlined;
