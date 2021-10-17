import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SecondaryTitle: FC<Props> = (props) => {
  const { children } = props;
  return (
    <h3 className='tracking-wider text-3xl text-[#b9aa95] capitalize'>
      {children}
    </h3>
  );
};

export default SecondaryTitle;
