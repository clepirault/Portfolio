import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const PageTitle: FC<Props> = (props) => {
  const { children } = props;
  return (
    <h2 className='ml-4 mt-12 uppercase tracking-wider font-bold text-2xl sm:ml-12'>
      {children}
    </h2>
  );
};

export default PageTitle;
