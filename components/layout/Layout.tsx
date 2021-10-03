import { FC, ReactNode } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='flex flex-col h-screen w-full sm:w-3/12 justify-center items-center'>
        <div>
          <Header />
        </div>
        <div className='hidden sm:block sm:absolute sm:bottom-0 sm:left-0'>
          <Footer />
        </div>
      </div>
      <main className='sm:w-9/12 bg-gray-100'>{children}</main>
    </div>
  );
};

export default Layout;
