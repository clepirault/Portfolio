import { FC, ReactNode, useState } from 'react';
import Header from '../header/Header';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

type Props = {
  children: ReactNode;
};

const MobileLayout: FC<Props> = (props) => {
  const { children } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(true);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className='relative flex flex-col sm:flex-row'>
      {menuOpen && (
        <div>
          <button
            className='text-4xl block absolute top-0 right-0 sm:hidden'
            type='button'
            onClick={handleClose}
          >
            <AiOutlineClose />
          </button>
          <div className='flex flex-col h-screen w-full sm:w-3/12 justify-center items-center'>
            <div className='sm:block sm:fixed'>
              <Header />
            </div>
          </div>
        </div>
      )}
      {!menuOpen && (
        <main className='relative sm:w-9/12 bg-gray-100'>
          <button
            className='text-4xl block absolute top-0 right-0 sm:hidden'
            type='button'
            onClick={handleOpen}
          >
            <AiOutlineMenu />
          </button>
          {children}
        </main>
      )}
    </div>
  );
};

export default MobileLayout;
