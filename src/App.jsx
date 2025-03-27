import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import { CssBaseline, Button } from "@mui/material";
function App() {

{/*
  #fefefe
  #515052
  #000103
  #333138
  #FF312E
*/}
const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <>
    <CssBaseline/>
      <Button onClick={() => setDarkMode((prev) => !prev)} variant="outlined">
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </Button>
    </>
  )
}

export default App
