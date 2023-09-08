import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import employeeData from "pages/Employee/data/employeeData";
import React, { useState, useEffect } from "react";
import { getEmployees } from "api/employeeApi";
function Employee() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
    const [employees, setEmployees] = useState([]);
    const fetchData = async () => {
        try {
          const data = await getEmployees();
          setEmployees(data);
          setSearchResults(data);
          console.log("employee", data);
        } catch (error) {
          console.error("Error fetching employees:", error);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);
      const handleSearch = () => {
        console.log(searchQuery);
        const filteredResults = employees.filter((item) =>
          item.firstName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
        setSearchResults(filteredResults);
      };
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
              >
                <MDTypography variant="h6" color="white">
                  Employees
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
              <DataTable
      table={{
        columns: [
          { Header: "employee", accessor: "employee", width: "45%", align: "left" },
          { Header: "position", accessor: "position", align: "left" },
          { Header: "status", accessor: "status", align: "center" },
          { Header: "employed", accessor: "employed", align: "center" },
          { Header: "action", accessor: "action", align: "center" },
        ],
        rows: data.map((item) => ({
          employee: (
            <Employee image={item.image} name={item.name} email={item.email} />
          ),
          position: (
            <Position title={item.positionTitle} description={item.positionDescription} />
          ),
          status: (
            <MDBox ml={-1}>
              <MDBadge badgeContent={item.status} color="dark" variant="gradient" size="sm" />
            </MDBox>
          ),
          employed: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {item.employedDate}
            </MDTypography>
          ),
          action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              Edit
            </MDTypography>
          ),
        })),
      }}
      isSorted={false}
      entriesPerPage={false}
      showTotalEntries={false}
      noEndBorder
    />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Employee;

