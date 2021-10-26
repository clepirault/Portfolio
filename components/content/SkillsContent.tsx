import { FC } from 'react';
import {
  SiJavascript,
  SiNextDotJs,
  SiMysql,
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiJest,
  SiPrismic,
  SiTailwindcss,
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaAws } from 'react-icons/fa';

type Props = {
  skills: Array<any>;
};

const SkillsContent: FC<Props> = (props) => {
  const { skills } = props;

  const getIcon = (skill) => {
    if (skill === 'html') {
      return <AiFillHtml5 />;
    } else if (skill === 'css') {
      return <FaCss3Alt />;
    } else if (skill === 'javascript') {
      return <SiJavascript />;
    } else if (skill === 'typescript') {
      return <SiTypescript />;
    } else if (skill === 'react') {
      return <FaReact />;
    } else if (skill === 'node') {
      return <FaNodeJs />;
    } else if (skill === 'mysql') {
      return <SiMysql />;
    } else if (skill === 'git') {
      return <FaGitAlt />;
    } else if (skill === 'next') {
      return <SiNextDotJs />;
    } else if (skill === 'graphql') {
      return <SiGraphql />;
    } else if (skill === 'mongodb') {
      return <SiMongodb />;
    } else if (skill === 'aws') {
      return <FaAws />;
    } else if (skill === 'jest') {
      return <SiJest />;
    } else if (skill === 'prismic') {
      return <SiPrismic />;
    } else if (skill === 'tailwind') {
      return <SiTailwindcss />;
    }
    return skill;
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center text-[#b9aa95]'>
        <h3 className='mb-4'>Skills</h3>
        <ul className='text-4xl flex justify-center flex-wrap gap-6'>
          {skills.map((item, index) => (
            <li key={index} title={item.text}>
              {getIcon(item.text)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsContent;
