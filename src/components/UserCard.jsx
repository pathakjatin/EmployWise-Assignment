import React, { useContext, useState } from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";
import { UsersContext } from "../context/UsersContext";
import { motion } from "framer-motion";
import EditUserForm from "./EditUserForm";

export default function UserCard({ id, firstName, lastName, email, avatar }) {
  const { updateUser, deleteUser } = useContext(UsersContext);
  const [isEditing, setIsEditing] = useState(false);

  // ✅ Delete User
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Card
          sx={{
            maxWidth: 345,
            margin: "10px",
            backgroundColor: (theme) => theme.palette.background.paper,
            color: (theme) => theme.palette.text.primary,
            boxShadow: (theme) => theme.shadows[2],
          }}
        >
          <CardMedia component="img" height="140" image={avatar} alt={`${firstName} ${lastName}`} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {firstName} {lastName}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {email}
            </Typography>
          </CardContent>

          {/* Buttons */}
          <CardActions sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <Button variant="contained" color="success" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </motion.div>

      {/* ✅ Edit User Modal */}
      {isEditing && (
        <EditUserForm
          open={isEditing}
          onClose={() => setIsEditing(false)}
          user={{ id, firstName, lastName, email }}
          updateUser={updateUser}
        />
      )}
    </>
  );
}
