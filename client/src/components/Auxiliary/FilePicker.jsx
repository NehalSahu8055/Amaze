import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import * as XLSX from "xlsx";

const FilePicker = ({ setFirstRowData }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(event.target.files[0]);

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      console.log(data); // Log the content of the file
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const firstRow = XLSX.utils.sheet_to_json(worksheet, { header: 1 })[0];
      setFirstRowData(firstRow);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="mb-4">
      <input
        accept=".txt,.xlsx,.exl"
        style={{ display: "none" }}
        id="file-input"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file-input">
        <Button variant="contained" component="span">
          Choose Exl / Txt File
        </Button>
      </label>
      {selectedFile && (
        <Typography variant="body1">
          Selected file: {selectedFile.name}
        </Typography>
      )}
    </div>
  );
};

export default FilePicker;
