import React from "react";

function PersonalDetail() {
  return (
    <form className="grid grid-cols-2 gap-4 pt-4" action="">
      <div>
        <label
          htmlFor="user-type"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          user type
        </label>
        <input
          type="text"
          name="user-type"
          id="user-type"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="user-type"
          required
          readOnly
        />
      </div>
      <div>
        <label
          htmlFor=" billing-type"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          billing type
        </label>
        <input
          type="text"
          name="billing-type"
          id="billing-type"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete=" billing-type"
          required
          readOnly
        />
      </div>
      <div>
        <label
          htmlFor="user-name"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          user name
        </label>
        <input
          type="text"
          name="user-name"
          id="user-name"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="user-name"
          required
          readOnly
        />
      </div>

      <div>
        <label
          htmlFor="balance"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          balance
        </label>
        <input
          type="number"
          name="balance"
          id="balance"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="balance"
          required
          readOnly
        />
      </div>
      <div>
        <label
          htmlFor="account-status"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          account status
        </label>
        <input
          type="text"
          name="account-status"
          id="account-status"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="account-status"
          required
          readOnly
        />
      </div>
      <div>
        <label
          htmlFor="current-password"
          className="mb-2 block font-medium capitalize text-gray-900"
        >
          account valid till
        </label>
        <input
          type="number"
          name=" account-valid-till"
          id="account-valid-till"
          placeholder=""
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="account-valid-till"
          required
          readOnly
        />
      </div>
    </form>
  );
}

export default PersonalDetail;
