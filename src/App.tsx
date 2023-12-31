import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { colorConfigs } from "./configs/colorConfigs";
import "./App.css";
import MainLayout from "./components/Pages/MainLayout";
import CricketersPage from "./components/Pages/CricketersPage";
import CricketersDetailPage from "./components/Pages/CricketersDetailPage";
import ScrollToTop from "./helpers/ScrollToTop";

const theme = createTheme({
  palette: {
    text: {
      primary: colorConfigs.primaryText,
      secondary: colorConfigs.secondaryText,
    },
    primary: {
      main: "#1F2A3C",
    },
    secondary: {
      main: "#394B61",
    },
  },
  typography: {
    fontFamily: ["Open Sans"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<CricketersPage />} />
            <Route path="players/:id" element={<CricketersDetailPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
