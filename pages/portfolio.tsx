import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Prismic from 'prismic-javascript';
import { client } from '../prismic-config';
import ProjectHero from '../components/project/ProjectHero';
// import { RichText } from 'prismic-reactjs';
// "prismic-reactjs" You can convert rich text from Prismic into HTML with it

type Props = {
  portfolio: string[];
};

const Portfolio: NextPage<Props> = (props) => {
  const { portfolio } = props;

  return (
    <div>
      <Layout>
        <div className='flex flex-col mt-12'>
          <h1 className='mb-12'>Portfolio</h1>
          <div className='flex justify-center'>
            <div className='sm:grid sm:grid-cols-2 flex flex-col'>
              {portfolio.map((project: any, index: number) => (
                <ProjectHero
                  key={index}
                  title={project.data.title[0].text}
                  uid={project.uid}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

// "getStaticProps" returns an object that contains the props, and inside the info that we want to send into the component
export async function getStaticProps() {
  const res = await client.query(
    Prismic.Predicates.at('document.type', 'project-test') // 2nd arg is the API ID of the custom type
  );

  const portfolio = await res.results.map((project) => {
    return project;
  });

  return {
    props: {
      portfolio,
    },
  };
}

export default Portfolio;
