import { Button } from "@mui/material";
import React, { useRef } from "react";

function PersonalDetail() {
  const personalDetailForm = useRef(null);
  const handlePersonalDetail = (e) => {
    e.preventDefault();
    const formData = new FormData(personalDetailForm.current);
    const name = formData.get("name");
    const company = formData.get("company");
    const mobile = formData.get("mobile");
    const landlineNumber = formData.get("landline-number");
    const website = formData.get("website");
    console.log(name);
  };
  return (
    <form
      ref={personalDetailForm}
      onSubmit={handlePersonalDetail}
      className="grid grid-cols-2 gap-4 pt-4"
      action=""
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="company"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete=" company"
          required
        />
      </div>
      <div>
        <label
          htmlFor="mobile"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          mobile
        </label>
        <input
          type="number"
          name="mobile"
          id="mobile"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="mobile"
          required
        />
      </div>

      <div>
        <label
          htmlFor="landline-number"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          landline number
        </label>
        <input
          type="number"
          name="landline-number"
          id="landline-number"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="landline-number"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label
          htmlFor="website"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          website
        </label>
        <input
          type="text"
          name="website"
          id="website"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="website"
          required
        />
      </div>
      <Button
        type="submit"
        className="mt-2 w-fit  bg-sky-600 px-4 capitalize text-white hover:bg-sky-600/90"
      >
        Save Now
      </Button>
    </form>
  );
}

export default PersonalDetail;
