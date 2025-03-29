import React, { useContext, Suspense } from "react";
import { UsersContext } from "../context/UsersContext";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, TextField } from "@mui/material";
import Logout from "../components/Logout";

// Lazy load UserCard
const LazyUserCard = React.lazy(() => import("../components/UserCard"));

const UserPage = () => {
  const { users, page, setPage, totalPages, loading , handleSearch} = useContext(UsersContext);
  const navigate = useNavigate();

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>

      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant="h4" gutterBottom>
          Users List
        </Typography>
        <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        sx={{ mb: 3, maxWidth: 400 }}
        onChange={(e) => handleSearch(e.target.value)}
      />

      </Box>

      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Suspense fallback={<Typography>Loading users...</Typography>}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            {users.map((user) => (
              <LazyUserCard
                key={user.id}
                id={user.id}
                firstName={user.first_name}
                lastName={user.last_name}
                email={user.email}
                avatar={user.avatar}
              />
            ))}
          </Box>
        </Suspense>
      )}

      <Box sx={{ marginTop: "20px" }}>
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box>
              <Button onClick={handlePrev} disabled={page === 1} variant="contained" sx={{ marginRight: "10px" }}>
                Previous
              </Button>
              <span>
                Page {page} of {totalPages}
              </span>
              <Button onClick={handleNext} disabled={page === totalPages} variant="contained" sx={{ marginLeft: "10px" }}>
                Next
              </Button>
            </Box>
            <Box>
              <Logout/>
            </Box>
          </Box>
      </Box>
    </Box>
  );
};

export default UserPage;
