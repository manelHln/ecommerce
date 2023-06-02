import React from "react";
import { Snackbar, Alert } from "@mui/material";

const CustomAlert = ({ open, setIsOpen, message, duration, severity }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={() => setIsOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={() => setIsOpen(false)} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
