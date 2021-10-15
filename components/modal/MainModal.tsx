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
      className='relative w-11/12 h-5/6 mt-8 sm:w-3/5 sm:h-3/4 m-auto sm:mt-16 rounded-sm shadow-md bg-white overflow-auto'
    >
      {children}
    </Modal>
  );
};

export default MainModal;
