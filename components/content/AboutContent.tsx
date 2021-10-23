import { FC } from 'react';
import Button from '../button/Button';
import Link from 'next/link';
import { constants } from '../../utils/constants/constants';

type Props = {
  title: string;
  content: string;
  link?: string;
};

const AboutContent: FC<Props> = (props) => {
  const { title, content, link } = props;
  return (
    <div>
      <h3 className='mb-8'>{title}</h3>
      <p className='break-words text-justify font-description text-gray-400 leading-loose'>
        {content}
      </p>
      {link !== undefined && (
        <div className='flex justify-center mt-8'>
          <Button type='button' variant='download'>
            <Link href={link}>
              <a target='_blank'>{constants.wcs}</a>
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AboutContent;
