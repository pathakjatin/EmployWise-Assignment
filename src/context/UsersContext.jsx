import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUsers(page);
  }, [page]);
  
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

      const updatedData = {
        first_name: updatedUser.firstName,
        last_name: updatedUser.lastName,
        email: updatedUser.email,
      };
  
      await axios.put(`https://reqres.in/api/users/${updatedUser.id}`, updatedData);
  
      console.log("Updating user with data:", updatedData);

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

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user!");
    }
  };

    const handleSearch = (query) => {
      setSearchQuery(query.toLowerCase());
    };
  

    const filteredUsers = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchQuery) ||
        user.last_name.toLowerCase().includes(searchQuery) ||
        user.email.toLowerCase().includes(searchQuery)
    );
  

  return (
    <UsersContext.Provider value={{ users:filteredUsers, page, setPage, totalPages, loading, updateUser, deleteUser, handleSearch }}>
      {children}
    </UsersContext.Provider>
  );
};
