import { FC } from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { constants } from '../../utils/constants/constants';

const Footer: FC = () => {
  return (
    <footer>
      <span className='flex items-center text-sm'>
        <AiOutlineCopyrightCircle /> {constants.fullname}{' '}
        {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
