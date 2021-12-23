import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <div className="h-[56px] flex items-center border-b border-my-border-color--1 py-[12px] px-[48px]">
      <span className="icon-search text-[20px] mr-[15px] ml-auto"></span>
      <span className="icon-question-circle text-[20px] mr-[15px]"></span>
      {/* <img src="/images/user-img.jpg" className="w-[32px] h-[32px] object-cover object-top rounded-full"></img> */}
      <Avatar sx={{ bgcolor: "orange", width: "32px", height: "32px" }} alt="Remy Sharp" src="/images/user-img.jpg"></Avatar>
    </div>
  );
};

export default Header;
