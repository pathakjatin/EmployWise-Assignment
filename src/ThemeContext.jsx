import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ThemeContext = createContext();

export const lightTheme = {
  palette: {
    mode: "light",
    primary: { main: "#BB86FC" },
    success: { main: "#27AE60" },
    error: { main: "#FF312E" },
    background: { default: "#fefefe", paper: "#fff" },
    text: { primary: "#353535", secondary: "#6C757D" },
    action: { hover: "rgba(165, 105, 240, 0.2)" },
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "0px 4px 8px rgba(0, 0, 0, 0.15)",
    "0px 6px 12px rgba(0, 0, 0, 0.2)",
  ],
};

export const darkTheme = { 
  palette: {
    mode: "dark",
    primary: { main: "#FFC83D" },
    success: { main: "#27AE60" },
    error: { main: "#FF312E" },
    background: { default: "#000103", paper: "#353535" },
    text: { primary: "#fefefe", secondary: "#6C757D" },
    action: { hover: "rgba(255, 165, 0, 0.15)" },
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
