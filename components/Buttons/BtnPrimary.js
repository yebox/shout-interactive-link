import LoadingButton from "@mui/lab/LoadingButton";

const BtnPrimary = ({ text, loading, handleClick }) => {
  return (
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
  );
};

export default BtnPrimary;
