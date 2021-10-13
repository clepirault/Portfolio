import { FC } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import AboutContent from '../content/AboutContent';

type Props = {
  closeDescription?: () => void;
  open: boolean;
  title: string;
  image: any;
  description: string;
};

Modal.setAppElement('div');

const project = {
  image: 'project',
  stack: 'stack',
  links: 'links',
};

const ProjectDescription: FC<Props> = (props) => {
  const { closeDescription, open, title, image, description } = props;
  return (
    <Modal
      isOpen={open}
      onRequestClose={closeDescription}
      shouldCloseOnOverlayClick={false}
      className='relative w-11/12 h-5/6 mt-8 sm:w-3/5 sm:h-3/4 m-auto sm:mt-16 rounded-sm shadow-md bg-white'
    >
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
    </Modal>
  );
};

export default ProjectDescription;
