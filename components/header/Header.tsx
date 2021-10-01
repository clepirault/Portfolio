import { FC } from 'react';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineLaptop, AiOutlineMail } from 'react-icons/ai';
import { GrUserFemale } from 'react-icons/gr';

type Props = {};

const nav = [
  { path: '/', icon: <AiOutlineHome />, label: 'Home' },
  { path: '/about', icon: <GrUserFemale />, label: 'About' },
  { path: '/portfolio', icon: <AiOutlineLaptop />, label: 'Portfolio' },
  { path: '/contact', icon: <AiOutlineMail />, label: 'Contact' },
];

const Header: FC<Props> = () => {
  return (
    <header>
      <h1>Clémence Pirault</h1>
      <nav>
        <ul>
          {nav.map((page) => (
            <li key={nav.indexOf(page)} className='flex'>
              {page.icon}
              <Link href={page.path}>
                <a>{page.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
