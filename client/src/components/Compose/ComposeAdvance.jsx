import React from "react";
import ComposeNormal from "./ComposeNormal";
function ComposeAdvance({ setFormData }) {
  return (
    <ComposeNormal setFormData={setFormData} isAdvanceOrLargeCustom={true} />
  );
}

export default ComposeAdvance;
