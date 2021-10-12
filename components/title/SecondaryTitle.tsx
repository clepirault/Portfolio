import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SecondaryTitle: FC<Props> = (props) => {
  const { children } = props;
  return (
    <h3 className='tracking-wider text-3xl text-secondaryTitle'>{children}</h3>
  );
};

export default SecondaryTitle;
