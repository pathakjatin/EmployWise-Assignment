import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ThemeContext = createContext();

const lightTheme = {
  palette: {
    mode: "light",
    primary: { main: "#FF312E" }, // 🔴 Add, Submit, Primary Actions
    success: { main: "#27AE60" }, // ✅ Green for Success
    error: { main: "#FF312E" }, // ❌ Delete, Remove
    background: { default: "#fefefe", paper: "#fff" }, // ⚪ Light mode backgrounds
    text: { primary: "#333138", secondary: "#515052" }, // 🩶 Text & Secondary UI
    action: { hover: "rgba(255, 49, 46, 0.1)" }, // 🔴 Red hover effect
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0, 0, 0, 0.1)",  
    "0px 4px 8px rgba(0, 0, 0, 0.15)", 
    "0px 6px 12px rgba(0, 0, 0, 0.2)", 
  ],
};

const darkTheme = {
  palette: {
    mode: "dark",
    primary: { main: "#FF312E" },
    success: { main: "#27AE60" }, // ✅ Green for Success
    error: { main: "#FF312E" },
    background: { default: "#000103", paper: "#333138" },
    text: { primary: "#fefefe", secondary: "#515052" },
    action: { hover: "rgba(255, 49, 46, 0.2)" },
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(255, 255, 255, 0.1)", 
    "0px 4px 8px rgba(255, 255, 255, 0.15)", 
    "0px 6px 12px rgba(255, 255, 255, 0.2)", 
  ],
};

export const ThemeProviderWrapper = ({ children, defaultMode }) => {

  const getInitialMode = () => {
    if (defaultMode === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return defaultMode === "dark";
  };

  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    if (defaultMode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => setDarkMode(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [defaultMode]);

  const theme = useMemo(() => createTheme(darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
