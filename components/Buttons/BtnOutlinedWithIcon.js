import Button from "@mui/material/Button";

const BtnOutlinedWithIcon = ({ text, icon }) => {
  return (
    <button className="px-[14px] h-[32px] border-gray-dark rounded-xl border ml-[24px] flex items-center justify-center">
      <span>{icon}</span>
      <span className="caption_heavy ml-[8px]">{text}</span>
    </button>
    // <Button
    //   disableElevation
    //   sx={{ Width: "113px", height: "32px", border: "1px solid #60646A", bgcolor: `transparent`, textTransform: "none", borderRadius: "8px" }}
    //   variant="outlined"
    //   startIcon={icon}
    // >
    //   <span className="caption_heavy">{text}</span>
    // </Button>
  );
};

export default BtnOutlinedWithIcon;
