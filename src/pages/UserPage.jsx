import React, { useContext, Suspense } from "react";
import { UsersContext } from "../context/UsersContext";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

// Lazy load UserCard
const LazyUserCard = React.lazy(() => import("../components/UserCard"));

const UserPage = () => {
  const { users, page, setPage, totalPages, loading } = useContext(UsersContext);
  const navigate = useNavigate();

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Users List
      </Typography>

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
    </Box>
  );
};

export default UserPage;
