import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Header from "layouts/profile/components/Header";
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Project() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <MDBox pt={2} px={2} lineHeight={1.25}>
        <MDTypography variant="h6" fontWeight="medium">
          Projects
        </MDTypography>
        <MDBox mb={1}>
          <MDTypography variant="button" color="text">
            DAFTech Social completed and ongoing projects list
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              label="project #2"
              title="modern"
              description="As Uber works through a huge amount of internal management turmoil."
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "view project",
              }}
              authors={[
                { image: team1, name: "Elena Morison" },
                { image: team2, name: "Ryan Milly" },
                { image: team3, name: "Nick Daniel" },
                { image: team4, name: "Peterson" },
              ]}
              sx={{ padding: "50px" }}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              label="project #1"
              title="scandinavian"
              description="Music is something that everyone has their own specific opinion about."
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "view project",
              }}
              authors={[
                { image: team3, name: "Nick Daniel" },
                { image: team4, name: "Peterson" },
                { image: team1, name: "Elena Morison" },
                { image: team2, name: "Ryan Milly" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              label="project #3"
              title="minimalist"
              description="Different people have different taste, and various types of music."
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "view project",
              }}
              authors={[
                { image: team4, name: "Peterson" },
                { image: team3, name: "Nick Daniel" },
                { image: team2, name: "Ryan Milly" },
                { image: team1, name: "Elena Morison" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              label="project #4"
              title="gothic"
              description="Why would anyone pick blue over pink? Pink is obviously a better color."
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "view project",
              }}
              authors={[
                { image: team4, name: "Peterson" },
                { image: team3, name: "Nick Daniel" },
                { image: team2, name: "Ryan Milly" },
                { image: team1, name: "Elena Morison" },
              ]}
            />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Project;
