/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CancelOutlined, CheckCircleOutlined } from "@mui/icons-material";
const CreateEmployee = ({ openDialog, setOpenDialog }) => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const handleGenderSelect = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleImageChange = (file) => {
    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);
    setFile(file);
  };
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    // Rest of the form data
  });

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can use the formData for further processing or API calls
    console.log(formData);
    handleCloseDialog();
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>
        Create Employee
        <IconButton
          aria-label="close"
          onClick={handleCloseDialog}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <FileUploader
                handleChange={handleImageChange}
                name="file"
                types={fileTypes}
                sx={{ marginLeft: 5 }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    select
                    label="Gender"
                    value={selectedGender}
                    onChange={handleGenderSelect}
                    size="medium"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="" disabled>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="FirstName"
                label="First Name"
                value={formData.FirstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="LastName"
                label="Last Name"
                value={formData.FirstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Birth Date"
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Phone"
                label="Phone"
                value={formData.FirstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                value={selectedDate}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Address"
                label="Adress"
                value={formData.FirstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Hire Date"
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Position"
                value={selectedGender}
                onChange={handleGenderSelect}
                SelectProps={{
                  native: true,
                }}
                fullWidth
              >
                <option value="" disabled>
                  Position
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Instagram"
                label="Instagram"
                value={formData.FirstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Telegram"
                label="Telegram"
                value={formData.FirstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Tweeter"
                label="Tweeter"
                value={formData.FirstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Facebook"
                label="Facebook"
                value={formData.FirstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCloseDialog}
          color="inherit"
          variant="containedSecondary"
          startIcon={<CancelOutlined />}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="containedPrimary"
          startIcon={<CheckCircleOutlined />}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEmployee;
