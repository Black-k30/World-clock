import React from 'react';
import { useAuth } from '../Context/AuthContect';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/') 
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  return (
    <div>
      <h2>Welcome to Home</h2>
      <p>User: {currentUser ? currentUser.email : 'No user logged in'}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Home;
