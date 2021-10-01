import { FC, ReactNode } from 'react';
import Header from '../header/Header';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>
        <h3 className='flex'>
          <AiOutlineCopyrightCircle /> Clémence Pirault{' '}
          {new Date().getFullYear()}
        </h3>
      </footer>
    </div>
  );
};

export default Layout;
