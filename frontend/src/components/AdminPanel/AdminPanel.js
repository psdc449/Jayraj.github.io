import React, { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "../UserForm/UserForm";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  console.log("users: ", users);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await axios.get("http://localhost:8080/admin/all");
    setUsers(data.data);
  };

  const handleAddUser = async (user) => {
    await axios.post("http://localhost:8080/user/register", user);
    fetchUsers();
  };

  const handleUpdateUser = async (user) => {
    await axios.patch(`http://localhost:8080/admin/update`, user);
    fetchUsers();
    setSelectedUser(null);
  };

  const handleDeleteUser = async (userId) => {
    console.log("userId: ", userId);
    await axios.delete(`http://localhost:8080/admin/delete?id=${userId}`);
    fetchUsers();
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <UserForm
        onAddUser={handleAddUser}
        onUpdateUser={handleUpdateUser}
        selectedUser={selectedUser}
      />
      <table className="kenil">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="valani" onClick={() => handleEditClick(user)}>Edit</button>
                <button className="valani" onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
