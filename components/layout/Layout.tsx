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
      <div className='flex flex-col h-screen w-full sm:w-3/12 bg-gray-100 justify-center sm:items-stretch items-center'>
        <Header />
        <div className='hidden sm:flex sm:absolute sm:bottom-0 sm:left-0'>
          <Footer />
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
