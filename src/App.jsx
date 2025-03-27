import React, { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import Homepage from "./pages/Homepage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import { lightTheme, darkTheme } from "./ThemeContext";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CodeIcon from "@mui/icons-material/Code"

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {

  const NAVIGATION = [
    { segment: "/", title: "Home", icon: <Link to="/"><HomeIcon /></Link> },
    { segment: "/user", title: "User", icon: <Link to="/user"><PersonIcon /></Link> },
    { segment: "/login", title: "Login", icon: <Link to="/login"><LockOpenIcon /></Link> },
  ];
  

  const muiLightTheme = useMemo(() => createTheme(lightTheme), []);
  const muiDarkTheme = useMemo(() => createTheme(darkTheme), []);

  return (
    <AppProvider 
      navigation={NAVIGATION} 
      theme={{ light: muiLightTheme, dark: muiDarkTheme }}
      branding={{
        logo: <CodeIcon/>,
        title: 'JP',
        homeUrl: '/',
      }}
    >
      <DashboardLayout defaultSidebarCollapsed>
        <CssBaseline />
        
        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </DashboardLayout>
    </AppProvider>
  );
}
