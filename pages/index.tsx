import type { NextPage } from 'next';
import { client } from '../prismic-config';
import Prismic from 'prismic-javascript';
import Image from 'next/image';
import MainLayout from '../components/layout/MainLayout';
import Zoom from 'react-reveal/Zoom';
import { constants } from '../utils/constants/constants';
import HomepageHero from '../components/content/HomepageHero';
import Link from 'next/link';

type Props = {
  homepage: any; // todo : find other type
};

const Home: NextPage<Props> = (props) => {
  const { homepage } = props;

  return (
    <MainLayout>
      <div>
        <Zoom>
          <HomepageHero
            mainTitle={homepage.primarytitle[0].text}
            secondaryTitle={homepage.secondarytitle[0].text}
            linkedin={homepage.linkedin.url}
            github={homepage.github.url}
            location={homepage.optionalcontent[0].text}
            resume={homepage.resume.url}
          />
        </Zoom>
      </div>
      <div className='mt-16 mb-0 sm:my-12 sm:mx-12'>
        <Image
          src={homepage.image.url}
          alt={homepage.image.alt}
          width='600'
          height='400'
        />
      </div>
      <p className='hidden sm:text-sm sm:block sm:fixed sm:bottom-2 sm:right-2 sm:bg-white sm:bg-opacity-25 sm:shadow-xl sm:px-2 sm:py-1'>
        {constants.stack}{' '}
        <Link href='https://clemence-pirault.vercel.app/portfolio/portfolio-v2'>
          <a target='_blank' className='text-[#b9aa95] hover:underline'>
            Learn more
          </a>
        </Link>
      </p>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const res = await client.query(
    Prismic.Predicates.at('document.type', 'homepage'),
    { orderings: '[my.project.date]' }
  );
  const homepage = await res.results[0].data;

  return {
    props: {
      homepage,
    },
  };
}

export default Home;
