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
import OtherContent from '../components/content/OtherContent';
import { useState } from 'react';

type About = {
  // content
};

type Props = {
  about: any;
};

const About: NextPage<Props> = (props) => {
  const { about } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <MainLayout>
      <PageTitle>{constants.pages.about}</PageTitle>
      <div className='flex flex-col my-24 sm:grid sm:grid-cols-2 sm:mx-12'>
        <div className='flex justify-center mx-4'>
          <Image
            src={about.image1.url}
            alt={constants.fullname}
            quality={100}
            width={450}
            height={300}
          />
        </div>
        <div className='mx-4 my-4 sm:my-0'>
          <AboutContent
            title={about.title1[0].text}
            content={RichText.asText(about.description1)}
          />
        </div>
      </div>
      <div className='w-full flex justify-around m-auto sm:w-1/3 sm:justify-between'>
        <Button variant='download' type='button'>
          <Link href={about.link1.url}>
            <a target='_blank'>{constants.resume}</a>
          </Link>
        </Button>
        <Button onClick={handleOpenModal} type='button'>
          {constants.skills}
        </Button>
      </div>
      <div className='flex flex-col my-24 sm:grid sm:grid-cols-2 sm:mx-12'>
        <div className='mx-4 my-4 sm:my-0'>
          <AboutContent
            title={about.title2[0].text}
            content={RichText.asText(about.description2)}
          />
        </div>
        <div className='flex justify-center mx-4'>
          <Image
            src={about.image2.url}
            alt={constants.fullname}
            width='450'
            height='300'
          />
        </div>
      </div>
      {isModalOpen && (
        <OtherContent
          illustration={about.image3.url}
          content={RichText.asText(about.description2)}
        />
      )}
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
