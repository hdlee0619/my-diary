import React from 'react';
import Layout from '../components/ui/Layout';
import Navbar from '../components/ui/Navbar';
import Cards from '../components/Cards';

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <Navbar />
      <Layout>
        <Cards></Cards>
      </Layout>
    </div>
  );
};

export default Home;
