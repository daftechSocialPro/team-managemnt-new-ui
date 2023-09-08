import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import Employee from "pages/Employee";
import Icon from "@mui/material/Icon";
import Tables from "layouts/tables";
import Project from "pages/Project/project";
import Team from "pages/Team/team";
import Logout from "pages/Login/logout";
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Employee",
    key: "employee",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/employee",
    component: <Employee />,
  },
  {
    type: "collapse",
    name: "Project",
    key: "project",
    icon: <Icon fontSize="small">folder</Icon>,
    route: "/project",
    component: <Project />,
  },
  {
    type: "collapse",
    name: "Team",
    key: "team",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/team",
    component: <Team />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Log Out",
    key: "log-out",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/logout",
    component: <Logout />,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
];

export default routes;
