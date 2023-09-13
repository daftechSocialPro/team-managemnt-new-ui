/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import { getEmployees } from "api/employeeApi";
import { createImagePath } from "api/commonApi";
import { useSelector } from "react-redux";
import CreateEmployee from "./employeeCreate";
function Employee({ show }) {
  const getImage = (imagePath) => {
    return createImagePath(imagePath);
  };
  const user = useSelector((state) => state.user);
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const [employees, setEmployees] = useState([]);
  const fetchData = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
      console.log("employee", data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [openDialog]);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
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
                  Employees
                </MDTypography>
                <IconButton onClick={handleOpenDialog}>
                  <Icon style={{ color: "white" }}>add</Icon>
                </IconButton>
              </MDBox>
              <MDBox pt={3}>
                {/* <DataTable
                  table={{
                    columns: [
                      {
                        Header: "employee",
                        accessor: "employee",
                        width: "45%",
                        align: "left",
                      },
                      {
                        Header: "position",
                        accessor: "position",
                        align: "left",
                      },
                      { Header: "status", accessor: "status", align: "center" },
                      {
                        Header: "employed",
                        accessor: "employed",
                        align: "center",
                      },
                      { Header: "action", accessor: "action", align: "center" },
                    ],
                    rows: employees.map((item) => ({
                      employee: (
                        <MDBox
                          display="flex"
                          alignItems="center"
                          lineHeight={1}
                        >
                          <MDAvatar
                            src={getImage(item.imagePath)}
                            name={item.firstName}
                            size="sm"
                          />
                          <MDBox ml={2} lineHeight={1}>
                            <MDTypography
                              display="block"
                              variant="button"
                              fontWeight="medium"
                            >
                              {item.firstName} {item.lastName}
                            </MDTypography>
                            <MDTypography variant="caption">
                              {item.email}
                            </MDTypography>
                          </MDBox>
                        </MDBox>
                      ),
                      position: (
                        <MDBox lineHeight={1} textAlign="left">
                          <MDTypography
                            display="block"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                          >
                            {item.employmentPosition}
                          </MDTypography>
                        </MDBox>
                      ),
                      status: (
                        <MDBox ml={-1}>
                          <MDBadge
                            badgeContent={item.employmentStatus}
                            color="dark"
                            variant="gradient"
                            size="sm"
                          />
                        </MDBox>
                      ),
                      employed: (
                        <MDTypography
                          component="a"
                          href="#"
                          variant="caption"
                          color="text"
                          fontWeight="medium"
                        >
                          {item.employmentDate}
                        </MDTypography>
                      ),
                      action: (
                        <MDTypography
                          component="a"
                          href="#"
                          variant="caption"
                          color="text"
                          fontWeight="medium"
                        >
                          Edit
                        </MDTypography>
                      ),
                    })),
                  }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                /> */}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <CreateEmployee
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        show={show}
        user={user}
      />
    </DashboardLayout>
  );
}

export default Employee;
