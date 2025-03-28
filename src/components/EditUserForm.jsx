import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { Input } from "../components/Input";
import { Label } from "../components/Label";

export default function EditUserForm({ open, onClose, user, updateUser }) {
  const [editedUser, setEditedUser] = useState(user);
  const [loading, setLoading] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  // Handle Save
  const handleSave = async () => {
    setLoading(true);
    await updateUser(editedUser);
    setLoading(false);
    onClose(); // ✅ Close modal after saving
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="edit-user-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          Edit User Details
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" value={editedUser.firstName} onChange={handleChange} />
          </Box>

          <Box>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" value={editedUser.lastName} onChange={handleChange} />
          </Box>

          <Box>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={editedUser.email} onChange={handleChange} />
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button variant="contained" color="success" onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
          <Button variant="contained" color="error" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
