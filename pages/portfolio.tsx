import type { NextPage } from 'next';
import Prismic from 'prismic-javascript';
import { client } from '../prismic-config';
import ProjectHero from '../components/project/ProjectHero';
import PageTitle from '../components/title/PageTitle';
import { constants } from '../utils/constants/constants';
import MainLayout from '../components/layout/MainLayout';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
// import { RichText } from 'prismic-reactjs';
import FilterButton from '../components/button/FilterButton';
// "prismic-reactjs" You can convert rich text from Prismic into HTML with it

const filters = [
  { label: 'all', value: '' },
  { label: 'typescript', value: 'typescript' },
  { label: 'internship project', value: 'internship project' },
  { label: 'personal project', value: 'personal project' },
  { label: 'wild code school project', value: 'wild code school project' },
];

type Props = {
  portfolio: string[];
};

const Portfolio: NextPage<Props> = (props) => {
  const { portfolio } = props;

  const [info, setInfo] = useState('');
  const [open, setOpen] = useState(false);

  const getProjectInfo = (element: Array<any>) => {
    const results = element.map((info: any) => info.text);
    return results;
  };

  const handleClick = (e) => {
    setInfo(e.target.value);
    setOpen(!open);
  };

  const handleOpenFilter = () => {
    setOpen(!open);
  };

  const handleRemoveFilter = () => {
    setInfo('');
  };

  return (
    <MainLayout>
      <div className='flex flex-col'>
        <PageTitle>{constants.pages.portfolio}</PageTitle>
        <div className='flex items-center justify-between text-[#b9aa95] font-bold w-32 mx-auto sm:mx-12 mt-8'>
          <span className='capitalize tracking-widest '>Filter by</span>
          <button onClick={handleOpenFilter}>
            <FiChevronDown />
          </button>
        </div>
        {open && (
          <div className='flex flex-col text-sm sm:flex-row sm:justify-center mt-4'>
            <div className='flex flex-col items-center sm:flex-row sm:w-[80%] sm:justify-between leading-loose gap-2'>
              {filters.map((filter, index) => (
                <FilterButton
                  onClick={handleClick}
                  value={filter.value}
                  type='button'
                  key={index}
                  variant='filter'
                >
                  {filter.label}
                </FilterButton>
              ))}
            </div>
          </div>
        )}
        {info !== '' && (
          <div className='sm:ml-12 mt-12 flex justify-center sm:block'>
            <FilterButton
              onClick={handleRemoveFilter}
              type='button'
              variant='selectedFilter'
            >
              {info}
            </FilterButton>
          </div>
        )}

        <div className='flex justify-center mb-12 mt-12'>
          <div className='sm:grid sm:grid-cols-2 sm:gap-20 flex flex-col'>
            {portfolio
              .filter(
                (project: any) =>
                  !info ||
                  getProjectInfo(project.data.stack).includes(info) ||
                  getProjectInfo(project.data.list).includes(info)
              )
              .map((project: any, index: number) => (
                <ProjectHero
                  key={index}
                  title={project.data.title[0].text}
                  uid={project.uid}
                />
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// "getStaticProps" returns an object that contains the props, and inside the info that we want to send into the component
export async function getStaticProps() {
  const res = await client.query(
    Prismic.Predicates.at('document.type', 'project'),
    // 2nd arg is the API ID of the custom type
    { orderings: '[my.project.order desc]' }
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
