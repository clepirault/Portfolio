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
    <div className='relative flex flex-col'>
      {menuOpen && (
        <div>
          <button
            className='text-4xl block absolute top-0 right-0'
            type='button'
            onClick={handleClose}
          >
            <AiOutlineClose />
          </button>
          <div className='flex flex-col h-screen justify-center items-center'>
            <div className='block fixed'>
              <Header />
            </div>
          </div>
        </div>
      )}
      {!menuOpen && (
        <main className='bg-gray-100'>
          <div className='bg-white flex justify-end'>
            <button className='text-4xl' type='button' onClick={handleOpen}>
              <AiOutlineMenu />
            </button>
          </div>
          <div>{children}</div>
        </main>
      )}
    </div>
  );
};

export default MobileLayout;
