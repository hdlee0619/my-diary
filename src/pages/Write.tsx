import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import Form from '../components/Form';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies();
  useEffect(() => {
    const token = cookies.userToken;
    checkToken(token);
  }, [cookies.userToken]);

  const checkToken = async (token: string) => {
    await axios
      .get(`${process.env.REACT_APP_LOG_IN_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch(() => {
        alert('로그인 필요');
        navigate('/login');
      });
  };
  return (
    <div className="home">
      <Navbar />
      <Layout>
        <Form></Form>
      </Layout>
    </div>
  );
};

export default Write;
