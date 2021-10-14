import type { NextPage } from 'next';
import Prismic from 'prismic-javascript';
import { client } from '../prismic-config';
import { RichText } from 'prismic-reactjs';
import { constants } from '../utils/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/button/Button';
import PageTitle from '../components/title/PageTitle';
import AboutContent from '../components/content/AboutContent';
import MainLayout from '../components/layout/MainLayout';

type About = {
  // content
};

type Props = {
  about: any;
};

const About: NextPage<Props> = (props) => {
  const { about } = props;

  return (
    <MainLayout>
      <PageTitle>{constants.pages.about}</PageTitle>
      <div className='flex flex-col my-24 sm:grid sm:grid-cols-2 sm:mx-12'>
        <div className='flex justify-center mx-4'>
          <Image
            src={about.image.url}
            alt={constants.fullname}
            width='450'
            height='300'
          />
        </div>
        <div className='mx-4 my-4 sm:my-0'>
          <AboutContent
            title='From Tourism...'
            content={RichText.asText(about.description)}
          />
        </div>
      </div>
      <div className='w-full flex justify-around m-auto sm:w-1/3 sm:justify-between'>
        <Button variant='download'>
          <Link href={about.link.url}>
            <a target='_blank'>{constants.resume}</a>
          </Link>
        </Button>
        <Button>
          <Link href={about.link.url}>
            <a target='_blank'>{constants.skills}</a>
          </Link>
        </Button>
      </div>
      <div className='flex flex-col my-24 sm:grid sm:grid-cols-2 sm:mx-12'>
        <div className='mx-4 my-4 sm:my-0'>
          <AboutContent
            title='...To web Development'
            content={RichText.asText(about.description)}
          />
        </div>
        <div className='flex justify-center mx-4'>
          <Image
            src={about.image.url}
            alt={constants.fullname}
            width='450'
            height='300'
          />
        </div>
      </div>
    </MainLayout>
  );
};

// "getStaticProps" returns an object that contains the props, and inside the info that we want to send into the component
export async function getStaticProps() {
  // The getSingle means we want to retrieve a unique content
  // We pass as argument the UID we established for in the custom type

  /* const home = await client.getSingle("blog_home") */

  const res = await client.query(
    Prismic.Predicates.at('document.type', 'abouttest')
  );
  const about = await res.results[0].data;

  return {
    props: {
      about,
    },
  };
}

export default About;
