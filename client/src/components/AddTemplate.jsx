import { Button } from "@mui/material";
import React, { useRef } from "react";
function AddTemplate() {
  const templateForm = useRef(null);
  const handletemplate = (e) => {
    e.preventDefault();
    const formData = new FormData(templateForm.current);
    const templateId = formData.get("template-id");
    const templateName = formData.get("templateName");

    console.log(templateName);
  };

  return (
    <form
      ref={templateForm}
      onSubmit={handletemplate}
      className="grid h-fit w-full gap-4 bg-white px-5 py-4 pt-4"
      action=""
    >
      <h3 className="text-xl font-semibold">Add Template</h3>

      <select
        id="entity-template"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
      >
        // TODO: populate col
        <option selected>Entity</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <select
        id="entity-template"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
      >
        // TODO: populate sender col
        <option selected>MTCOEM</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <select
        id="entity-template"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
      >
        <option selected>Selected Template Category</option>
        <option value="transaction">Transaction</option>
        <option value="service">Service</option>
        <option value="promotion">Promotion</option>
      </select>
      <Button
        type="submit"
        className="mt-2 w-fit  bg-slate-800 px-4 capitalize text-white hover:bg-slate-800/90"
      >
        Save Now
      </Button>
    </form>
  );
}

export default AddTemplate;
