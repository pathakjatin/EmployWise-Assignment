import React, { useContext } from "react";
import { Box, Container, Typography, Link, Divider , IconButton } from "@mui/material";
import { ThemeContext } from "../ThemeContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        bgcolor: (theme) => theme.palette.background.paper,
        color: (theme) => theme.palette.text.primary,
        boxShadow: (theme) => theme.shadows[1],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} My Website. All Rights Reserved.
        </Typography>

        <Divider sx={{ my: 2, bgcolor: darkMode ? "grey.700" : "grey.300" }} />

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton component={Link} href="https://github.com/pathakjatin/" target="_blank" color="inherit">
            <GitHubIcon />
          </IconButton>
          <IconButton component={Link} href="https://www.linkedin.com/in/pathakjatin" target="_blank" color="inherit">
            <LinkedInIcon />
          </IconButton>
          <IconButton component={Link} href="https://pathakjatin.netlify.app" target="_blank" color="inherit">
            <LanguageIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
