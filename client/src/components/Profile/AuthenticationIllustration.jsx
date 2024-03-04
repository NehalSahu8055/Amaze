import { Box } from "@mui/material";
import React from "react";

function AuthenticationIllustration() {
  return (
    <Box>
      <p className="mb-4 bg-blue-100 px-2 py-1">
        Two factor authentication adds an extra layers of security to your
        account by asking for a verification code when you sign in.
      </p>
      <div className="flex justify-between">
        <div className="grid max-w-[15rem]  px-6 py-2 text-center">
          <div className="w-[7.5rem]">
            <img
              width={130}
              className="mx-auto bg-white p-3"
              src="/illustrations/keywithphone.png"
              alt=""
            />
          </div>
          <span className="pt-3 text-sm">
            Log in using your username and password as usual.
          </span>
        </div>
        <div className="grid max-w-[15rem] place-content-center px-6 py-2 text-center">
          <div className="w-[7.5rem]">
            <img
              width={130}
              className="mx-auto bg-white p-3"
              src="/illustrations/keywithphone.png"
              alt=""
            />
          </div>
          <span className="pt-3 text-sm">
            Using a two-factor authentication, generate a passcode to verify
            your identity.
          </span>
        </div>
        <div className="grid max-w-[15rem] place-content-center px-6 py-2 text-center">
          <div className="w-[7.5rem]">
            <img
              width={130}
              className="mx-auto bg-white p-3"
              src="/illustrations/keywithphone.png"
              alt=""
            />
          </div>
          <span className="pt-3 text-sm">
            Once you enter the passcode at the prompt, you'll be logged onto
            your account.
          </span>
        </div>
      </div>
    </Box>
  );
}

export default AuthenticationIllustration;
