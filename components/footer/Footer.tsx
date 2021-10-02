import { FC } from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { constants } from '../../utils/constants/constants';

type Props = {};

const Footer: FC<Props> = () => {
  return (
    <footer>
      <h3 className='flex'>
        <AiOutlineCopyrightCircle /> {constants.fullname}{' '}
        {new Date().getFullYear()}
      </h3>
    </footer>
  );
};

export default Footer;
