import {
  Avatar,
  Drawer,
  List,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { colorConfigs } from "../../../../configs/colorConfigs";
import sizeConfigs from "../../../../configs/sizeConfigs";
import appRoutes from "../../../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import UserImage from "../../../../assets/profile.svg";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
          padding: "40px 0px",
        },
      }}
    >
      <List disablePadding>
        <Toolbar
          sx={{
            marginBottom: "20px",
            borderBottom: "1px solid #394B61",
            paddingBottom: "10px",
          }}
        >
          <Stack
            sx={{ width: "100%" }}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar src={UserImage} sx={{ width: 100, height: 100 }} />
            <Typography
              color="textSecondary"
              fontWeight={600}
              fontSize={20}
              sx={{ paddingTop: "15px", paddingBottom: "10px" }}
            >
              Eric Hoffman
            </Typography>
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? <SidebarItem item={route} key={index} /> : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
