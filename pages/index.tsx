import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Prismic from '@prismicio/client';
import { apiEndpoint } from '../prismic-config';

const Home: NextPage = () => {
  const data = Prismic.getApi(apiEndpoint);
  console.log(data);

  return (
    <div>
      <Layout>
        <h1>My portfolio</h1>
      </Layout>
    </div>
  );
};

export default Home;
