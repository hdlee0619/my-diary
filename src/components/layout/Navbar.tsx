import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Btn from '../Btn';

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
        <Btn onClick={() => navigate('/')}>Home</Btn>
        <Btn onClick={() => navigate('/write')}>Write</Btn>
        <Btn onClick={() => logOutBtnHandler()}>Log out</Btn>
      </div>
    </>
  );
};

export default Navbar;
