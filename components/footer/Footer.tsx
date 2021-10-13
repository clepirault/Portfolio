import { FC } from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { constants } from '../../utils/constants/constants';

type Props = {};

const Footer: FC<Props> = () => {
  return (
    <footer>
      <h5 className='flex items-center'>
        <AiOutlineCopyrightCircle /> {constants.fullname}{' '}
        {new Date().getFullYear()}
      </h5>
    </footer>
  );
};

export default Footer;
