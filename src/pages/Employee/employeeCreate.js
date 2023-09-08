import React from "react";
import PropTypes from "prop-types";
import { Modal, Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const CreateEmployee = ({ open, onClose }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
        }}
      >
        <Card>
          <CardContent>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Employee Registration Form
            </Typography>
            {/* Your modal content goes here */}
            <form onSubmit={handleFormSubmit}>{/* Form fields, inputs, and submit button */}</form>
          </CardContent>
        </Card>
        <IconButton sx={{ position: "absolute", top: 8, right: 8 }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

CreateEmployee.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateEmployee;
