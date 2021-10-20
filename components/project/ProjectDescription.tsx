import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import MainModal from '../modal/MainModal';
import Button from '../button/Button';
import Link from 'next/link';
import ProjectTitle from '../title/ProjectTitle';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import {
  SiJavascript,
  SiNextDotJs,
  SiMysql,
  SiTypescript,
} from 'react-icons/si';

type Props = {
  closeDescription?: () => void;
  open: boolean;
  title: string;
  description: string;
  list: Array<any>;
  contributions: string;
  stack: Array<any>;
  image: any;
  video: any;
  github: string;
  website: string;
};

const ProjectDescription: FC<Props> = (props) => {
  const {
    closeDescription,
    open,
    title,
    description,
    list,
    contributions,
    stack,
    image,
    video,
    github,
    website,
  } = props;

  const text =
    'flex justify-center break-words font-description text-gray-400 leading-loose py-8';
  const bloc = 'sm:grid sm:grid-cols-2 w-full';

  const getIcon = (stack) => {
    if (stack === 'html') {
      return <AiFillHtml5 />;
    } else if (stack === 'css') {
      return <FaCss3Alt />;
    } else if (stack === 'javascript') {
      return <SiJavascript />;
    } else if (stack === 'typescript') {
      return <SiTypescript />;
    } else if (stack === 'react') {
      return <FaReact />;
    } else if (stack === 'node') {
      return <FaNodeJs />;
    } else if (stack === 'mysql') {
      return <SiMysql />;
    } else if (stack === 'git') {
      return <FaGitAlt />;
    }
    return stack;
  };

  return (
    <MainModal open={open} closeDescription={closeDescription}>
      <button
        onClick={closeDescription}
        className='absolute top-0 right-0 text-2xl text-[#b9aa95]'
      >
        <AiOutlineClose />
      </button>
      <div className='flex flex-col items-center'>
        <ProjectTitle>{title}</ProjectTitle>
        <div className={bloc}>
          <p className={text}>{description}</p>
          <div className='flex justify-center'>
            <ul className='list-disc leading-loose'>
              {list.map((item, index) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='my-12 mx-2'>
          {video !== undefined && (
            <video controls width='80%' height='auto'>
              <source src={video} type='video/mp4' />
            </video>
          )}
          {image.url !== undefined && image.portrait === undefined && (
            <Image src={image.url} alt={image.alt} width='450' height='300' />
          )}
          {image.url !== undefined && image.portrait !== undefined && (
            <Image
              src={image.portrait.url}
              alt={image.portrait.alt}
              width='200'
              height='400'
            />
          )}
        </div>
        <div className={bloc}>
          <div className='flex justify-center items-center'>
            <ul className='text-[#b9aa95] text-4xl flex flex-row'>
              {stack.map((item, index) => (
                <li key={index} className='px-2' title={item.text}>
                  {getIcon(item.text)}
                </li>
              ))}
            </ul>
          </div>
          <p className={text}>{contributions}</p>
        </div>
        <div className='flex flex-col h-40 items-center sm:h-auto sm:flex-row sm:w-[60%] justify-around my-20'>
          {website !== undefined && (
            <Button type='button'>
              <Link href={website}>
                <a target='_blank'>website</a>
              </Link>
            </Button>
          )}
          {github !== undefined && (
            <Button type='button'>
              <Link href={github}>
                <a target='_blank'>watch the code</a>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </MainModal>
  );
};

export default ProjectDescription;
