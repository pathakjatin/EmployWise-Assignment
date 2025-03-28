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
        fontSize: "0.875rem", // Equivalent to text-sm
        fontWeight: "500", // Medium font
        color: darkMode ? "text.primary" : "text.secondary",
        lineHeight: "1.25",
        opacity: props.disabled ? 0.7 : 1,
        cursor: props.disabled ? "not-allowed" : "pointer",
        ...sx, // Allow additional MUI styling
      }}
      {...props}
    />
  );
});

Label.displayName = "Label";

export { Label };
