import { FC } from 'react';

import Layout from '@/layout/Layout';

import { IHome } from '@/screens/home/home.interface';

const Home: FC<IHome> = () => {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default Home;
