import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ProjectTitle: FC<Props> = (props) => {
  const { children } = props;
  return (
    <h3 className='text-3xl text-[#b9aa95] my-12 capitalize text-center'>
      {children}
    </h3>
  );
};

export default ProjectTitle;
