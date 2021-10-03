import { FC, ReactNode } from 'react';
import { AiOutlineDownload, AiOutlineInfoCircle } from 'react-icons/ai';

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'download' | 'information';
};

const Button: FC<Props> = (props) => {
  const { children, type, onClick, variant } = props;
  return (
    <span className='inline-flex rounded-md shadow-sm bg-black text-white p-2'>
      {variant === 'information' && <AiOutlineInfoCircle />}
      <button
        className='flex flex-col items-center'
        type={type}
        onClick={onClick}
      >
        {children}
        {variant === 'download' && <AiOutlineDownload />}
      </button>
    </span>
  );
};

export default Button;
