/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AuthorsDisplay from "pages/Project/images";
import { getProjects } from "api/projectApi";
import { createImagePath } from "api/commonApi";
import { Button, LinearProgress, Badge, Box } from "@mui/material";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
const OutlinedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  borderColor: theme.palette.secondary.main,
}));
function Project() {
  const user = useSelector((state) => state.user);
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const [projects, setProjects] = useState([]);
  const fetchData = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
      console.log("projects", data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [openDialog]);
  const getImage = (imagePath) => {
    return createImagePath(imagePath);
  };
  {const authors = employees.map(employee => ({
    image: employee.image.replace(/\\/g, '/'), // Convert backslashes to forward slashes
    name: employee.name,
  }))}
  const getSeverityColor = (projectStatus) => {
    switch (projectStatus) {
      case "ONGOING":
        return "blue";
      case "PENDING":
        return "orange";
      case "COMPLETED":
        return "green";
      case "CANCELD":
        return "red";
      default:
        return "default";
    }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card xs={{ backgroundColor: "#f6f9ff" }}>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <MDTypography variant="h6" color="white">
                  Projects
                </MDTypography>
                <IconButton onClick={handleOpenDialog}>
                  <Icon style={{ color: "white" }}>add</Icon>
                </IconButton>
              </MDBox>
              <MDBox p={3}>
                <Grid container spacing={3}>
                  {projects.map((item, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card sx={{ maxWidth: 500, backgroundColor: "#f6f9ff" }}>
                        <CardHeader
                          sx={{
                            borderRadius: "10px 10px 0 0",
                            backgroundColor: "#ffffff",
                          }}
                          action={
                            <>
                              <OutlinedButton
                                variant="outlined"
                                sx={{
                                  borderColor: getSeverityColor(
                                    item.projectStatus
                                  ),
                                  color: getSeverityColor(item.projectStatus),
                                }}
                              >
                                {item.projectStatus}
                              </OutlinedButton>
                              <IconButton aria-label="edit" color="secondary">
                                <Icon style={{ color: "#40e0d0" }}>edit</Icon>
                              </IconButton>
                            </>
                          }
                          title={item.projectName}
                        />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <CardContent>
                            <Typography paragraph>
                              Assigned To: {item.assignedTo}{" "}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              The Employees Assigned to this project
                            </Typography>
                            {item.projectEmployees.map((employee, i) => (
                              <div style={{ marginLeft: "50px" }}>
                                {console.log("image",getImage(employee.imagePath), employee.name )}
                                <AuthorsDisplay
                                  authors={[
                                    {
                                      image: getImage(employee.imagePath),
                                      name: employee.name,
                                    },
                                   
                                  ]}
                                />
                              </div>
                            ))}
                          </CardContent>
                        </div>

                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                        </CardContent>

                        <CardActions
                          sx={{
                            borderRadius: "10px 10px 0 0",
                            backgroundColor: "#ffffff",
                          }}
                        >
                          <Grid container spacing={2} alignItems="center">
                            <Grid
                              container
                              item
                              xs={12}
                              spacing={3}
                              alignItems="center"
                            >
                              <Grid item>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  0 tasks
                                </Typography>
                              </Grid>

                              <Grid item>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  0
                                </Typography>
                              </Grid>

                              <Grid item style={{ width: "60px" }}>
                                <Badge
                                  badgeContent="completed"
                                  color="error"
                                  overlap="rectangular"
                                  sx={{
                                    ".MuiBadge-badge": {
                                      top: "50%",
                                      transform: "translateY(-50%)",
                                      backgroundColor: "green",
                                    },
                                  }}
                                >
                                  <Box width={20} height={20}></Box>
                                </Badge>
                              </Grid>

                              <Grid item>
                                {" "}
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  style={{ marginLeft: "30px" }}
                                >
                                  0
                                </Typography>
                              </Grid>

                              <Grid item style={{ width: "60px" }}>
                                <Badge
                                  badgeContent="ongoing"
                                  color="error"
                                  overlap="rectangular"
                                  sx={{
                                    ".MuiBadge-badge": {
                                      top: "50%",
                                      transform: "translateY(-50%)",
                                      backgroundColor: "#FFA500",
                                    },
                                  }}
                                >
                                  <Box width={20} height={20}></Box>
                                </Badge>
                              </Grid>
                            </Grid>

                            <Grid item xs={12}>
                              <LinearProgress
                                variant="determinate"
                                value={50}
                                sx={{
                                  height: "10px",
                                  "& .MuiLinearProgress-barColorPrimary": {
                                    backgroundColor: "blue",
                                  },
                                }}
                              />
                            </Grid>
                          </Grid>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <CreateEmployee
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        show={show}
        user={user}
      /> */}
    </DashboardLayout>
  );
}

export default Project;
