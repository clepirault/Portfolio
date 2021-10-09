import { FC } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  closeDescription: () => void;
  open: boolean;
};

Modal.setAppElement('div');

const ProjectDescription: FC<Props> = (props) => {
  const { closeDescription, open } = props;
  return (
    <Modal
      isOpen={open}
      onRequestClose={closeDescription}
      shouldCloseOnOverlayClick={false}
      className='relative w-11/12 h-5/6 mt-8 sm:w-3/6 sm:h-3/6 m-auto sm:mt-32 rounded-sm bg-white shadow-md'
    >
      <h2>Description title</h2>
      <p>Description content</p>
      <button onClick={closeDescription} className='absolute top-0 right-0'>
        <AiOutlineClose />
      </button>
    </Modal>
  );
};

export default ProjectDescription;
