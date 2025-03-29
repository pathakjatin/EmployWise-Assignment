import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { ThemeContext } from "../ThemeContext";

const Label = React.forwardRef(({ className, sx, ...props }, ref) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Typography
      ref={ref}
      component="label"
      sx={{
        fontSize: "0.875rem",
        fontWeight: "500", 
        color: darkMode ? "text.primary" : "text.secondary",
        lineHeight: "1.25",
        opacity: props.disabled ? 0.7 : 1,
        cursor: props.disabled ? "not-allowed" : "pointer",
        ...sx, 
      }}
      {...props}
    />
  );
});

Label.displayName = "Label";

export { Label };
