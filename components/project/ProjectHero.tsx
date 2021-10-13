import { FC } from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  uid: string;
};

// bg-gradient-to-tr from-primaryBlue to-secondaryBlue

const ProjectHero: FC<Props> = (props) => {
  const { title, uid } = props;
  return (
    <div className='flex justify-center items-center w-80 h-80 m-4 bg-black text-white sm:border-solid sm:border-3 sm:border-black sm:bg-gray-100 sm:text-black sm:hover:bg-black sm:hover:text-white'>
      <Link href={`/portfolio/${uid}`}>
        <a className='text-6xl capitalize font-handwriting'>{title}</a>
      </Link>
    </div>
  );
};

export default ProjectHero;
