import { FC, ReactNode } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className='relative flex flex-row'>
      <div className='flex flex-col h-screen w-3/12 justify-center items-center'>
        <div className='block fixed'>
          <Header />
        </div>
        <div className='block fixed bottom-0 left-0'>
          <Footer />
        </div>
      </div>
      <main className='w-9/12 bg-gray-100'>{children}</main>
    </div>
  );
};

export default Layout;
