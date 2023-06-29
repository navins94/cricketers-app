import { Outlet } from "react-router-dom";
import { colorConfigs } from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../UI/organisms/Sidebar/Sidebar";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg,
          color: colorConfigs.primaryText,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
