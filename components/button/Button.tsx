import { FC, ReactNode } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: string;
  type: 'button' | 'submit';
};

const Button: FC<Props> = (props) => {
  const { children, onClick, variant, type } = props;
  return (
    <span className='inline-flex items-center border-solid border-[3px] border-black text-black px-4 py-2'>
      <button type={type} onClick={onClick} className='tracking-widest'>
        {children}
      </button>
      {variant === 'download' && <AiOutlineDownload />}
    </span>
  );
};

export default Button;
