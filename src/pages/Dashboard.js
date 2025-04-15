import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state.user.currentUser);

  if (!user) return <p>No user logged in.</p>;

  return (
    <div class="dashboard-info">
      <h2>Welcome, {user.firstName}!</h2>
      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
    </div>
  );
};

export default Dashboard;
