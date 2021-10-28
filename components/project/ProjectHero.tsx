import { FC } from 'react';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  uid: string;
};

// bg-gradient-to-tr from-primaryBlue to-secondaryBlue

const ProjectHero: FC<Props> = (props) => {
  const { title, uid } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/portfolio/${uid}`);
  };

  return (
    <button onClick={handleClick}>
      <div className='flex justify-center items-center w-80 h-80 m-4 bg-black text-white sm:border-solid sm:border-[3px] sm:border-black sm:bg-gray-100 sm:text-black sm:hover:bg-black sm:hover:text-white'>
        <h3 className='capitalize tracking-widest'>{title}</h3>
      </div>
    </button>
  );
};

export default ProjectHero;
