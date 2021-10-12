import { FC } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  closeDescription?: () => void;
  open: boolean;
  title: string;
};

Modal.setAppElement('div');

const ProjectDescription: FC<Props> = (props) => {
  const { closeDescription, open, title } = props;
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
      <div className='sm:grid sm:grid-cols-2 sm:h-full'>
        <div>
          <h2>{title}</h2>
          <p>Description content</p>
        </div>
        <div>div 2</div>
        <div>div 3</div>
        <div>div 4</div>
      </div>
    </Modal>
  );
};

export default ProjectDescription;
