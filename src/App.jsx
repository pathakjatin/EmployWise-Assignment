import React, { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import Homepage from "./pages/Homepage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx"
import Footer from "./components/Footer.jsx";
import { lightTheme, darkTheme } from "./ThemeContext";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CodeIcon from "@mui/icons-material/Code"
import './index.css'

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {

  const NAVIGATION = [
    { segment: "/", title: "Home", icon: <HomeIcon />, path: "/" },
    { segment: "/user", title: "User", icon: <PersonIcon />, path: "/user" },
    { segment: "/login", title: "Login", icon: <LockOpenIcon />, path: "/login" },
  ];
  
  

  const muiLightTheme = useMemo(() => createTheme(lightTheme), []);
  const muiDarkTheme = useMemo(() => createTheme(darkTheme), []);

  return (
<AppProvider
  navigation={NAVIGATION.map((item) => ({
    ...item,
    icon: (
      <Link to={item.path} style={{ color: "inherit", textDecoration: "none" }}>
        {item.icon}
      </Link>
    ),
  }))} 
  theme={{ light: muiLightTheme, dark: muiDarkTheme }}
  branding={{
    logo: <CodeIcon />,
    title: "JP",
    homeUrl: "/",
  }}
>

      <DashboardLayout defaultSidebarCollapsed>
        <CssBaseline />
        
        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer/>
      </DashboardLayout>
    </AppProvider>
  );
}
