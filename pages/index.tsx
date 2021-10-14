import type { NextPage } from 'next';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MainTitle from '../components/title/MainTitle';
import SecondaryTitle from '../components/title/SecondaryTitle';
import Link from 'next/link';
import { client } from '../prismic-config';
import Prismic from 'prismic-javascript';
import Image from 'next/image';
import MainLayout from '../components/layout/MainLayout';

type Props = {
  homepage: any; // todo : find other type
};

const Home: NextPage<Props> = (props) => {
  const { homepage } = props;

  return (
    <MainLayout>
      <div className='flex flex-col sm:items-end sm:mt-36 sm:mx-36 sm:mb-12'>
        <MainTitle>{homepage.primarytitle[0].text}</MainTitle>
        <SecondaryTitle>{homepage.secondarytitle[0].text}</SecondaryTitle>
        <div className='flex text-3xl mt-4 w-60 justify-around sm:mr-16'>
          <Link href={homepage.linkedin.url}>
            <a target='_blank'>
              <AiFillLinkedin />
            </a>
          </Link>
          <Link href={homepage.github.url}>
            <a target='_blank'>
              <AiFillGithub />
            </a>
          </Link>
          <div className='flex items-baseline'>
            <FaMapMarkerAlt />
            <p className='text-sm'>{homepage.optionalcontent[0].text}</p>
          </div>
        </div>
      </div>
      <div className='hidden sm:flex sm:justify-center sm:mb-12 sm:mx-12 sm:w-1/2'>
        <Image
          src={homepage.profile.url}
          alt={homepage.profile.alt}
          width='600'
          height='400'
        />
      </div>
    </MainLayout>
  );
};

// todo : create hero component

export async function getStaticProps() {
  const res = await client.query(
    Prismic.Predicates.at('document.type', 'homepage')
  );
  const homepage = await res.results[0].data;

  return {
    props: {
      homepage,
    },
  };
}

export default Home;
