import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Prismic from 'prismic-javascript';
import { client } from '../prismic-config';
// import { RichText } from 'prismic-reactjs';
// "prismic-reactjs" You can convert rich text from Prismic into HTML with it

type Props = {
  paths: any;
  portfolio: string[];
};

const Portfolio: NextPage<Props> = (props) => {
  const { paths, portfolio } = props;

  console.log(portfolio);
  // result : [{…}, {…}, {…}]
  // [0] :
  /* 
  {
    title: [ [Object] ],
    description: [ [Object] ],
    link: { link_type: 'Web', url: 'https://github.com/clepiraulthttps://' },
    image: {
      dimensions: [Object],
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/clepi-portfolio/91093222-7e7c-4369-879f-38949a7f11ae_github.png?auto=compress,format'
    } */

  return (
    <div>
      <Layout>
        <h1>Portfolio</h1>
        <ul>
          {portfolio.map((project: any, index: number) => (
            <li key={index}>{project.title[0].text}</li>
          ))}
        </ul>
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
    Prismic.Predicates.at('document.type', 'project-test'), // 2nd arg is the API ID of the custom type
    {
      /* orderings: "[my.post.date desc]" */
    }
  );

  const portfolio = res.results.map((project) => {
    return project.data;
  });

  return {
    props: {
      /* home, */
      portfolio,
    },
  };
}

// "getStaticPaths" is the helper that builds all the pages in build time to match with the possible paths that the user can insert.
/* export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at('document.type', 'project-test')
  );

  const paths = results.map((project) => ({
    params: {
      uid: project.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
} */

export default Portfolio;
