import React, { useContext, useState } from "react";
import { TextField, Box, useTheme } from "@mui/material";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ThemeContext } from "../ThemeContext";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const { darkMode } = useContext(ThemeContext);
  const theme = useTheme();

  const radius = 100; // Adjust this to change the hover effect radius
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            ${theme.palette.primary.main},
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/input rounded-lg p-[2px] transition duration-300"
    >
      <Box
        component={TextField}
        type={type}
        fullWidth
        variant="outlined"
        inputRef={ref}
        sx={{
          backgroundColor: darkMode ? "background.paper" : "background.default",
          color: darkMode ? "text.primary" : "text.secondary",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "transparent" },
            "&:hover fieldset": { borderColor: theme.palette.primary.main },
            "&.Mui-focused fieldset": { borderColor: theme.palette.primary.main },
          },
          "& input": {
            color: darkMode ? "text.primary" : "text.secondary",
            "::placeholder": {
              color: darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
            },
          },
        }}
        {...props}
      />
    </motion.div>
  );
});

Input.displayName = "Input";

export { Input };
