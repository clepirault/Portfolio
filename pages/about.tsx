import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Prismic from 'prismic-javascript';
import { client } from '../prismic-config';
import { RichText } from 'prismic-reactjs';
import { constants } from '../utils/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/button/Button';

type About = {
  // content
};

type Props = {
  about: any;
};

const About: NextPage<Props> = (props) => {
  const { about } = props;

  console.log(about);

  return (
    <div>
      <Layout>
        <h1>{about.title[0].text}</h1>
        <Image
          src={about.image.url}
          alt={constants.fullname}
          width='300'
          height='300'
        />
        <p className='break-words font-aboutDescription text-gray-400'>
          {RichText.asText(about.description)}
        </p>
        <Button variant='download'>
          <Link href={about.link.url}>
            <a>{constants.resume}</a>
          </Link>
        </Button>
      </Layout>
    </div>
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
  const about = res.results[0].data;

  return {
    props: {
      about,
    },
  };
}

export default About;
