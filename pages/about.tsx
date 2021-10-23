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
import { useRouter } from 'next/router';

type About = {
  // content
};

type Props = {
  about: any;
};

const About: NextPage<Props> = (props) => {
  const { about } = props;

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    router.push('/about');
  };

  return (
    <MainLayout>
      <PageTitle>{constants.pages.about}</PageTitle>
      <div className='flex flex-col my-24 sm:grid sm:grid-cols-2 sm:mx-12'>
        <div className='flex justify-center mx-4 mb-8 sm:mb-0'>
          <Image
            src={about.image1.url}
            alt={constants.fullname}
            quality={100}
            width='450'
            height='300'
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
          {constants.others}
        </Button>
      </div>
      <div className='flex flex-col my-24 sm:grid sm:grid-cols-2 sm:mx-12'>
        <div className='mx-4 my-4 sm:my-0'>
          <AboutContent
            title={about.title2[0].text}
            content={RichText.asText(about.description2)}
            link={about.link2.url}
          />
        </div>
        <div className='flex justify-center mx-4 mt-8 sm:mt-0'>
          <Image
            src={about.image2.url}
            alt={constants.fullname}
            width='450'
            height='300'
          />
        </div>
      </div>
      {open && (
        <OtherContent
          image={about.image3}
          content={RichText.asText(about.description3)}
          title={about.title3[0].text}
          open={open}
          closeModal={handleCloseModal}
          list={about.list}
          skills={about.skills}
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
    Prismic.Predicates.at('document.type', 'aboutpage')
  );
  const about = await res.results[0].data;

  return {
    props: {
      about,
    },
  };
}

export default About;
