import { FC, ReactNode } from 'react';
import { AiOutlineDownload, AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'download' | 'github' | 'link';
  type: 'button' | 'submit';
  disabled?: any;
};

// disabled={isSubmitting}

const Button: FC<Props> = (props) => {
  const { children, onClick, variant, type, disabled } = props;
  const icon = 'ml-2';
  return (
    <span className='inline-flex items-center border-solid border-[3px] border-black text-black px-4 py-2'>
      <button
        type={type}
        onClick={onClick}
        className='tracking-widest'
        disabled={disabled}
      >
        {children}
      </button>
      {variant === 'download' && <AiOutlineDownload className={icon} />}
      {variant === 'github' && <AiFillGithub className={icon} />}
      {variant === 'link' && <FiExternalLink className={icon} />}
    </span>
  );
};

export default Button;
