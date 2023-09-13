/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useRef } from "react";
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
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/loadingReducer";
import { createEmployee } from "api/employeeApi";
import CloseIcon from "@mui/icons-material/Close";
// import { Toast } from "primereact/toast";
import { CancelOutlined, CheckCircleOutlined } from "@mui/icons-material";
const CreateEmployee = ({ openDialog, setOpenDialog, user }) => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const handleImageChange = (file) => {
    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);
  };
  const toast = useRef(null);

  const show = (severity, summary, message) => {
    toast.current &&
      toast.current.show({
        severity: severity,
        summary: summary,
        detail: message,
      });
  };
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState("");
  const [ImagePath, setFile] = useState(null);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState("male");
  const [BirthDate, setBirthday] = useState("");
  const [PhoneNumber, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [EmploymentDate, setHireDate] = useState("");
  const [Telegram, setTelegram] = useState("");
  const [Twitter, setTwitter] = useState("");
  const [Facebook, setFacebook] = useState("");
  const [Instagram, setInstagram] = useState("");
  const [EmploymentPosition, setPosition] = useState("");
  const CreatedById = user.user && user.user.userId;
  const handleCreate = async (e) => {
    e.preventDefault();
    // dispatch(setLoading(true));
    const formData = new FormData();
    formData.append("FirstName", FirstName);
    formData.append("LastName", LastName);
    formData.append("Gender", Gender);
    formData.append("PhoneNumber", PhoneNumber);
    formData.append("BirthDate", BirthDate);
    formData.append("Email", Email);
    formData.append("Address", Address);
    formData.append("EmploymentDate", EmploymentDate);
    formData.append("EmploymentPosition", EmploymentPosition);
    formData.append("Telegram", Telegram);
    formData.append("Twitter", Twitter);
    formData.append("Facebook", Facebook);
    formData.append("Instagram", Instagram);
    formData.append("ImagePath", selectedImage);
    formData.append("CreatedById", CreatedById);
    console.log("formData", formData);

    try {
      const response = await createEmployee(formData);

      if (response.success) {
        show("success", "SUCCESS", response.message);
        handleCloseDialog();
        // dispatch(setLoading(false));
      } else {
        show("error", "ERROR", response.message);
        dispatch(setLoading(false));
      }
    } catch (error) {
      // Handle the error
      show("error", "ERROR", error);
      // dispatch(setLoading(false));
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
        <form onSubmit={handleCreate}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <FileUploader
                handleChange={(file) => handleImageChange(file)}
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
                    value={Gender}
                    on
                    onChange={(e) => setGender(e.target.value)}
                    size="medium"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="" disabled>
                      Gender
                    </option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="FirstName"
                label="First Name"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="LastName"
                label="Last Name"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Birth Date"
                type="date"
                value={BirthDate}
                onChange={(e) => setBirthday(e.target.value)}
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
                value={PhoneNumber}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Hire Date"
                type="date"
                value={EmploymentDate}
                onChange={(e) => setHireDate(e.target.value)}
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
                value={EmploymentPosition}
                onChange={(e) => setPosition(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                fullWidth
              >
                <option value="" disabled>
                  Position
                </option>
                <option value="DEPUTY_MANAGER">DEPUTY_MANAGER</option>
                <option value="HRM">HRM</option>
                <option value="FINANCE">FINANCE</option>
                <option value="MARKETING">MARKETING</option>
                <option value="DEVELOPER">DEVELOPER</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Instagram"
                label="Instagram"
                value={Instagram}
                onChange={(e) => setInstagram(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Telegram"
                label="Telegram"
                value={Telegram}
                onChange={(e) => setTelegram(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Tweeter"
                label="Tweeter"
                value={Twitter}
                onChange={(e) => setTwitter(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Facebook"
                label="Facebook"
                value={Facebook}
                onChange={(e) => setFacebook(e.target.value)}
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
          type="submit"
          color="primary"
          variant="containedPrimary"
          onClick={handleCreate}
          startIcon={<CheckCircleOutlined />}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEmployee;
