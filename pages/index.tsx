import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import { constants } from '../utils/constants/constants';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <h1>{constants.fullname}</h1>
        <p>{constants.title}</p>
        <div className='flex'>
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
