import CricketersPage from "../components/Pages/CricketersPage";
import SearchIcon from "@mui/icons-material/Search";
import { RouteType } from "./config";

const appRoutes: RouteType[] = [
  {
    index: true,
    path: "/",
    element: <CricketersPage />,
    state: "discover",
    sidebarProps: {
      displayText: "Discover",
      icon: <SearchIcon />,
    },
  },
];

export default appRoutes;
