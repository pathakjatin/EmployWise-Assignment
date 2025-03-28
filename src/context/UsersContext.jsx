import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers(page);
  }, [page]); // ✅ Only fetches when page changes

  // ✅ Fetch users from API
  const fetchUsers = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  // ✅ Update user in UI and API
  const updateUser = async (updatedUser) => {
    try {
      // ✅ Convert field names to match API requirements
      const updatedData = {
        first_name: updatedUser.firstName,
        last_name: updatedUser.lastName,
        email: updatedUser.email,
      };
  
      await axios.put(`https://reqres.in/api/users/${updatedUser.id}`, updatedData);
  
      console.log("Updating user with data:", updatedData);
  
      // ✅ Correct way to update state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === updatedUser.id ? { ...user, ...updatedData } : user
        )
      );
  
      alert("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user!");
    }
  };
  
  

  // ✅ Delete user from UI and API
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${userId}`);
  
      // ✅ Correct way to update state
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user!");
    }
  };
  

  return (
    <UsersContext.Provider value={{ users, page, setPage, totalPages, loading, updateUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};
