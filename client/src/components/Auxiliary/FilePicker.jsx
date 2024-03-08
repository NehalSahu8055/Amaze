import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

const FilePicker = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
