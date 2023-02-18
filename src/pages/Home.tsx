import React, { useEffect } from 'react';
import Layout from '../components/ui/Layout';
import Navbar from '../components/ui/Navbar';
import Cards from '../components/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { __getPost } from '../redux/modules/post';

const Home = (): JSX.Element => {
  // dispatch와 useSelector 일단 any로 처리
  const dispatch: any = useDispatch();
  const { isLoading, error, post } = useSelector((state: any) => state.post);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  if (isLoading === true) {
    return <div>로딩 중...</div>;
  }
  if (error === true) {
    return <div>error</div>;
  }

  return (
    <div className="home">
      <Navbar />
      <Layout>
        {/* 일단 any로 처리 */}
        {post.map((item: any) => (
          <Cards key={item.id} item={item}></Cards>
        ))}
      </Layout>
    </div>
  );
};

export default Home;
