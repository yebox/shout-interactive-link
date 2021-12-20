import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const RadioBtn = () => {
  return (
    <div className="flex ">
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel
          sx={{
            ml: 0,
            "& .MuiFormControlLabel-label": {
              fontSize: 12,
              fontFamily: "SF Pro Display', sans-serif",
            },
          }}
          value="female"
          control={
            <Radio
              name="same"
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 24,
                },
                color: "#90979E",
                "&.Mui-checked": {
                  color: "#110066",
                },
              }}
            />
          }
          label="Campaign"
          labelPlacement="start"
        />
        <FormControlLabel
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: 12,
              fontFamily: "SF Pro Display', sans-serif",
            },
          }}
          value="male"
          control={
            <Radio
              name="same"
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 24,
                },
                color: "#90979E",
                "&.Mui-checked": {
                  color: "#110066",
                },
              }}
            />
          }
          label="Single Advert"
          labelPlacement="start"
        />
      </RadioGroup>
      {/* <div>
        <span classsName="caption_heavy">Campaing</span>
        <Radio
          name="same"
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 28,
            },
            color: "#110066",
            "&.Mui-checked": {
              color: "#110066",
            },
          }}
        />
      </div>
      <div>
        <span classsName="caption_heavy">Campaing</span>
        <Radio
          name="same"
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 28,
            },
            color: "#110066",
            "&.Mui-checked": {
              color: "#110066",
            },
          }}
        />
      </div> */}
    </div>
  );
};

export default RadioBtn;
