import { FC, ReactNode } from 'react';
import Modal from 'react-modal';

type Props = {
  children: ReactNode;
  closeDescription?: () => void;
  open: boolean;
};

Modal.setAppElement('div');

const MainModal: FC<Props> = (props) => {
  const { children, closeDescription, open } = props;
  return (
    <Modal
      isOpen={open}
      onRequestClose={closeDescription}
      shouldCloseOnOverlayClick={false}
      className='relative w-[95%] h-[95%] mt-4 sm:w-1/2 sm:h-[80%] m-auto sm:mt-16 rounded-sm shadow-md bg-white overflow-auto'
    >
      {children}
    </Modal>
  );
};

export default MainModal;
