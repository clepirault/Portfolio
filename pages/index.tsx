import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import { constants } from '../utils/constants/constants';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import MainTitle from '../components/title/MainTitle';
import SecondaryTitle from '../components/title/SecondaryTitle';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <div className='flex flex-col sm:items-end sm:m-36'>
          <MainTitle>{constants.fullname}</MainTitle>
          <SecondaryTitle>{constants.title}</SecondaryTitle>
          <div className='flex text-3xl mt-4 w-28 justify-around sm:mr-16'>
            <Link href={constants.links.linkedin}>
              <a target='_blank'>
                <AiFillLinkedin />
              </a>
            </Link>
            <Link href={constants.links.github}>
              <a target='_blank'>
                <AiFillGithub />
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
