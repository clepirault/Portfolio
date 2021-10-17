import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import AboutContent from '../content/AboutContent';
import MainModal from '../modal/MainModal';

type Props = {
  closeDescription?: () => void;
  open: boolean;
  title: string;
  image: any;
  description: string;
  video: any;
};

const project = {
  image: 'project',
  stack: 'stack',
  links: 'links',
};

const ProjectDescription: FC<Props> = (props) => {
  const { closeDescription, open, title, image, description, video } = props;
  return (
    <MainModal open={open} closeDescription={closeDescription}>
      <button
        onClick={closeDescription}
        className='absolute top-0 right-0 text-2xl'
      >
        <AiOutlineClose />
      </button>
      <div className='flex flex-col items-center'>
        <h3>{title}</h3>
        <video controls width='80%' height='auto'>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <div className='sm:grid sm:grid-cols-2 p-8'>
        <div>
          <Image src={image} alt={project.image} width='300' height='300' />
        </div>
        <div>
          <AboutContent title={title} content={description} />
        </div>
        <div>
          <h3>{project.stack}</h3>
        </div>
        <div>
          <h3>{project.links}</h3>
        </div>
      </div>
    </MainModal>
  );
};

export default ProjectDescription;
