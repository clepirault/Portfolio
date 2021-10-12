import { FC, ReactNode } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: string;
};

const Button: FC<Props> = (props) => {
  const { children, onClick, variant } = props;
  return (
    <span className='inline-flex items-center border-solid border-3 border-black text-black px-4 py-2'>
      <button type='button' onClick={onClick} className='tracking-widest'>
        {children}
      </button>
      {variant === 'download' && <AiOutlineDownload />}
    </span>
  );
};

export default Button;
