import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import QRCode from "./QRCode";
import AuthenticationIllustration from "./AuthenticationIllustration";

function TwoFactorAuthentication() {
  return (
    <Box className="flex justify-between gap-[9rem] ">
      <div>
        <FormControl>
          <FormLabel
            className="pb-4 text-[1rem] font-semibold text-slate-900"
            id="two-factor"
          >
            Enable 2-Factor
          </FormLabel>
          <RadioGroup
            className="flex flex-row"
            aria-labelledby="two-factor"
            defaultValue="enable"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="enable"
              control={<Radio />}
              label="Enable"
            />
            <FormControlLabel
              value="disable"
              control={<Radio />}
              label="Disable"
            />
          </RadioGroup>
        </FormControl>
        <QRCode />

        <Button className="w-fit bg-sky-600 px-4 capitalize text-white hover:bg-sky-600/90">
          Save this tab
        </Button>
      </div>
      <AuthenticationIllustration />
    </Box>
  );
}

export default TwoFactorAuthentication;
