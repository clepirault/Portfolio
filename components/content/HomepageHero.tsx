import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MainTitle from '../title/MainTitle';
import SecondaryTitle from '../title/SecondaryTitle';

type Props = {
  mainTitle: string;
  secondaryTitle: string;
  linkedin: string;
  github: string;
  location: string;
};

const HomepageHero: FC<Props> = (props) => {
  const { mainTitle, secondaryTitle, linkedin, github, location } = props;
  return (
    <div className='flex flex-col mx-4 mt-20 sm:items-end sm:mt-36 sm:mx-36 sm:mb-12'>
      <MainTitle>{mainTitle}</MainTitle>
      <SecondaryTitle>{secondaryTitle}</SecondaryTitle>
      <div className='flex justify-center mt-8 sm:block sm:mt-0'>
        <div className='flex text-2xl sm:text-3xl mt-4 w-52 sm:w-60 justify-around'>
          <Link href={linkedin}>
            <a target='_blank'>
              <AiFillLinkedin />
            </a>
          </Link>
          <Link href={github}>
            <a target='_blank'>
              <AiFillGithub />
            </a>
          </Link>
          <div className='flex items-baseline'>
            <FaMapMarkerAlt />
            <p className='text-sm capitalize'>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
