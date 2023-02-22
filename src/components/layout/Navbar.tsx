import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Navbar = () => {
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies();
  const logOutBtnHandler = () => {
    console.log('remove');
    removeCookie('userToken');
    navigate('/login');
  };
  return (
    <>
      <div className="nav">
        <h1>Logo</h1>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/write')}>Write</button>
        <button onClick={() => logOutBtnHandler()}>Log out</button>
      </div>
    </>
  );
};

export default Navbar;
