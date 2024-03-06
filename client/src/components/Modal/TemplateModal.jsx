import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import DataTable from "../DataTable";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialog-paperFullScreen": {
    width: "90%",
    height: "80vh",
  },
}));

const columns = [
  { field: "id", headerName: "Sr.", width: 70 },
  { field: "titledltId", headerName: "Title/DLT ID", width: 400 },
  { field: "template", headerName: "Template", width: 500 },
];

const rows = [
  {
    id: 1,
    titledltId: "OTP Verification &#10;10076372244323213",
    template: "Your OTP is {#var#} for {#var#} verification. MTCO",
  },
];
const handleRowSelectionChange = (selectionModel) => {
  if (selectionModel.length === 1) {
    const selectedRow = rows.find((row) => row.id === selectionModel[0]);
    if (selectedRow) {
      console.log("Selected Row Data:", selectedRow);
    }
  }
};

export default function TemplateModal({
  open,
  handleClose,
  handleCellDoubleClick,
}) {
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen // This prop makes the dialog full screen
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <span className="font-semibold"> Templates </span>
          <span className="text-base text-red-500">
            ( Double click to select template )
          </span>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DataTable
            handleCellDoubleClick={handleCellDoubleClick}
            rows={rows}
            columns={columns}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
