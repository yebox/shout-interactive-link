import LoadingButton from "@mui/lab/LoadingButton";
import Link from "next/link";

const BtnPrimary = ({ text, loading, handleClick, link = "" }) => {
  return (
    <Link href={link}>
      <LoadingButton
        disableElevation
        sx={{ bgcolor: "#110066 !important", borderRadius: "8px", textTransform: "none", minWidth: "184px", height: "48px" }}
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        variant="contained"
      >
        <span className="body_heavy">{text}</span>
      </LoadingButton>
    </Link>
  );
};

export default BtnPrimary;
