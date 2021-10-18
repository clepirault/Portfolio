import type { NextPage } from 'next';
import Link from 'next/link';
import { client } from '../prismic-config';
import Prismic from 'prismic-javascript';
import Image from 'next/image';
import MainLayout from '../components/layout/MainLayout';
import Zoom from 'react-reveal/Zoom';
import Button from '../components/button/Button';
import { constants } from '../utils/constants/constants';
import HomepageHero from '../components/content/HomepageHero';

type Props = {
  homepage: any; // todo : find other type
};

const Home: NextPage<Props> = (props) => {
  const { homepage } = props;

  return (
    <MainLayout>
      <div className='relative'>
        <Zoom>
          <HomepageHero
            mainTitle={homepage.primarytitle[0].text}
            secondaryTitle={homepage.secondarytitle[0].text}
            linkedin={homepage.linkedin.url}
            github={homepage.github.url}
            location={homepage.optionalcontent[0].text}
          />
        </Zoom>
      </div>
      <div className='sm:flex sm:flex-row'>
        <div className='hidden sm:flex sm:justify-center sm:mb-12 sm:mx-12 sm:w-1/2'>
          <Image
            src={homepage.image.url}
            alt={homepage.image.alt}
            width='600'
            height='400'
          />
        </div>
        <div className='hidden'>
          <Button variant='download' type='button'>
            <Link href={homepage.resume.url}>
              <a target='_blank'>{constants.resume}</a>
            </Link>
          </Button>
        </div>
        <p className='hidden sm:text-sm sm:block sm:fixed sm:bottom-0 sm:right-1'>
          {constants.stack}
        </p>
      </div>
    </MainLayout>
  );
};

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
