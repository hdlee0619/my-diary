import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav">
        <h1>Logo</h1>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/write')}>Write</button>
        <button>Log out</button>
      </div>
    </>
  );
};

export default Navbar;
