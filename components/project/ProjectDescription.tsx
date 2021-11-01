import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import MainModal from '../modal/MainModal';
import Button from '../button/Button';
import Link from 'next/link';
import ProjectTitle from '../title/ProjectTitle';
import SkillsContent from '../content/SkillsContent';

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
    'text-justify break-words font-description text-gray-400 leading-loose sm:px-8 py-8';

  return (
    <MainModal open={open} closeDescription={closeDescription}>
      <button
        onClick={closeDescription}
        className='absolute top-0 right-0 text-2xl text-[#b9aa95]'
      >
        <AiOutlineClose />
      </button>
      <div className='flex flex-col items-center px-8'>
        <ProjectTitle>{title}</ProjectTitle>
        <p className={text}>{description}</p>
        <SkillsContent skills={stack} />
        <div className='flex justify-center items-center w-full'>
          <div className='py-16 px-4 sm:px-0 w-[90%] sm:w-[40%]'>
            <ul className='list-disc leading-loose'>
              {list.map((item, index) => (
                <li key={index} className='capitalize'>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex justify-center'>
          {video !== undefined && (
            <video controls width='100%' height='auto'>
              <source src={video} type='video/mp4' />
            </video>
          )}
          {image.url !== undefined && image.portrait.alt === null && (
            <Image src={image.url} alt={image.alt} width='450' height='300' />
          )}
          {image.url !== undefined && image.portrait.alt !== null && (
            <Image
              src={image.portrait.url}
              alt={image.portrait.alt}
              width='200'
              height='350'
            />
          )}
        </div>
        <p className={text}>{contributions}</p>
        <div className='flex flex-col h-40 items-center sm:h-auto sm:flex-row sm:w-[60%] justify-around mt-12 mb-20'>
          {website !== undefined && (
            <Button type='button' variant='link'>
              <Link href={website}>
                <a target='_blank'>website</a>
              </Link>
            </Button>
          )}
          {github !== undefined && (
            <Button type='button' variant='github'>
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
