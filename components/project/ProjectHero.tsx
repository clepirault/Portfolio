import { FC } from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  uid: string;
};

const ProjectHero: FC<Props> = (props) => {
  const { title, uid } = props;
  return (
    <div className='bg-black text-white w-80 h-80 m-4 sm:hover:bg-gray-700'>
      <Link href={`/portfolio/${uid}`}>
        <a>{title}</a>
      </Link>
    </div>
  );
};

export default ProjectHero;
