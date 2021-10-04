import { FC } from 'react';

type Props = {
  title: string;
  openDescription: () => void;
};

const ProjectHero: FC<Props> = (props) => {
  const { openDescription, title } = props;
  return (
    <div className='bg-black text-white w-80 h-80 m-4 sm:hover:bg-gray-700'>
      <button onClick={openDescription}>{title}</button>
    </div>
  );
};

export default ProjectHero;
