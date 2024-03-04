import { Box, Button } from "@mui/material";
import React from "react";

function QRCode() {
  return (
    <Box className="mb-8 mt-4  flex w-[130%] justify-center gap-4 bg-white p-6 px-10">
      <img
        className="my-auto h-fit"
        src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?w=740&t=st=1709537538~exp=1709538138~hmac=de47dd4275c4c011d689f87c86e62e976d43b892c44c5c1edb9985cdd6a6c929"
        width="150"
        alt=""
      />
      <div className="grid">
        <span className="mb-4 h-fit w-fit bg-slate-100 px-4 py-1">
          1231SFDSADF232
        </span>
        <span className="mb-3 text-sm text-gray-700">
          If you have any problem with scanning the QR code enter this code
          manually into the APP
        </span>
        <div className="flex items-center justify-between  gap-4">
          <div className="grid">
            <label
              htmlFor="user-type"
              className="mb-2 block text-sm font-medium capitalize text-gray-500"
            >
              verification code
            </label>
            <input
              type="text"
              name=" verification-code"
              id=" verification-code"
              placeholder=""
              className={` focus:ring-primary-300 block h-fit w-[10rem]  rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
              autoComplete="verification-code"
              required
            />
          </div>
          <Button className="mt-auto rounded-full bg-orange-400 px-6 py-2.5 uppercase text-white/90 hover:bg-orange-400/90">
            verify
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default QRCode;
