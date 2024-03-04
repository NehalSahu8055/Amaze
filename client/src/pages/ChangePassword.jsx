import { Box } from "@mui/material";
import React, { useRef, useState } from "react";

function ChangePassword() {
  const changePwdForm = useRef(null);
  const [error, seterror] = useState(false);

  const handleChangePwd = (e) => {
    e.preventDefault();
    const formData = new FormData(changePwdForm.current);
    const currentPassword = formData.get("current-password");
    const newPassword = formData.get("new-password");
    const confirmPassword = formData.get("confirm-password");
    if (newPassword != confirmPassword) {
      seterror((prev) => !prev);
    }
  };
  return (
    <Box className="max-w-[30rem]">
      <h2 className="pb-8 text-3xl font-semibold tracking-tight  text-slate-950">
        Change Password
      </h2>
      <form
        ref={changePwdForm}
        className="grid space-y-4 bg-white p-6"
        onSubmit={handleChangePwd}
        action=""
      >
        <div>
          <label
            htmlFor="current-password"
            className="mb-2 block font-medium text-gray-900"
          >
            Current Password
          </label>
          <input
            type="password"
            name="current-password"
            id="current-password"
            placeholder=""
            className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
            autoComplete="current-password"
            required
          />
        </div>
        <div>
          <label
            htmlFor="new-password"
            className="mb-2 block font-medium text-gray-900"
          >
            New Password
          </label>
          <input
            type="password"
            name="new-password"
            id="new-password"
            placeholder=""
            className={`focus:ring-primary-300 block w-full rounded-lg  ${error ? "border border-red-500" : "border"}  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
            autoComplete="new-password"
            required
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="mb-2 block font-medium text-gray-900"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder=""
            className={`focus:ring-primary-300 block w-full rounded-lg  ${error ? "border border-red-500" : "border"}  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
            autoComplete="confirm-password"
            required
          />
        </div>
        <button
          type="submit"
          className="focus:ring-primary-300 w-fit rounded-lg  bg-sky-600 px-6 py-2 text-center text-[1rem] font-medium text-white transition hover:bg-sky-600/90  focus:outline-none focus:ring-2"
        >
          Change Password
        </button>
      </form>
    </Box>
  );
}

export default ChangePassword;
