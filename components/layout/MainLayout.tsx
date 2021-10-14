import { FC, ReactNode, useEffect, useState } from 'react';
import Layout from './Layout';
import MobileLayout from './MobileLayout';

// window is not defined on the server, so you can’t use it during the render of a component being SSR

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = (props) => {
  const { children } = props;

  const GetDeviceSize = () => {
    const [width, setWidth] = useState(0);
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return width;
  };

  const width = GetDeviceSize();

  return (
    <div>
      {width > 640 ? (
        <Layout>{children}</Layout>
      ) : (
        <MobileLayout>{children}</MobileLayout>
      )}
    </div>
  );
};

export default MainLayout;
