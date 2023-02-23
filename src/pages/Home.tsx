import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import Cards from '../components/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { __getPost } from '../redux/modules/post';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = (): JSX.Element => {
  // dispatch와 useSelector 일단 any로 처리
  const dispatch: any = useDispatch();
  const { isLoading, error, post } = useSelector((state: any) => state.post);
  const [cookies] = useCookies(['userToken']);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = cookies.userToken;
  //   checkToken(token);
  // }, []);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  if (isLoading === true) {
    return <div>로딩 중...</div>;
  }
  if (error === true) {
    return <div>error</div>;
  }

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
        {/* 일단 any로 처리 */}
        <h1>Diary List</h1>
        {post.map((item: any) => (
          <Cards key={item.id} item={item}></Cards>
        ))}
      </Layout>
    </div>
  );
};

export default Home;
