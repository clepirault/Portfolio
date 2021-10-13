import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const MainTitle: FC<Props> = (props) => {
  const { children } = props;
  return (
    <h1 className='tracking-widest font-bold text-5xl mb-4 capitalize'>
      {children}
    </h1>
  );
};

export default MainTitle;
