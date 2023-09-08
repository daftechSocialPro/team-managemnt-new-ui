import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import { setLoading } from "store/loadingReducer";
import jwtDecode from "jwt-decode";
import { login } from "api/authApi";
import { Toast } from "primereact/toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toast = useRef(null);
  const show = (severity, summary, message) => {
    toast.current &&
      toast.current.show({
        severity: severity,
        summary: summary,
        detail: message,
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const userData = await login(username, password);

      if (userData.success) {
        show("success", "SUCCESS", userData.message);
        sessionStorage.setItem("token", userData.data);
        const decoded = jwtDecode(userData.data);
        dispatch({ type: "LOGIN_SUCCESS", payload: decoded });
        dispatch(setLoading(false));
        navigate("/dashboard");
      } else {
        show("error", "ERROR", userData.message);
        dispatch(setLoading(false));
      }
    } catch (error) {
      show("error", "ERROR", error);
      dispatch(setLoading(false));
    }
  };






  return (
    <>
      <Toast ref={toast} />
      <BasicLayout image={bgImage}>
        <Card>
          
              <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="success"
                mx={2}
                mt={-3}
                p={3}
                mb={1}
                textAlign="center"
              >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Welcome Back
                </MDTypography>
                <MDTypography display="block" variant="button" color="white" my={1}>
                  DAFTech Social, your innovative partner!
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form" onSubmit={handleLogin}>
                  <MDBox mb={2}>
                    <MDInput type="text" label="User Name" variant="standard" value={username}
                      onChange={(e) => setUsername(e.target.value)} fullWidth />


                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="password" label="Password" variant="standard"
                      value={password}

                      onChange={(e) => setPassword(e.target.value)}
                      fullWidth />


                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" type="submit" fullWidth>
                      LogIn
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
        
      </BasicLayout>
    </>
  );
}

export default Login;
