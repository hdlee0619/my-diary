import React from 'react';
import Navbar from '../components/ui/Navbar';
import Layout from '../components/ui/Layout';
import Form from '../components/Form';

const Write = () => {
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
