import React, { useContext, useState } from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";
import { UsersContext } from "../context/UsersContext";
import { motion } from "framer-motion";
import EditUserForm from "./EditUserForm";

export default function UserCard({ id, firstName, lastName, email, avatar }) {
  const { updateUser, deleteUser } = useContext(UsersContext);
  const [isEditing, setIsEditing] = useState(false);

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
        style={{ width: "100%" }} 
      >
        <Card
          sx={{
            width: "100%", // Responsive width
            maxWidth: { xs: "100%", sm: "345px" }, 
            minHeight: "300px",
            margin: "10px auto", // Centering
            backgroundColor: (theme) => theme.palette.background.paper,
            color: (theme) => theme.palette.text.primary,
            boxShadow: (theme) => theme.shadows[2],
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            "@media (max-width: 600px)": {
              padding: "10px",
            },
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={avatar}
            alt={`${firstName} ${lastName}`}
            sx={{
              width: "100%",
              height: { xs: "100px", sm: "140px" }, 
              objectFit: "contain",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" fontSize={{ xs: "1rem", sm: "1.25rem" }}>
              {firstName} {lastName}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", wordBreak: "break-word" }}>
              {email}
            </Typography>
          </CardContent>

          {/* Buttons */}
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "8px 16px",
            }}
          >
            <Button variant="contained" color="success" onClick={() => setIsEditing(true)} fullWidth>
              Edit
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete} fullWidth>
              Delete
            </Button>
          </CardActions>
        </Card>
      </motion.div>

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
