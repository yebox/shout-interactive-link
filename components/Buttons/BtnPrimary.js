import LoadingButton from "@mui/lab/LoadingButton";
import Link from "next/link";

const BtnPrimary = ({ text, loading, handleClick, link = "" }) => {
  return (
    <div className="w-full">
      <Link href={link}>
        <LoadingButton
          disableElevation
          sx={{
            bgcolor: "#110066 !important",
            whiteSpace: "nowrap",
            borderRadius: "8px",
            textTransform: "none",
            minWidth: "100%",
            fontFamily: "'SF Pro Display', sans-serif !important",
            width: "100%",
            height: "48px",
            color: "white",
          }}
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          variant="contained"
        >
          <span className="body_heavy">{text}</span>
        </LoadingButton>
      </Link>
    </div>
  );
};

export default BtnPrimary;
