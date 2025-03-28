import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { ThemeContext } from "../ThemeContext";
import { Input } from "../components/Input";
import { Label } from "../components/Label";

export default function LoginPage() {
  const { darkMode } = useContext(ThemeContext);
  const theme = useTheme();
  const navigate = useNavigate();

  // Empty fields by default
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (email !== "eve.holt@reqres.in" || password !== "cityslicka") {
      setError("Invalid credentials. Please try again.");
      return;
    }

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/user");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 4,
        borderRadius: 2,
        bgcolor: darkMode ? "background.paper" : "background.default",
        boxShadow: 3,
        mt:8
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Welcome Back
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
        Please enter your credentials to login.
      </Typography>

      <Box component="form" sx={{ mt: 3 }} onSubmit={handleLogin}>
        {/* Email */}
        <Box sx={{ mb: 2 }}>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        {/* Password */}
        <Box sx={{ mb: 3 }}>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        {/* Error Message */}
        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        {/* Login Button */}
        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            py: 1,
            "&:hover": { bgcolor: theme.palette.primary.dark },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
