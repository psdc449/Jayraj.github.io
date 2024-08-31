import React, { useState, useEffect } from "react";

const UserForm = ({ onAddUser, onUpdateUser, selectedUser }) => {
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      onUpdateUser(formData);
    } else {
      onAddUser(formData);
    }
    setFormData({ id: "", username: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{selectedUser ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default UserForm;
