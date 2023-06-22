import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    navigate('/login');
  };

  return (
    <>
      <h1>This is the Homepage</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
