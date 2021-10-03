import { FC } from 'react';
import Link from 'next/link';
import {
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineMail,
  AiOutlineUser,
} from 'react-icons/ai';
import { constants } from '../../utils/constants/constants';

type Props = {};

const nav = [
  { path: '/', icon: <AiOutlineHome />, label: 'Home' },
  { path: '/about', icon: <AiOutlineUser />, label: 'About' },
  { path: '/portfolio', icon: <AiOutlineLaptop />, label: 'Portfolio' },
  { path: '/contact', icon: <AiOutlineMail />, label: 'Contact' },
];

const Header: FC<Props> = () => {
  return (
    <header>
      <h1 className='text-3xl sm:text-base'>{constants.fullname}</h1>
      <nav>
        <ul>
          {nav.map((page) => (
            <li
              key={nav.indexOf(page)}
              className='flex text-2xl sm:text-base sm:text-gray-400 sm:hover:tracking-widest sm:hover:text-current sm:hover:duration-700'
            >
              {page.icon}
              <Link href={page.path}>
                <a className='px-4'>{page.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
