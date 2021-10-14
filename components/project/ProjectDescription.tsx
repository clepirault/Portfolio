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
};

const project = {
  image: 'project',
  stack: 'stack',
  links: 'links',
};

const ProjectDescription: FC<Props> = (props) => {
  const { closeDescription, open, title, image, description } = props;
  return (
    <MainModal open={open} closeDescription={closeDescription}>
      <button onClick={closeDescription} className='absolute top-0 right-0'>
        <AiOutlineClose />
      </button>
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
