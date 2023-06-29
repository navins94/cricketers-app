import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { colorConfigs } from "../../../../configs/colorConfigs";
import { RouteType } from "../../../../routes/config";
import { useLocation } from "react-router-dom";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const location = useLocation();
  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        "&.Mui-selected": {
          borderRight: "3px solid #00E0FF",
          color: "#00E0FF",
          "& .MuiSvgIcon-root": {
            color: "#00E0FF",
          },
        },
        "& .MuiSvgIcon-root": {
          color: colorConfigs.secondaryText,
        },
        my: "10px",
        paddingY: "6px",
        paddingX: "40px",
        color: colorConfigs.secondaryText,
        fontWeight: 600,
        fontSize: "16px",
        letterSpacing: "0.5px",
      }}
      selected={item.path === location.pathname}
    >
      <ListItemIcon
        sx={{
          minWidth: "auto",
          paddingRight: "15px",
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
