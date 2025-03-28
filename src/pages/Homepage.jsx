import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { TypeWriterEffect } from "../components/TypeWriterEffect";
import { ThemeContext } from "../ThemeContext";


export default function Homepage() {
  const theme = useTheme();
  const { darkMode } = useContext(ThemeContext);

  const sentences = [
    [
      { text: "Authentication " },
      { text: "screen." },
    ],
    [
      { text: "List " },
      { text: "all " },
      { text: "users. " },
    ],
    [
      { text: "Create, " },
      { text: "Edit, " },
      { text: "Update  " },
      { text: "and " },
      { text: "Delete " },
      { text: "Users " },
    ],
  ];

  // ✅ Track current sentence index
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Wait for sentence animation to complete before switching
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 8000); // Change sentence every 3 seconds

    return () => clearTimeout(timeout);
  }, [index]);

  return (<>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        px: 2,
      }}
    >
      {/* Subtitle */}
      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
        EmployWIse Assignment
      </Typography>

      {/* ✅ Show One Sentence at a Time */}
      <Box sx={{ mt: 2 }}>
        <TypeWriterEffect key={index} words={sentences[index]} />
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "16px", md: "24px" },
          mt: 3,
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "160px",
            height: "40px",
            borderRadius: "12px",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            "&:hover": { backgroundColor: theme.palette.primary.dark },
            border: darkMode ? "1px solid white" : "none",
          }}
        >
          Join Now
        </Button>

        <Button
          variant="outlined"
          sx={{
            width: "160px",
            height: "40px",
            borderRadius: "12px",
            borderColor: theme.palette.text.primary,
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.paper,
            "&:hover": { backgroundColor: theme.palette.action.hover },
          }}
        >
          Signup
        </Button>
      </Box>
    </Box>

        </>
  );
}
